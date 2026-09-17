import f3 from "https://cdn.jsdelivr.net/npm/family-chart@0.9.0/dist/family-chart.esm.js"

const GEN_COLORS = {
  1: "var(--gen-1)", 2: "var(--gen-2)", 3: "var(--gen-3)", 4: "var(--gen-4)",
  5: "var(--gen-5)", 6: "var(--gen-6)", 7: "var(--gen-7)", 8: "var(--gen-8)",
}
const GEN_LABELS = {
  1: "1st — William & Susannah", 2: "2nd", 3: "3rd", 4: "4th",
  5: "5th", 6: "6th", 7: "7th", 8: "8th",
}
const ROOT_ID = "p1" // William Cooper, set in data/build.js

let chart, cardComponent, rawData

init()

async function init() {
  rawData = await fetch("data/data.json").then((r) => r.json())
  buildLegend()
  wireHero()
  wireTheme()
}

function buildLegend() {
  const legend = document.getElementById("legend")
  legend.innerHTML = Object.entries(GEN_LABELS)
    .map(
      ([gen, label]) => `
      <span class="legend-item" style="background:color-mix(in srgb, ${GEN_COLORS[gen]} 14%, transparent)">
        <span class="legend-swatch" style="background:${GEN_COLORS[gen]}"></span>${label}
      </span>`
    )
    .join("")
}

function wireHero() {
  const hero = document.getElementById("hero")
  const treeView = document.getElementById("tree-view")

  document.getElementById("enter-tree").addEventListener("click", enterTree)
  document.getElementById("back-to-hero").addEventListener("click", () => {
    treeView.hidden = true
    hero.hidden = false
  })
  document.getElementById("hero-scroll-cue")?.addEventListener("click", enterTree)
  document.querySelector(".hero-scroll-cue")?.addEventListener("click", enterTree)

  document.getElementById("show-history").addEventListener("click", () => {
    document.getElementById("history-dialog").showModal()
  })
  document.getElementById("history-close").addEventListener("click", () => {
    document.getElementById("history-dialog").close()
  })

  function enterTree() {
    hero.hidden = true
    treeView.hidden = false
    if (!chart) createFamilyChart()
  }
}

function wireTheme() {
  const btn = document.getElementById("btn-theme")
  const stored = localStorage.getItem("cooper-tree-theme")
  if (stored) document.documentElement.setAttribute("data-theme", stored)
  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light"
    const next = current === "dark" ? "light" : "dark"
    document.documentElement.setAttribute("data-theme", next)
    localStorage.setItem("cooper-tree-theme", next)
    btn.textContent = next === "dark" ? "☀️" : "🌙"
  })
  if (document.documentElement.getAttribute("data-theme") === "dark") btn.textContent = "☀️"
}

function createFamilyChart() {
  const cont = document.getElementById("FamilyChart")

  chart = f3
    .createChart(cont, rawData)
    .setTransitionTime(700)
    .setCardXSpacing(220)
    .setCardYSpacing(130)
    .setSingleParentEmptyCard(false)
    .setAncestryDepth(4)
    .setProgenyDepth(3)

  const card = chart
    .setCard(f3.CardHtml)
    .setCardDim({ width: 180, height: 58 })
    .setCardInnerHtmlCreator(cardInnerHtml)
    .setOnCardClick(onCardClick)

  cardComponent = card

  chart.updateMainId(ROOT_ID)
  chart.updateTree({ initial: true })
  // The library's initial mount uses a 'fit' zoom that shrinks to fit the
  // *entire* visible subtree, which for a wide branch is nearly invisible.
  // Immediately re-center on the root at a fixed, legible scale instead.
  chart.updateTree({ tree_position: "main_to_middle", scale: 0.85, transition_time: 0 })

  setupSearch()
  setupToolbar()
}

function cardInnerHtml(d) {
  const gen = d.data.data.generation || 1
  const color = GEN_COLORS[gen] || GEN_COLORS[8]
  const name = d.data.data["first name"] || "Unknown"
  const isMain = d.data.main
  const unverified = d.data.data.unverified

  return `
    <div class="fc-card${isMain ? " is-main" : ""}" style="--gen-c:${color}">
      <div class="fc-card-name">${escapeHtml(name)}</div>
      <div class="fc-card-meta">
        <span class="fc-gen-dot"></span>
        Gen ${gen}${unverified ? ` <span class="fc-unverified">· unverified</span>` : ""}
      </div>
    </div>
  `
}

