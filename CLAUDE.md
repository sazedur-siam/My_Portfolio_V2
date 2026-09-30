# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Overview

Personal portfolio: a single-page React 18 app built with Vite. Plain JavaScript/JSX, no TypeScript.

## Commands

- `npm install`: install deps. Use npm; `package-lock.json` is the lockfile.
- `npm run dev` (or `npm start`): dev server on http://localhost:3000
- `npm run build`: production build into `dist/`
- `npm run preview`: serve the `dist/` build locally
- `npm run lint`: ESLint (flat config in `eslint.config.js`)
- `npm run deploy`: builds, then publishes `dist/` to GitHub Pages via `gh-pages`

There is no test runner.

## Architecture

- `index.html` (repo root) is the Vite entry; it loads `src/main.jsx`, which mounts `App`.
- `src/App.jsx` renders every section in order: Navbar, HeroSection, Skills, Experience, Training, Projects, Education, Footer. Training reuses the `Experience` component with `id`/`title`/`description`/`items` props. It owns the `darkMode` state (default `true`) and the `openModal` state (`{ state, project }`) for the `ProjectDetails` modal. It also draws the animated background (grid and gradient orbs).
- `src/data/constants.js` holds all site content (`Bio`, `skills`, `experiences`, `training`, `education`, `projects`). Content changes go here, not in components.
  - `skills[].skills[]` items take an `icon` (a `react-icons` component) and optional brand `color`; omit `color` for monochrome logos so they follow the theme text colour.
  - An `experiences` entry with `roles` (each with `projects` → `stack`, `points`) renders the detailed resume layout in `ExperienceCard`; entries with `desc`/`skills` (like `training`) render the simple card.
  - `projects` render as a list (no thumbnails); `image` is optional and only shown in the `ProjectDetails` modal.
- `src/utils/Themes.js` exports `darkTheme` and `lightTheme`. Components read tokens through styled-components (`${({ theme }) => theme.primary}`). Keep the two themes' keys in sync when adding a token.
- `src/components/<Section>/index.jsx` holds one folder per section. Larger sections keep their styled-components in a sibling file (`HeroStyle.js`, `ProjectsStyle.js`, `NavbarStyledComponent.js`, ...). Reusable cards live in `src/components/Cards/`.
- Navigation is plain in-page anchors (`#skills`, `#projects`, ...); there is no router.

## Conventions

- Style with **styled-components**, keeping styled definitions in the component file or its sibling `*Style.js` file. MUI is used for specific widgets such as the timeline, not for general layout.
- Pull colours, gradients, shadows and glow effects from theme tokens. Don't hardcode hex values in components.
- Animations use styled-components `keyframes` and `framer-motion`.
- Any file containing JSX must use the `.jsx` extension (Vite won't parse JSX in `.js`).
- `no-unused-vars` is turned off in `eslint.config.js`.

## Gotchas

- Env vars must be prefixed `VITE_` and are read via `import.meta.env.VITE_*` (not `process.env`). Copy `.env.example` to `.env`; `.env` is gitignored, don't print or copy its values.
- `vite.config.js` uses `base: "./"` (relative asset paths) so the build works on the GitHub Pages sub-path. This relies on the app having no client-side routes.
- `Contact` and `About` components exist but aren't rendered in `App.jsx`. `Contact` sends mail through EmailJS using the `VITE_EMAILJS_*` env vars.
- `src/themes/default.js` and `src/models/about.js` are legacy and unused. The live themes are in `src/utils/Themes.js`.
- Build output (`dist/`) is gitignored; don't commit it.
