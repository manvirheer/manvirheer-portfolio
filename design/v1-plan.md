# Build Status & Roadmap

The original v1 plan targeted a bento/brutalist Next.js site. That direction was
abandoned; the site was rebuilt in Astro with the quiet-ledger design and is now
**live in production**. This document tracks what shipped and what may come next.
(The abandoned plan is preserved in the [changelog](./changelog.md).)

## Shipped

- [x] **Astro static site**, zero client JS, deployed on AWS Amplify.
- [x] **Quiet-ledger design system** — 820px measure, ledger date gutter,
      hairline rules, two full-bleed bands. Tokens in `global.css`.
- [x] **Light + dark themes**, applied before first paint (no flash), persisted
      to `localStorage` via a CSS-only toggle.
- [x] **Homepage** (`/`): hero, `01 Work`, `02 Projects`, `03 Writing`,
      `04 Contact` (inverted band). Content in `src/data/home.ts`.
- [x] **Writing index** (`/writing`) + **per-post pages** (`/writing/[slug]`)
      from the `writing` content collection. Three posts published.
- [x] **Masthead "LATEST" ticker** derived from `writing[0]`.
- [x] **SEO:** canonical, OG/Twitter, JSON-LD `Person`, sitemap with per-URL
      priority tiers.
- [x] **Accessibility:** skip link, visible focus, contrast-tuned tokens,
      reduced-motion support, adequate tap targets.

## Content Model

- **Work / Projects / Writing lists** → `src/data/home.ts` (typed arrays).
- **Blog posts** → `src/content/writing/*.md`, schema in `content.config.ts`.
- Publishing a post: add the Markdown file, then add an entry to the `writing`
  array in `home.ts` to feature it on the homepage and in the masthead. (See the
  README's "Writing a New Post" section.)

## Possible Next

Not committed — candidate work, to be picked up as content and need arise. Each
must stay inside the existing design system and the zero-JS constraint.

- [ ] More writing (the pipeline is the main content lever).
- [ ] An `/about` or fuller bio page, if the homepage hero stops being enough.
- [ ] Per-project detail pages (would extend `projects` into a small collection).
- [ ] RSS feed for `/writing` (`@astrojs/rss`).
- [ ] Case-study write-ups for the benchmarked results referenced on the homepage.

## Guardrails for Future Work

Before adding a page or feature, confirm it:

1. stays within the 820px measure (or is a deliberate full-bleed band);
2. reuses existing tokens and layout primitives (see
   [`grid-reference.md`](./grid-reference.md));
3. adds **no client JavaScript**;
4. works in both themes with no flash;
5. holds contrast and focus/keyboard accessibility.

When any core principle, token, or layout primitive changes, record it in the
[changelog](./changelog.md).
