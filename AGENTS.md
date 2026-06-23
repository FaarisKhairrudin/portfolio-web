# Faaris Portfolio — React + Vite (JSX)

## Workflow
- **Brainstorm first:** Before making changes, propose the approach and wait for approval. Do not edit files without confirmation unless the task is trivial (typo fix, renaming).
- **Ask questions** if requirements are ambiguous or if multiple approaches exist.
- **No commit unless asked.** No pushing, no PR creation.

Single-page React portfolio. No TypeScript, no router, no tests, no lint, no formatter.

## Commands
- `npm run dev` — dev server on `127.0.0.1`
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build on `127.0.0.1`

## Structure
- `src/main.jsx` — entrypoint, renders `<App/>`
- `src/App.jsx` — all page sections in one component (no router)
- `src/data/portfolio.js` — all content (profile, projects, experience, skills)
- `src/components/` — React Bits components (one folder per component, `.jsx` + `.css`)
- `src/styles.css` — only stylesheet (no Tailwind, no CSS modules)
- `public/assets/profile/` — profile photos
- `public/assets/project/` — project preview images

## Conventions
- `@/` alias maps to `src/` (configured in `vite.config.js` + `jsconfig.json`)
- All React files use `.jsx` extension
- Styles: single `styles.css` with CSS custom properties (`--bg`, `--accent`, `--muted`, etc.)
- Dark/light theme toggle via `[data-theme]` attribute on `<html>`; defaults to dark. Theme preference persisted in `localStorage`.
- GSAP required for `BounceCards` component behavior
- React Bits components added manually (not via CLI — see `REACT_BITS_SETUP.md`)
- `components.json` uses React Bits registry (`@react-bits`) and shadcn new-york style
- Icons: `lucide-react`
- Animations: `motion` (framer-motion v12)
- `formal_image.jpeg` sits at root of `public/`, not in `assets/`

## Admin mode (dev only)
- Admin drawer opens via pencil icon in header (`import.meta.env.DEV`)
- Edits save to `localStorage` under key `faaris-portfolio-data`
- Reset button restores default content from `portfolio.js`
- If `localStorage` has stale data, it overrides source — use Reset or `localStorage.removeItem("faaris-portfolio-data")`

## Personal context
Detailed profile (projects, competitions, experience, skills, positioning) is at `CORE_INFORMATION/PORTFOLIO_SUMMARY.md`. Read it when a task needs deep personal context — do not preload. It covers: education, competition track record, project descriptions, technical skills, and recommended feature priority.

## Image rules
- New images: place in `public/assets/`, reference as `/assets/...` paths
- Existing project images have both `.webp` and `.png` variants
- No external image URLs — all assets local

## React Bits component install
Try first: `npx shadcn@latest add @react-bits/ComponentName-TS-CSS`
If that fails, fetch from `https://reactbits.dev/r/ComponentName-TS-CSS.json` and copy manually.
