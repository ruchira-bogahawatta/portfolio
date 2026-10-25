# Portfolio

Personal portfolio of Ruchira Bogahawatta. Single-page site (one route, sections linked by `#id` anchors) deployed to GitHub Pages at https://ruchira-bogahawatta.github.io/portfolio/.

## Stack
- React 19 + Vite 8 (`@vitejs/plugin-react-swc`), plain JavaScript (`.jsx`, no TypeScript)
- Tailwind CSS v4 via `@tailwindcss/vite` — no `tailwind.config.js`/PostCSS; theme lives in `src/index.css` (`@theme`, `:root` tokens)
- shadcn/ui (Radix base, `radix-nova` style, JS mode — see `components.json`). Generated files in `src/components/ui/`; ReUI timeline in `src/components/reui/`
- Icons: `lucide-react` inside shadcn components, `react-icons` for brand/tech logos (e.g. `react-icons/si`, `react-icons/fa`)

## Commands
- `npm run dev` — dev server (http://localhost:5173/portfolio/)
- `npm run build` / `npm run preview` — production build / serve it (http://localhost:4173/portfolio/)
- `npm run lint` — ESLint 10 flat config (`eslint.config.js`), zero warnings allowed
- Deploy: push to `main` → `.github/workflows/deploy.yml` builds on Node 22 and publishes `dist/`. (`npm run deploy` via gh-pages also exists.)

## Structure
- `src/App.jsx` — section order: Navbar, Hero, Skills, Background, Projects, Footer
- `src/assets/data/` — content as data (`projectsData.js`, `backgroundData.js`); edit content here, not in components
- `src/hooks/use-active-section.js` — IntersectionObserver for the navbar's active link
- Add shadcn components with `npx shadcn@latest add <name>` (community: `@reui/...`); keep them as generated

## Conventions & pitfalls
- Import alias `@/` → `src/` (defined in both `vite.config.js` and `jsconfig.json`; shadcn needs the latter)
- `base: "/portfolio/"` in Vite — asset URLs and anchors must work under that subpath
- Light theme only (owner declined a dark-mode toggle). `@custom-variant dark` keeps shadcn's `dark:` classes inert
- Tailwind v4 cascade layers: never put global element rules (`*`, `button`, `body`) outside `@layer base` — unlayered CSS overrides all utilities
- shadcn owns the `secondary`, `primary`, `muted`, `accent`… color names; don't reuse them for brand colors (legacy orange is `brand`)
- v3 opacity utilities (`bg-opacity-*`, `text-opacity-*`) don't exist in v4 — use `text-foo/50`
- Section headings are `h2` (one `h1`, in the hero); sections need `scroll-mt-*` so anchors clear the fixed navbar
- npm 12 blocks dependency install scripts by default (esbuild/@swc warnings are expected; binaries come from platform packages)
