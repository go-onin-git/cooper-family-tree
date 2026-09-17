// Compiles data/source-tree.js (nested, human-editable) into the flat
// {id, data, rels} format the family-chart library expects.
// Run: node data/build.js   -> writes data/data.json

const fs = require("fs")
const path = require("path")
const familyTree = require("./source-tree.js")

let counter = 0
const nextId = () => `p${++counter}`
const people = []

// Walk the nested tree. `parentIds` = [motherId, fatherId] (or fewer) for
// whoever's children array we're currently processing. `generation` = 1 for
// William & Susannah Cooper, +1 per descent (matches the "First Generation"
// / "Second Generation" ... labels used in the source documents).
function visitPerson(person, parentIds, generation) {
  const id = nextId()
  const record = {
    id,
    data: {
      "first name": person.name,
      "last name": "",
      birthday: person.birthday || "",
      avatar: "",
      gender: person.gender || "M",
      generation,
    },
    rels: {},
  }
  if (person.unverified) record.data.unverified = true
  if (person.note) record.data.note = person.note
  if (parentIds && parentIds.length) record.rels.parents = parentIds.slice()
  people.push(record)

  const spouseIds = []
  const childIds = []

  // Marriages: each has a spouse + that union's children
  ;(person.marriages || []).forEach((m) => {
    const spouseId = nextId()
    const spouseRecord = {
      id: spouseId,
      data: {
        "first name": m.spouse.name,
        "last name": "",
        birthday: m.spouse.birthday || "",
        avatar: "",
        gender: m.spouse.gender || (person.gender === "M" ? "F" : "M"),
        generation,
        marriedIn: true,
      },
      rels: { spouses: [id] },
    }
    if (m.spouse.unverified) spouseRecord.data.unverified = true
    if (m.spouse.note) spouseRecord.data.note = m.spouse.note
    people.push(spouseRecord)
    spouseIds.push(spouseId)

    const unionParentIds = [id, spouseId]
    ;(m.children || []).forEach((child) => {
      const childId = visitPerson(child, unionParentIds, generation + 1)
      childIds.push(childId)
    })
  })

  // Children listed directly on a person with no recorded spouse
  ;(person.children || []).forEach((child) => {
    const childId = visitPerson(child, [id], generation + 1)
    childIds.push(childId)
  })

  if (spouseIds.length) record.rels.spouses = spouseIds
  if (childIds.length) record.rels.children = childIds

  return id
}

visitPerson(familyTree, [], 1)

// Second pass: every child needs BOTH parents listed on their own `parents`
// array pointing at the same union (family-chart uses this to place them
// under the correct couple). Also make sure spouse<->spouse children lists
// only include children of THAT union (already true from construction).
const byId = Object.fromEntries(people.map((p) => [p.id, p]))
people.forEach((p) => {
  if (p.rels.children) {
    p.rels.children.forEach((cid) => {
      const child = byId[cid]
      if (!child.rels.parents) child.rels.parents = []
    })
  }
})

fs.writeFileSync(
  path.join(__dirname, "data.json"),
  JSON.stringify(people, null, 2)
)

console.log(`Wrote ${people.length} people to data/data.json`)
