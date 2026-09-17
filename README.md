# The Cooper Connection

An interactive family tree for the descendants of William & Susannah Cooper of
Grates Cove, Newfoundland — built from a family genealogy compiled over
several decades, photographed as typed generation lists and a hand-drawn
descendant chart.

**[Live site →](https://go-onin-git.github.io/cooper-family-tree/)**

## What this is

- A zoomable, pannable family tree (built on [family-chart](https://github.com/donatso/family-chart)) — click
  any person to re-center the tree on them and see their parents, spouses,
  and children.
- A search box to jump straight to a name.
- Generation-based color coding (1st generation = William & Susannah Cooper,
  counting down from there).
- A detail panel with notes and an "unverified" flag on entries transcribed
  from faded or ambiguous parts of the source photos.

## Running it locally

No build step — it's plain HTML/CSS/JS loading D3 and family-chart from a
CDN. You just need a local static file server (opening `index.html` directly
via `file://` won't work because the page uses ES modules + fetch).

```bash
cd cooper-family-tree
python3 -m http.server 8000
# then open http://localhost:8000
```

## Editing the family data

The tree data isn't hand-written as flat JSON — it's written as a nested,
human-readable structure in [`data/source-tree.js`](data/source-tree.js) that
mirrors how the original chart is drawn (a couple, with their children nested
underneath). A small script compiles that into the flat format the
visualization library expects.

To add, correct, or remove a person:

1. Edit `data/source-tree.js`. Each person looks like:
   ```js
   { name: "Jane Cooper", gender: "F", marriages: [
     { spouse: { name: "John Smith", gender: "M" }, children: [
       { name: "A Child", gender: "M" }
     ] }
   ]}
   ```
   A person with no recorded spouse can list `children` directly instead of
   inside a `marriages` entry. Add `unverified: true` and a `note: "..."` to
   flag anything uncertain.
2. Rebuild the compiled data:
   ```bash
   node data/build.js
   ```
   This regenerates `data/data.json`, which is what the site actually loads.
3. Refresh the browser.

**This is a first-draft transcription, not a complete or fully verified
one.** The source photos include ~300 names across generations 5-7 and
several sections were faded, at an angle, or handwritten. Branches under
Absalom John Cooper and Abel Churchill Cooper are transcribed in the most
depth; others may be thinner or have placement guesses. Anything flagged
`unverified` in the app is worth checking against the original photos.

## Deploying to GitHub Pages

Since this is a static site with no build step, GitHub Pages can serve the
repo root directly:

1. Push this repo to GitHub.
2. In the repo's **Settings → Pages**, under "Build and deployment", set
   **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`.
3. The site will publish at `https://<username>.github.io/<repo-name>/`.

## Credits

Genealogy research and the original "Cooper History" document and family
tree chart compiled by a family member over several years of research.
Digitized, transcribed, and built into this site with Claude Code.
