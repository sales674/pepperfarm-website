# Pepper Farms Website V2

Marketing and storefront site for **Pepper Farms**, a direct-to-consumer farm-to-table brand. Built as a high-fidelity React 19 single-page app with custom vanilla CSS and scroll-driven animations.

## Tech Stack

- **React 19** with **Vite 8**
- Vanilla CSS with a custom design-token system (`src/index.css`)
- Native React hooks for state
- Custom IntersectionObserver-based animation hook
- Deployed on **Cloudflare** (Workers static assets)

## Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
npm run lint      # run ESLint
```

## Project Structure

```
src/
├── components/   # Section components (Hero, Menu, Bakery, Sourcing, etc.)
├── data/         # menuData.js — product/menu content
├── hooks/        # useAnimations.js — scroll-reveal animation engine
├── App.jsx       # Page composition
├── index.css     # Global styles + design tokens
└── main.jsx      # Entry point
public/images/    # Static image assets
```

## Design System

Defined as CSS custom properties in `src/index.css`:

| Token | Value | Role |
| --- | --- | --- |
| `--deep-forest` | `#1B3022` | Primary brand |
| `--terracotta` | `#C36B4D` | Accent / CTA |
| `--parchment` | `#F9F7F2` | Background |
| `--sage` | `#A3B18A` | Secondary brand |

Typography: **Playfair Display** (headings) + **Inter** (body).

## Common Tasks

**Add a product** — append an entry to `menuItems` in `src/data/menuData.js` and drop the image into `public/images/`.

**Animate a new element on scroll** — add `className="reveal"` (optionally with `reveal-delay-1` … `reveal-delay-4` for stagger). The hook in `src/hooks/useAnimations.js` picks it up automatically.

## Deployment

Cloudflare runs `npm run build` and then `npx wrangler versions upload`. `wrangler.jsonc` declares the project name and points the asset uploader at the Vite output in `dist/`.

## Further Reading

See [`devhandout.md`](./devhandout.md) for the full architecture write-up and [`CLAUDE.md`](./CLAUDE.md) for AI-assistant guidance.
