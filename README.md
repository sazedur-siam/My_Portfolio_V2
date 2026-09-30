# My Portfolio V2

Personal portfolio site for **Md. Sazedur Rahman**, Software Engineer. It's a single-page React app with sections for skills, experience, projects (each with a detail modal) and education, plus a dark/light theme toggle.

## Tech stack

- [React 18](https://react.dev/) built with [Vite](https://vite.dev/)
- [styled-components](https://styled-components.com/) for styling and theming
- [MUI](https://mui.com/) (`@mui/material`, `@mui/lab`, `@mui/icons-material`) for timeline and UI primitives
- [framer-motion](https://www.framer.com/motion/) and `typewriter-effect` for animations
- `react-icons` for icons
- `gh-pages` for deployment

## Getting started

Requirements: Node.js 20.19+ and npm.

```bash
npm install          # install dependencies
cp .env.example .env # fill in EmailJS values (only needed for the Contact form)
npm run dev          # dev server at http://localhost:3000
```

## Scripts

| Command           | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Run the development server with hot reload         |
| `npm run build`   | Build an optimised production bundle into `dist/`  |
| `npm run preview` | Serve the production build locally                 |
| `npm run lint`    | Lint the project with ESLint                       |
| `npm run deploy`  | Build, then publish `dist/` to GitHub Pages        |

## Project structure

```
index.html               # Vite entry HTML
vite.config.js           # Vite config (React plugin, relative base path)
src/
├── App.jsx              # Page layout, theme state, animated background, project modal state
├── main.jsx             # React entry point
├── data/constants.js    # All portfolio content: Bio, skills, experiences, education, projects
├── utils/Themes.js      # darkTheme / lightTheme tokens used by styled-components
├── components/          # One folder per section (HeroSection, Skills, Experience, Projects, ...)
│   └── Cards/           # ExperienceCard, EducationCard, ProjectCards
└── images/              # Local images (hero image)
public/                  # index.html, manifest, static assets
```

## Updating content

Almost everything shown on the site lives in [`src/data/constants.js`](src/data/constants.js):

- `Bio`: name, roles, description, GitHub, LinkedIn and resume links
- `skills`: skill groups and their items
- `experiences`, `education`: timeline entries
- `projects`: project cards, including images, tags and GitHub/demo links

Edit that file and the page updates. You don't need to touch the components.

## Deployment

`npm run deploy` builds the app and pushes `dist/` to the `gh-pages` branch. Asset paths are relative (`base: "./"` in `vite.config.js`), so the build works on a GitHub Pages sub-path without extra config.