function onCardClick(e, d) {
  openDetailPanel(d.data.id)
  chart.updateMainId(d.data.id)
  chart.updateTree({ tree_position: "main_to_middle" })
}

function setupSearch() {
  chart.setPersonDropdown(
    (d) => `${d.data["first name"]} — Gen ${d.data.data ? d.data.data.generation : d.data.generation}`,
    {
      cont: document.getElementById("search-cont"),
      placeholder: "Search a name…",
      onSelect: (id) => {
        openDetailPanel(id)
        chart.updateMainId(id)
        chart.updateTree({ tree_position: "main_to_middle" })
      },
    }
  )
}

function setupToolbar() {
  document.getElementById("btn-home").addEventListener("click", () => {
    closeDetailPanel()
    chart.updateMainId(ROOT_ID)
    chart.updateTree({ tree_position: "main_to_middle" })
  })

  let horizontal = false
  document.getElementById("btn-orientation").addEventListener("click", () => {
    horizontal = !horizontal
    if (horizontal) chart.setOrientationHorizontal()
    else chart.setOrientationVertical()
    chart.updateTree({ tree_position: "inherit" })
  })

  document.getElementById("btn-zoom-in").addEventListener("click", () => zoomBy(1.3))
  document.getElementById("btn-zoom-out").addEventListener("click", () => zoomBy(1 / 1.3))

  function zoomBy(factor) {
    const svg = document.querySelector("#FamilyChart svg")
    if (!svg) return
    f3.handlers.manualZoom({ amount: factor, svg, transition_time: 250 })
  }

  document.getElementById("detail-close").addEventListener("click", closeDetailPanel)
}

function openDetailPanel(id) {
  const person = rawData.find((p) => p.id === id)
  if (!person) return
  const panel = document.getElementById("detail-panel")
  const content = document.getElementById("detail-content")
  const gen = person.data.generation || 1
  const color = GEN_COLORS[gen]

  const spouseNames = (person.rels.spouses || [])
    .map((sid) => rawData.find((p) => p.id === sid))
    .filter(Boolean)
  const childNames = (person.rels.children || [])
    .map((cid) => rawData.find((p) => p.id === cid))
    .filter(Boolean)
  const parentNames = (person.rels.parents || [])
    .map((pid) => rawData.find((p) => p.id === pid))
    .filter(Boolean)

  content.innerHTML = `
    <h2>${escapeHtml(person.data["first name"])}</h2>
    <span class="detail-gen-badge" style="--gen-c:${color}">Generation ${gen}</span>

    ${
      person.data.note
        ? `<p class="detail-note">${escapeHtml(person.data.note)}</p>`
        : ""
    }

    ${
      person.data.unverified
        ? `<div class="detail-unverified">⚠ This entry (name, spelling, or family placement) is uncertain — the source photo was faded or the record ambiguous here. Worth double-checking against the original documents.</div>`
        : ""
    }

    ${
      parentNames.length
        ? `<div class="detail-section"><h3>Parents</h3><ul class="detail-list">
            ${parentNames.map((p) => personLi(p)).join("")}
          </ul></div>`
        : ""
    }

    ${
      spouseNames.length
        ? `<div class="detail-section"><h3>${spouseNames.length > 1 ? "Spouses" : "Spouse"}</h3><ul class="detail-list">
            ${spouseNames.map((p) => personLi(p)).join("")}
          </ul></div>`
        : ""
    }

    ${
      childNames.length
        ? `<div class="detail-section"><h3>Children (${childNames.length})</h3><ul class="detail-list">
            ${childNames.map((p) => personLi(p)).join("")}
          </ul></div>`
        : ""
    }

    <div class="detail-actions">
      <button data-action="center">Center tree here</button>
    </div>
  `

  content.querySelectorAll("[data-goto]").forEach((el) => {
    el.addEventListener("click", () => {
      const targetId = el.getAttribute("data-goto")
      openDetailPanel(targetId)
      chart.updateMainId(targetId)
      chart.updateTree({ tree_position: "main_to_middle" })
    })
  })
  content.querySelector('[data-action="center"]').addEventListener("click", () => {
    chart.updateMainId(id)
    chart.updateTree({ tree_position: "main_to_middle" })
  })

  panel.classList.add("open")
}

function personLi(p) {
  return `<li data-goto="${p.id}">${escapeHtml(p.data["first name"])}</li>`
}

function closeDetailPanel() {
  document.getElementById("detail-panel").classList.remove("open")
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]))
}
