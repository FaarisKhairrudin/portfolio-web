# Faaris Portfolio — React + Vite (JSX)

## Workflow
- **Brainstorm first:** Before making changes, propose the approach and wait for approval. Do not edit files without confirmation unless the task is trivial (typo fix, renaming).
- **Ask questions** if requirements are ambiguous or if multiple approaches exist.

Single-page React portfolio. No TypeScript, no router, no tests, no lint.

## Commands
- `npm run dev` — dev server on `127.0.0.1`
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build (127.0.0.1)

## Structure
- `src/main.jsx` — entrypoint, renders `<App/>`
- `src/App.jsx` — all page sections in one component (no router)
- `src/data/portfolio.js` — all content (profile, projects, experience, skills)
- `src/components/` — React Bits + custom animation components
- `src/styles.css` — all styles (no Tailwind, no CSS modules)
- `public/assets/profile/` — profile photos
- `public/assets/project/` — project preview images

## Conventions
- `@/` alias maps to `src/` (configured in `vite.config.js` + `jsconfig.json`)
- All components use `.jsx` extension
- Styles: single `styles.css` with CSS custom properties (`--bg`, `--cyan`, `--mint`, etc.)
- Color scheme: dark only (`color-scheme: dark` in `:root`)
- GSAP required for `BounceCards` component behavior
- React Bits components added manually (not via CLI — see `REACT_BITS_SETUP.md`)

## Admin mode
- Admin drawer (inline JSON editor) is available **only in dev** (`import.meta.env.DEV`)
- Click pencil icon in header to open; edits save to `localStorage`
- Reset button restores default content from `portfolio.js`

## Personal context
Detailed profile (projects, competitions, experience, skills) is at `CORE_INFORMATION/PORTFOLIO_SUMMARY.md`. Read it only when a task needs deep personal context — do not preload.

## Key constraints
- `components.json` uses React Bits registry (`@react-bits`) and shadcn new-york style
- New images must be placed in `public/assets/` and referenced as `/assets/...` paths
- New React Bits components: try `npx shadcn@latest add @react-bits/ComponentName-TS-CSS` first; if that fails, fetch from `https://reactbits.dev/r/ComponentName-TS-CSS.json` and copy manually
