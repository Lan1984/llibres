# Biblioteca Ortín-Escudé — Decisions

Static site for GitHub Pages that renders the book library live from a public Google Sheet. Sister project of `../art` (same design system, same stack: plain HTML/CSS/JS, single file, no build step).

Status: live against the real sheet (`1fit_6o9YVrx1t2iHjHtjE3bpswkViEQlDCq2oA6QgcA`).

## Known requirements (from kickoff)

- Data from a public Google Sheet (not created yet; columns TBD).
- Covers: public API first → `cover_url` from the sheet → "cover not available" placeholder.
- Lazy-load cover images.
- Pagination: 10 books at a time; load 10 more when the user scrolls to the bottom.
- Search bar at the top.
- Same design as `art` (paper/ink palette, Cormorant Garamond / Inter / JetBrains Mono).

## Decisions

### 1. Sheet columns

Catalan headers (same as `art`). Headers are matched ignoring case and accents (`Data Lectura` = `Data lectura`); column order doesn't matter.

Sheet quirk: with a Catalan/Spanish locale, typing `4.5` in Valoració makes Sheets store the *date* 4 May. The CSV export returns the displayed text (`4.5`), so it still works, but formatting the column as *Plain text* (or typing `4,5`) is cleaner.

| Column | Type | Shown | Use |
|---|---|---|---|
| ISBN | text (format the column as *Plain text*) | yes (detail) | Cover lookup |
| Títol | text | yes | Card, search, URL slug |
| Autors | text, `;`-separated | yes | Card, search |
| Portada | URL | — | Fallback cover (Drive links converted like `art`) |
| Any compra | number | yes (detail) | |
| Estat | `Llegit` / `Llegint` / `Pendent` | yes | Badge on card |
| Valoració | 0–5, halves allowed (e.g. 3.5) | yes | Stars |
| Editorial | text | yes (detail) | |
| Any publicació | number | yes (detail) | |
| Idioma | text | yes | Future filter |
| Gènere | text | yes | Future filter |
| Ressenya | text | yes (detail) | Public opinion on the book |
| Nota | text | **never** | Private note |
| Data lectura | date (2026-03-14 / 14/03/2026) or just a year (2026) | yes (detail) | Stats: read per year |

Rejected: prices, "Prestat a" (personal data about third parties in a public sheet).

### 2. Cover sources (in order)

1. **Portada** from the sheet, if filled: a manual override (Drive links converted as in `art`).
2. **Open Library by ISBN**: `https://covers.openlibrary.org/b/isbn/<ISBN>-M.jpg?default=false` (detail page uses `-L`). With `default=false` a miss returns HTTP 404, so the `<img>` error handler moves to the next source. No key, no JSON call.
3. Placeholder: "Portada no disponible".

The kickoff idea of putting the API first was reversed so that a manual Portada always wins. Rejected: Google Books (JSON call per book, low-res, rate-limited without a key).

### 3. Search

- Whole sheet loaded once; search runs client-side.
- Fields: Títol, Autors, ISBN, Editorial, Gènere (not Ressenya).
- Case- and accent-insensitive; every word must match (any order); ISBN matches with or without dashes.
- Live as you type, 200 ms debounce.
- Results use the same 10-at-a-time pagination; a new query resets to the top. Count: "12 de 340 llibres".
- No results → "Cap llibre coincideix amb «…»" + "Neteja" button.
- Query kept in the hash (`#/?q=camus`): back from detail restores results; shareable.
- Search bar sits under the sticky header (scrolls with the page), full width on mobile.

### 4. Grid, cards, order

- Grid: 5 cols desktop, 4 ≤1080px, 3 tablet, 2 mobile. Covers fixed **2:3**, `object-fit: cover`, thin shadow.
- Card: cover → title (serif, max 2 lines) → authors (italic) → Gènere pill + Estat badge → stars on their own line below the badges (only when Llegit and Valoració set), so ratings sit in the same place on every card.
- Badges: *Llegit* ink outline · *Llegint* filled terracotta · *Pendent* muted grey. Small caps, like `art` meta labels.
- Placeholder: coloured "book" tile with title + author in serif, small "Portada no disponible" at the bottom.
- Default order: **Llegint first**, then the rest by Any compra, newest first (missing year last, then sheet order).
- No sort selector for now.

### 5. Detail page

- Route `#/llibre/<id>`; id = **ISBN** (stable across title edits), title slug fallback when no ISBN.
- "Tornar a la biblioteca" back link keeps search + scroll position.
- Header: Gènere (mono eyebrow), title (large serif), authors (italic), Any publicació as the large muted year.
- Body: large cover (Open Library `-L`) left; right: badge + stars, **Ressenya** as lead paragraph, fact table (Autors, Editorial, Any publicació, Idioma, Gènere, ISBN, Any compra), empty rows hidden.
- "Open Library ↗" link when ISBN is present.
- **No** "Fes una oferta" button (personal library, not for sale).

