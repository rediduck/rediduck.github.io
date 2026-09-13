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

The map fetch currently targets `https://rediduck.github.io/assets/geo/anhui.json`; local GeoJSON edits will not appear unless the fetch is pointed at the local asset during validation.

## Commit & Pull Request Guidelines

Recent commits use short Chinese descriptions, commonly prefixed with `feat：` or `fix：`. Follow that style and keep each commit focused. Pull requests should describe the change, list manual checks, link relevant issues, and include screenshots for visual changes. Review carefully before merging to `main`, which triggers deployment.
