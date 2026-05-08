# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

**Pepper Farms Website V2** — a marketing/storefront site for a D2C farm-to-table brand. High-fidelity React 19 single-page app emphasising a "premium farm-to-table" aesthetic with scroll-driven animations.

## Tech Stack

- **React 19** + **Vite 8**
- **Vanilla CSS** with design tokens in `src/index.css` (no Tailwind, no CSS-in-JS)
- **State**: native React hooks only (no Redux/Zustand/etc.)
- **Deploy**: Cloudflare via `wrangler versions upload` (config in `wrangler.jsonc`, assets served from `dist/`)

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview built output
- `npm run lint` — ESLint (flat config in `eslint.config.js`)

## Layout

```
src/
├── components/   # Section components (Hero, Menu, Bakery, Sourcing, ...)
├── data/         # menuData.js — single source of truth for product content
├── hooks/        # useAnimations.js — IntersectionObserver-based scroll reveals
├── App.jsx       # Section composition / page order
├── index.css     # Design tokens + all global styles (large file)
└── main.jsx
public/images/    # Image assets referenced from menuData and components
```

## Conventions

- **Styling**: edit `src/index.css` and use existing CSS custom properties (`--deep-forest`, `--terracotta`, `--parchment`, `--sage`). Don't introduce a CSS framework.
- **Animations**: add `className="reveal"` (optionally with `reveal-delay-1..4`) to opt into scroll-reveal. The hook in `src/hooks/useAnimations.js` handles observation. For DOM added after mount (e.g. filtered menu items), call the hook's `reobserve()`.
- **Content**: product/menu changes go in `src/data/menuData.js`, not JSX.
- **Images**: drop into `public/images/` and reference by absolute path (`/images/...`).
- **Fonts**: Playfair Display (headings), Inter (body) — already wired up.

## Notes

- See `devhandout.md` for the longer architectural write-up.
- No test suite is configured.
- Project is pre-backend: no cart/checkout/subscription API yet.
