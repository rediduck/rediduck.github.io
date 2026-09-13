# Repository Guidelines

## Project Structure & Module Organization

This repository hosts a Chinese-language Anhui tourism demo on GitHub Pages.

- `index.html` contains the page markup, inline CSS, JavaScript, and tourism data. Features include an interactive map, destination details, travel scripts, blind boxes, rankings, and discussion content.
- `assets/geo/anhui.json` contains Anhui map data; `assets/geo/100000_full.json` contains national map data.
- `.github/workflows/static.yml` deploys the repository directly to GitHub Pages on pushes to `main` or manual dispatch.
- `README.md` introduces the project. There are no separate source or test directories.

## Build, Test, and Development Commands

- `python -m http.server 8000` — serve the repository locally; open `http://localhost:8000` in a browser. Python is only needed for this preview command.
- `git diff --check` — check pending changes for whitespace errors before committing.
- `git diff -- index.html assets/geo/ .github/workflows/static.yml` — review application, map, and deployment changes.

No build step, package manager configuration, or automated test command exists. External fonts, Font Awesome, Swiper, and ECharts load from CDNs and require network access.

## Coding Style & Naming Conventions

Match the surrounding four-space indentation in HTML, CSS, and JavaScript; workflow YAML uses two spaces. Preserve UTF-8 encoding and Chinese interface text. Use descriptive camelCase JavaScript names such as `renderBlindbox`, and kebab-case CSS classes such as `.map-stage`. Preserve existing DOM IDs and their JavaScript references together. No formatter or linter is configured; avoid unrelated reformatting.

## Testing Guidelines

Manually check navigation, map selection and reset, destination modals, travel-script details, blind-box reveals, and carousel interaction. Verify narrow mobile and desktop layouts, scrolling, and browser console/network errors. There is no automated testing framework or coverage threshold.

The map uses local data: HTTP/HTTPS loads `assets/geo/anhui.json`; direct `file://` previews load its JavaScript wrapper `assets/geo/anhui.js`. Keep both files synchronized after GeoJSON edits.

## Commit & Pull Request Guidelines

Recent commits use short Chinese descriptions, commonly prefixed with `feat：` or `fix：`. Follow that style and keep each commit focused. Pull requests should describe the change, list manual checks, link relevant issues, and include screenshots for visual changes. Review carefully before merging to `main`, which triggers deployment.

## Current Implementation Notes

- The popularity ranking is fixed and the feature carousel does not autoplay.
- `assets/theme.css` provides the responsive visual theme; `assets/blindbox.css` draws and animates the single blind box.
- Clicking any of Anhui's 16 cities opens a local photo and expanded guide from `picture/cities.js` and `assets/city-guides.js`. Attribution is recorded in `picture/SOURCES.md`.
- Mobile city photos use a compact 96 × 76 px layout. The map starts fitted to the province with city labels visible.
- `assets/railway-landscape.svg` and `assets/travel.css` provide curved mountain layers, mist, a viaduct and a detailed train that changes direction when navigating between four evenly spaced stops.
- The former profile page is now a static travel assistant (`assets/travel-assistant.js`): 16 cities, one/two-day route inspiration, blind-box destination reuse, a screenshot-ready travel card and a temporary packing checklist. It requires no account, localStorage or server persistence. Choices last only for the current page session.
- Validate city/day selection, blind-box destination reuse, travel-card dismissal and the four navigation stops after editing these features. Browser/mobile visual validation remains outstanding when no connected browser is available.
- The current implementation passed script-based checks for all 32 city/day combinations, card dismissal, destination reuse, four navigation stops and train reversal; these checks do not replace mobile visual review.