### 6. Pagination & lazy loading

- Batches of 10. Invisible sentinel after the last card watched by `IntersectionObserver` (`rootMargin: 400px`) appends the next batch.
- Visible fallback button "Carrega'n més (10 de 340)"; when all are shown → "Has arribat al final · 340 llibres".
- Covers use `loading="lazy"` + `decoding="async"`; only rendered batches create `<img>` tags. Detail-page cover loads eagerly (above the fold).
- A new or cleared search scrolls back to the top (otherwise the already-visible sentinel would load every batch).
- Back from detail: re-render as many books as were loaded and restore exact scroll position.
- Footer (only "©…") is reachable once all books are loaded; accepted.

### 7. Branding & cross-links

- One brand, two sections: same OE logo + "Col·lecció Ortín-Escudé" in both headers.
- Shared nav: `Obres` → `../art/`, `Llibres` → `../llibres/`; current section active.
- `art`'s disabled "Llibres" becomes a real link to `../llibres/` now.
- Separate repo **`Lan1984/llibres`** → https://lan1984.github.io/llibres/ (art: https://lan1984.github.io/art/). Local folder should be named `llibres` too, so relative links work locally.
- Local testing: serve the parent `GitHub/` folder so `/art/` and `/llibres/` link like on Pages: `python3 -m http.server 8765 --directory ~/Documents/GitHub` → http://localhost:8765/llibres/

### 8. Ownership (Ortín / Escudé)

- Not a column: the sheet has **two tabs**, one per owner. **Tab name = owner id.**
- Both tabs share the same columns (§1). Every book is tagged with its owner.
- **Tabs are fetched by gid, not by name**: gviz silently returns the *first* tab when `&sheet=<name>` doesn't match, which would duplicate books under the wrong owner after a rename. Config: `TABS = [{ owner: 'Ortín', gid: '1772033601' }, { owner: 'Escudé', gid: '2113165591' }]`. A new owner tab → add its gid (visible in the URL as `#gid=…` when the tab is open).
- The sheet also has a `_exemple` tab (gid `1728662667`), which is not read by the site.
- Purpose: a future owner filter.
- Tab names: **`Ortín`** and **`Escudé`**. Kept as a constant `TABS` in code (the export can't list tabs; a new owner = one-line change). See gid note above.
- Display: detail page only, fact-table row "Propietat: Ortín". Not on cards (yet).
- Same book in both tabs → **two separate entries**. Id = `<owner-slug>-<ISBN>` (e.g. `#/llibre/escude-9788433920423`); no-ISBN fallback `<owner-slug>-<title-slug>`. This replaces the plain-ISBN id from §5.

### 9. Sheet bootstrap & sample data

- `sheet-template.csv`: the 13 headers in order + example rows. Import into a new Google Sheet as tab `Ortín`, duplicate as `Escudé`, set ISBN column to *Plain text*, share "anyone with the link can view".
- While `SHEET_ID` (top of `index.html`) is empty, the site reads `sample-data.js` (~25 real books across both tabs, fake Estat/Valoració). Paste the sheet ID to switch to live data.
- Data is read from the **CSV export** (`/export?format=csv&gid=<gid>`), not the gviz JSON API. gviz guesses one type per column and blanks out cells that don't fit (e.g. a rating `4` in a column it decided is dates), which hid ratings for some books. The CSV export returns every cell as displayed and allows cross-origin requests. First row = headers.

### Defaults (not debated, same as `art`)

- Catalan only. No hero / h1 on the list; small count line instead.
- Footer: "© Col·lecció Ortín-Escudé" only.
- Fonts from Google Fonts; light paper/ink palette.
- Single `index.html`, no build step; `.gitignore` with `.DS_Store`.

### 10. Genre pill

- Gènere shown as a pill: ink (black) background, coloured text. On cards (meta row, before the Estat badge), on the detail page (in place of the eyebrow) and on the stats page.
- Colours come from a 12-hue wheel. Each genre starts at the hue picked by hashing its name; if it's taken, it moves to the next free one. Genres are processed in alphabetical order, so colours are distinct for up to 12 genres and stable unless new genres are added.

### 11. Statistics page

- Entry point: small bar-chart icon next to the book count on the list → `#/estadistiques`. Back link returns to the list with search and scroll restored.
- Summary: total, Llegits, Llegint, Pendents.
- **Millor valorats**: top 10 Llegit books by Valoració (tie → most recently read, then title).
- **Per gènere**: count of all books per genre, bar chart in the genre colour, "Sense gènere" for blanks.
- **Llegits per any**: grouped by the year of **Data lectura** (new column), newest year first; within a year the 10 most recent (full dates sort before year-only entries). Books without Data lectura are left out.
- Combined across both owners.
- `?sample` in the URL forces `sample-data.js`, for testing without touching the sheet.

## Open questions

- None right now. Next: create the sheet, paste `SHEET_ID`, test with real data, then git + Pages.
