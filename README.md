# Manvir Heer — Portfolio

Personal portfolio for Manvir Heer, AI Infrastructure Engineer at Tenzr Health.
A small, fast, **zero-JavaScript** static site built with Astro.

**Live site:** [manvirheer.com](https://manvirheer.com)

## Design Philosophy

**Quiet ledger** — an editorial, print-inspired layout in the spirit of a
well-kept ledger. Restrained, typographic, and honest about being a document.

- **Single 820px column.** No bento grid, no cards. Content sits in a narrow,
  centered measure with a mono date gutter, like an index.
- **Two typefaces.** EB Garamond (serif) for headings and titles; IBM Plex Mono
  for labels, dates, and metrics. Helvetica/Arial for body copy.
- **One accent.** Klein blue (`#2e3cf2`) — the masthead band, benchmarked
  metrics, and the focus ring. Everything else is ink, muted, and rule-grey.
- **Two themes.** Light and dark, toggled with a single button and applied
  before first paint (no flash). No third "reading" mode.
- **Rules, not boxes.** Hairline rules (`--rule`) separate rows; the contact
  section is an inverted full-bleed band. Links get a highlighter swipe on hover.
- **Benchmarked claims.** The numbers on the page (`329ms → 2ms`, `20s → 2s`)
  are real and reproducible — the copy is written to earn them.

See [`design/`](./design/) for the full design system.

## Tech Stack

- **[Astro 5](https://astro.build)** — static output (`output: 'static'`),
  **zero client JS** shipped
- **TypeScript 5** (`astro/tsconfigs/strict`)
- **Hand-written CSS** with custom properties — no Tailwind, no CSS framework
- **Fonts:** self-hosted via `@fontsource` —
  [EB Garamond](https://fontsource.org/fonts/eb-garamond) (variable) +
  [IBM Plex Mono](https://fontsource.org/fonts/ibm-plex-mono)
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)**
  for `sitemap-index.xml` with per-URL priority tiers
- **Content collections** for writing (Markdown + typed frontmatter)

No React, no Framer Motion, no Heroicons, no Tailwind, no Spline. The only
JavaScript on the page is a ~30-line inline theme toggle. Everything else is
static HTML and CSS.

## Project Structure

```
manvirheer-portfolio/
├── astro.config.mjs          # site, sitemap tiers, markdown (no syntax highlight)
├── amplify.yml               # AWS Amplify build (baseDirectory: dist)
├── tsconfig.json             # extends astro/tsconfigs/strict
├── public/                   # favicons, manifest, og-image, robots.txt, hero images
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro  # <head>, SEO/OG/JSON-LD, inline theme script
│   ├── components/
│   │   └── SiteNav.astro     # shared top nav + CSS-only theme toggle
│   ├── pages/
│   │   ├── index.astro       # homepage: hero, work, projects, writing, contact
│   │   └── writing/
│   │       ├── index.astro   # writing index (from the content collection)
│   │       └── [slug].astro  # per-post page (getStaticPaths)
│   ├── content/
│   │   └── writing/*.md       # blog posts (Markdown)
│   ├── content.config.ts     # `writing` collection schema (Zod)
│   ├── data/
│   │   └── home.ts           # work / projects / writing arrays for the homepage
│   └── styles/
│       ├── global.css        # design tokens, themes, shared chrome (nav)
│       └── ledger.css        # homepage + writing-index layout
└── design/                   # design system documentation
```

## Architecture Notes

- **Two-page site.** The homepage (`/`) is a single scroll with in-page anchors
  (`#work`, `#projects`, `#writing`, `#contact`). `/writing` and
  `/writing/[slug]` are the only other routes. `SiteNav` takes a `variant`
  (`home` uses `#work` anchors; `inner` uses `/#work` back to the homepage).
- **Homepage content lives in `src/data/home.ts`** as plain typed arrays, not the
  content collection — this preserves exact display strings and lets the
  masthead "LATEST" ticker derive from `writing[0]`.
- **Blog posts live in the `writing` content collection** (`src/content/writing/`),
  validated by the Zod schema in `content.config.ts`. The slug is the filename.
- **Theme** is a `.dark-mode` class on `<html>`, persisted to `localStorage`.
  It is set by an `is:inline` script in `<head>` *before* first paint, with a
  `.no-transition` guard, so there is no theme flash and no hydration.

## Getting Started

Requires Node.js 18+ and npm.

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:4321)
npm run dev

# Type-check + validate content/astro
npm run check

# Build the static site to dist/
npm run build

# Preview the production build locally
npm run preview
```

## Deployment

Deployed as a static site on **AWS Amplify** (see [`amplify.yml`](./amplify.yml)):

- `preBuild`: `npm ci`
- `build`: `npm run build`
- Artifacts served from `dist/`

## Writing a New Post

1. Add a Markdown file to `src/content/writing/` (the filename becomes the slug).
2. Include the frontmatter required by `content.config.ts`:

   ```yaml
   ---
   title: "Post title"
   subtitle: "One-line description"
   date: 2026-01-15        # YYYY-MM-DD
   readTime: "8 min"
   tags: ["infra", "postgres"]
   excerpt: "Short summary."
   ---
   ```

3. To surface it in the homepage list and the "LATEST" masthead ticker, also add
   an entry to the `writing` array at the top of `src/data/home.ts`.

## Commit Convention

The repo follows lowercase, [Conventional-Commit](https://www.conventionalcommits.org/)-style
subjects, e.g.:

```
feat: add /trip retro road-trip itinerary
fix: theme flash on load
ci: add amplify.yml for Astro static output
docs: refresh design docs after Astro migration
```
