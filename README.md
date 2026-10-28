# Llibres — Col·lecció Ortín-Escudé

Our home library, published as a small static website: https://lan1984.github.io/llibres/

Sister site of [art](https://lan1984.github.io/art/), the painting collection. Both share the same design and link to each other from the header.

## How it works

- The books live in a public **Google Sheet**, with one tab per owner (`Ortín`, `Escudé`). The page reads it live on every visit, so editing the sheet updates the site; there is no build or deploy step for content changes.
- **Covers**: the sheet's `Portada` URL if set, otherwise [Open Library](https://openlibrary.org) by ISBN, otherwise a "Portada no disponible" placeholder.
- Search by title, author, ISBN, publisher or genre; 10 books load at a time as you scroll; each book has its own detail page.
- The `Nota` column is private and never shown on the site (but the sheet itself is public).

## Files

| File | What it is |
|---|---|
| `index.html` | The whole site: plain HTML, CSS and JS, no dependencies |
| `DECISIONS.md` | Every design decision and why |
| `sheet-template.csv` | Column headers and example rows for the Google Sheet |
| `sample-data.js` | Fake data, used only if `SHEET_ID` in `index.html` is empty |

## Run locally

Serve the parent folder so the links between `art` and `llibres` work (the local folder must be named `llibres`, like the repo):

```bash
python3 -m http.server 8765 --directory ~/Documents/GitHub
```

Then open http://localhost:8765/llibres/

## Adding a book

Add a row to the owner's tab in the sheet. Fill in at least `Títol` or `ISBN`; with an ISBN the cover usually comes from Open Library automatically.
