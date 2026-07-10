# china-2026-trip

Single-page interactive dossier for the Fall 2026 China friends trip (Chris + Kaylee + crew).
Published via GitHub Pages: **https://chriswiles.github.io/china-2026-trip/**

## What this repo is (and isn't)

- **This repo** = the presentation page. One self-contained `index.html`, no build step, no framework.
- **Trip content source of truth** lives in the `wiles-wiki` repo under `content/travel/china-2026/`
  (routes, destination pages, restaurants, logistics). When trip facts change there, update this page to match.
- A Claude artifact mirror of this page also exists (photos inlined as data URIs); it's rebuilt from
  `index.html` by a scratchpad script in the authoring session — not from this repo.

## Layout

- `index.html` — the entire site: inline CSS + JS, seven route cards, TWOV explainer, dates/When-to-go,
  decision matrix, food guide, prep checklist, lightbox.
- `images/<city>/*.jpg` — full-size photos (lightbox only). Largely Wikimedia Commons sourced via the wiki vault.
- `images/thumbs/<city>/*.jpg` — 640px q60 versions used for ALL inline `<img>` tags.

## Mobile-first rules (most traffic is phones)

1. **Never put a full-size image in an inline `<img src>`.** Inline images use `images/thumbs/...`;
   the full-size file goes in `data-full="images/..."`, which the lightbox swaps in on tap.
2. Regenerate thumbs after adding photos:
   ```bash
   cd images && find . -path ./thumbs -prune -o -name '*.jpg' -print | while read f; do
     mkdir -p "thumbs/$(dirname "$f")"
     sips --resampleWidth 640 -s format jpeg -s formatOptions 60 "$f" --out "thumbs/$f"
   done
   ```
3. Wide content (tables, matrix) scrolls inside its own `overflow-x: auto` container — the body never
   scrolls horizontally. Test at 375px width before pushing.
4. Keep tap targets ≥44px (route headers, nav chips). The sticky jump-nav is the primary mobile navigation.

## Conventions

- Itineraries use **Day 1–15**, not hard dates — the travel window is flexible (Oct–Nov 2026).
- Palette is the ink-wash token set in `:root` (`--paper`, `--ink`, `--cinnabar`, `--jade`, `--ochre`);
  derive any new colors from those variables.
- Georgia serif for display, system sans for body, monospace for TWOV clocks / stats / labels.
- Route data + the decision matrix live in the `ROUTES` / `MATRIX` JS constants at the bottom of
  `index.html` — edit those, not the rendered markup.

## Deploy

`git push origin main` → GitHub Pages (legacy build from `main` root) redeploys automatically, usually <1 min.
Verify: `curl -s -o /dev/null -w "%{http_code}" https://chriswiles.github.io/china-2026-trip/`
