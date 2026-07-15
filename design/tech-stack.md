# Tech Stack & Standards

The definitive list of what this site is built with — and, just as important,
what it deliberately avoids. The guiding constraint: **a static, zero-JS site
that stays fast and consistent.** Every dependency must earn its place against
that.

## Core Stack (Locked)

```json
{
  "astro": "^5.0.0",
  "@astrojs/sitemap": "^3.0.0",
  "@fontsource-variable/eb-garamond": "^5.0.0",
  "@fontsource/ibm-plex-mono": "^5.0.0",
  "typescript": "^5.0.0",
  "@astrojs/check": "^0.9.0"
}
```

- **Astro 5** — static site generator. `output` defaults to `'static'`; the site
  ships **zero client JavaScript**. No `<ClientRouter>`, no prefetch, no islands.
- **TypeScript 5** — `tsconfig.json` extends `astro/tsconfigs/strict`.
- **Hand-written CSS** with custom properties. No CSS framework.
- **Self-hosted fonts** via `@fontsource` (no Google Fonts network request).

### Rules
- Keep client JS at **zero**. The only inline script is the ~30-line theme
  toggle in `BaseLayout.astro` (`is:inline`, required to beat the flash).
- If you reach for an island or a framework component, stop — there is almost
  certainly a static way to do it.
- Type-check with `npm run check` (runs `astro check`) before shipping.

## Styling

**Plain CSS, custom properties, no build-time framework.**

- Design tokens and shared chrome live in `src/styles/global.css`.
- Page layout lives in `src/styles/ledger.css` (homepage + writing index).
- Article/prose styles are a scoped `<style>` block in
  `src/pages/writing/[slug].astro`.

### Rules
1. **DO** use the color/type tokens (`--ink`, `--serif`, `--rule`, …). Never
   hardcode a hex outside the `:root` / `html.dark-mode` token blocks.
2. **DO** derive tints with `color-mix(in oklab, …)` instead of adding new tokens.
3. **DO** separate rows with `1px solid var(--rule)`, not boxes or shadows.
4. **DON'T** introduce Tailwind, CSS-in-JS, or a component/utility framework.
5. **DON'T** add a third theme — light and dark only.

## Fonts

```
Serif:  EB Garamond Variable   (@fontsource-variable/eb-garamond)
Mono:   IBM Plex Mono 400      (@fontsource/ibm-plex-mono/400.css)
Body:   Helvetica, Arial, sans-serif   (system, not bundled)
```

Imported once in `BaseLayout.astro`. Do not add more families or weights without
a real need — each one is bytes on every page.

## Content & Data

- **Blog posts:** the `writing` content collection (`src/content/writing/*.md`),
  validated by the Zod schema in `src/content.config.ts`. Filename = slug.
- **Homepage lists:** plain typed arrays in `src/data/home.ts` (`work`,
  `projects`, `writing`). Kept out of the collection on purpose, to preserve
  exact display strings and to derive the "LATEST" masthead from `writing[0]`.

### Markdown config (`astro.config.mjs`)
- `syntaxHighlight: false` — code blocks stay monochrome (matches the palette).
- `gfm: true` — GitHub-flavored markdown (tables, etc.).
- `smartypants: false` — straight quotes preserved.

## SEO & Metadata

Handled entirely in `BaseLayout.astro`:
- Canonical URL, keywords, robots/googlebot directives.
- Open Graph + Twitter card tags (`/og-image.png`, 1200×630).
- JSON-LD `Person` structured data.
- Per-URL sitemap priority tiers via `@astrojs/sitemap`'s `serialize` hook
  (home 1.0, `/writing` 0.8, posts 0.6).

## Build & Deploy

- `npm run build` → static output in `dist/`.
- Deployed on **AWS Amplify** (`amplify.yml`): `npm ci` → `npm run build`,
  artifacts from `dist/`.

## What We Deliberately Don't Use

Removed in the Astro migration, and not to be reintroduced without a strong case:

- **React / any UI framework** — the site is static HTML.
- **Tailwind / CSS frameworks** — hand-written CSS with tokens.
- **Framer Motion / animation libraries** — CSS transitions only, used sparingly.
- **Heroicons / icon packs** — the two icons (theme sun/moon) are inline SVG.
- **Spline / 3D** — none.
- **State managers, form libs, client routers** — no client runtime at all.

### Default answer to a new dependency: **no.**
It must justify itself against "static, zero-JS, fast." If it ships client
JavaScript, it needs an exceptional reason.

## Checklist Before Shipping

- [ ] `npm run check` passes (types + content).
- [ ] `npm run build` succeeds; `dist/` looks right in `npm run preview`.
- [ ] No new client JavaScript was added.
- [ ] New colors/sizes use tokens; nothing hardcoded outside the token block.
- [ ] Works in both light and dark, with no theme flash.
- [ ] Contrast ≥ 4.5:1, focus visible, reduced-motion respected.
