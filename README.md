# Jota — Landing Page

The marketing site for [Jota](https://github.com/Jota-Music/jota), a self-hosted music streaming app. Built with **Astro 7**, **Tailwind CSS v4**, and **Lucide icons**.

## Stack

- **Framework**: Astro 7 (static output, zero JS by default)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`
- **Icons**: `lucide-astro`
- **Type-check**: `@astrojs/check` (strict)
- **Package manager**: Bun

## Commands

```bash
# install deps
bun install

# dev server (background)
bun run dev

# stop/manage dev server
bun run dev:stop
bun run dev:status
bun run dev:logs

# type-check
bun run check

# production build
bun run build

# preview build locally
bun run preview
```

## Project Structure

```
web/
├── public/
│   ├── favicon.ico
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   └── img/
│       ├── banner.png          # og:image (1280×640)
│       ├── screenshot-home.png
│       ├── screenshot-rooms.png
│       └── screenshot-search.png
├── src/
│   ├── layouts/
│   │   └── Layout.astro        # root HTML, meta, fonts
│   ├── pages/
│   │   └── index.astro         # single-page landing
│   ├── sections/
│   │   ├── Nav.astro           # N5 floating pill
│   │   ├── Hero.astro          # 7/5 split + promise badges
│   │   ├── Features.astro      # bento grid (11 cards + 6 chips)
│   │   ├── OpenSource.astro    # 3-col statement
│   │   ├── Tour.astro          # 2 figures + sticky CTA rail
│   │   ├── Download.astro      # 4 platforms + artifacts
│   │   └── Footer.astro        # Ft5 statement + links
│   └── styles/
│       └── global.css          # @import tailwind + tokens.css
├── tokens.css                  # Hallmark token export (@theme)
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## Design System

Tokens live in `tokens.css` (exported by [Hallmark](https://github.com/your-org/hallmark)):

| Token | Value | Role |
|-------|-------|------|
| `--color-paper` | `#09090b` | page background |
| `--color-surface` | `#18181b` | cards, panels |
| `--color-raised` | `#27272a` | hover/active surfaces |
| `--color-ink` | `#fafafa` | primary text |
| `--color-muted` | `#a1a1aa` | secondary text |
| `--color-dim` | `#8f8f99` | tertiary text |
| `--color-accent` | `#ff6dd6` | CTA, links, highlights |
| `--color-accent-ink` | `#000000` | text on accent |

Typography: **system sans** (inherited from the Jota app — no webfont).

## Sections (in DOM order)

1. **Nav** — floating pill (N5), links to sections + GitHub
2. **Hero** — headline, subhead, 4 badges (No cloud / No tracking / No subscriptions / Open source), dual CTA
3. **Features** — bento grid with 11 feature cards + 6 inline chips
4. **Open Source** — 3-column statement pulled from README
5. **Tour** — two annotated screenshots + sticky CTA rail
6. **Download** — platform matrix (Linux, Android, Windows, macOS) with artifacts + unsigned note
7. **Footer** — statement + GitHub / Releases / Relay / WARP links

## Deployment

Static output in `dist/`. Deploy to any static host (Cloudflare Pages, GitHub Pages, Netlify, Vercel).

```bash
bun run build
# upload dist/ to your host
```

Add `site` to `astro.config.mjs` if you need absolute URLs for `og:image` / sitemap:

```js
export default defineConfig({
  site: 'https://jota.music', // your domain
  // ...
});
```

## License

GPL-3.0 — same as the Jota app. See [LICENSE](../LICENSE) in the monorepo root.