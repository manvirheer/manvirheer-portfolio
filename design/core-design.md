# Core Design — Quiet Ledger

## Vision

A quiet, editorial *ledger*. The site should feel like a carefully typeset
document — a single narrow column, restrained type, hairline rules, and one blue
accent used with discipline. Calm and legible over loud and decorative. The
influences are the plain, high-signal personal sites of engineers like Fabrice
Bellard and George Hotz: no chrome, no noise, the work speaks.

Everything is static HTML and CSS. The only JavaScript is a tiny inline theme
toggle. See [`tech-stack.md`](./tech-stack.md) for the constraints that protect
this.

## Principles

1. **One column.** All content sits in an 820px centered measure. No cards, no
   bento grid, no sidebars.
2. **Rules, not boxes.** Rows are separated by 1px hairline rules (`--rule`).
   No shadows, no rounded card containers. The only filled surfaces are the
   masthead band and the inverted contact band.
3. **Type does the work.** Hierarchy comes from typeface, size, and weight —
   serif for display, mono for metadata, sans for reading.
4. **Blue is rare.** The single accent (`#2e3cf2`) appears only where it means
   something: the masthead, benchmarked metrics, the focus ring, and the
   link-hover swipe.
5. **Honest content.** Metrics on the page are real and reproducible. The design
   exists to present them plainly, not to dress them up.
6. **Two themes, no flash.** Light and dark only, applied before first paint.
7. **Zero client JS** on the page (bar the theme toggle).

## Typography

Three roles, three families:

| Role | Family | Used for |
|------|--------|----------|
| **Serif** | EB Garamond Variable | Hero, section titles, project & post names, contact line |
| **Mono** | IBM Plex Mono | Section labels/kickers, dates, metrics, nav, masthead ticker |
| **Body** | Helvetica / Arial | Paragraphs and descriptions |

Set via CSS custom properties:

```css
--serif: 'EB Garamond Variable', Georgia, serif;
--mono:  'IBM Plex Mono', ui-monospace, Menlo, Consolas, monospace;
/* body uses Helvetica, Arial, sans-serif directly on <body> */
```

Body text is `15.5px / 1.6` with `font-variant-numeric: tabular-nums` so
figures align in the ledger columns.

### Sizes in use (not a rigid modular scale)

```
Hero title        clamp(34px, 6vw, 48px)  serif 500  lh 1.08  ls -0.01em
Article title     clamp(30px, 5vw, 40px)  serif 500  lh 1.12
Contact line      clamp(22px, 4vw, 27px)  serif
Prose h2          28px                    serif 500
Entry title       23px                    serif 500
Prose h3 / article subtitle  22px / 18px  serif / sans
Post name (home)  20px                    serif 500
Nav name          19px                    serif 600
Project name      18px                    serif 500
Body / prose      15.5px / 16px           sans
Metric            13px                    mono
Nav links         13px                    sans
Dates (gutter)    12px                    mono
Project desc      12.5px                  mono
Section label     11px  ls 0.14em         mono  (kicker, e.g. "01 | WORK")
Masthead ticker   11px  ls 0.08em  UPPER  mono
```

Headings use tight leading (1.08–1.2) and `text-wrap: balance`; body/prose use
`text-wrap: pretty` and constrained measures (`max-width` in `ch`).

## Color

Two themes, driven by a `.dark-mode` class on `<html>`. All colors are tokens on
`:root` / `html.dark-mode` — never hardcode a hex outside the token block.

### Light (default)

```css
:root {
  --bg:          #ffffff;   /* page background */
  --ink:         #1c1c1c;   /* primary text */
  --muted:       #4d4d48;   /* body / secondary text */
  --faint:       #78736a;   /* dates, captions — tuned to 4.7:1 on --bg */
  --rule:        #f0efec;   /* hairline separators */
  --hl:          #dfe3ff;   /* link-hover swipe + ::selection */
  --band:        #2e3cf2;   /* Klein-blue masthead */
  --band-ink:    #ffffff;
  --metric:      #2e3cf2;   /* benchmarked numbers + focus ring */
  --label:       #78736a;
  --contact-bg:  #1c1c1c;   /* inverted contact band */
  --contact-ink: #ffffff;
}
```

### Dark

```css
html.dark-mode {
  --bg:          #171614;
  --ink:         #e8e5dd;
  --muted:       #b8b4a8;
  --faint:       #8a8579;   /* tuned to 4.9:1 on --bg */
  --rule:        #2a2823;
  --hl:          #28306e;
  --band:        #2e3cf2;   /* band stays Klein blue in both themes */
  --band-ink:    #ffffff;
  --metric:      #98a0ff;   /* lighter blue for contrast on dark */
  --label:       #8a8579;
  --contact-bg:  #e8e5dd;   /* contact band inverts to light */
  --contact-ink: #171614;
}
```

**Notes**
- The palette is a warm near-neutral (ink/paper), not pure black/white. Dark
  mode is warm charcoal `#171614`, not `#000`.
- Only Klein blue breaks the neutral. It never fills large areas except the thin
  masthead band.
- Semi-transparent tints (footer text, band date) are derived with
  `color-mix(in oklab, …)` rather than new tokens.

## Spacing & Rhythm

There is no strict 4px grid. Rhythm comes from generous, consistent vertical
spacing:

```
Section padding-bottom   72px  (48px below 520px)
Hero padding             72px vertical  (48px below 520px)
Row padding (work)       18px vertical
Row padding (projects)   13px vertical
Row padding (writing)    14px vertical
Contact band             56px top / 44px bottom
Column gap (gutter)      clamp(16px, 4vw, 28px)
Side padding (measure)   24px
```

Rows are delimited by `border-top: 1px solid var(--rule)`; the last row in a
group adds a matching `border-bottom`.

## Layout Building Blocks

- **Measure** — `max-width: 820px; margin: 0 auto; padding: 0 24px`.
- **Ledger grid** — `grid-template-columns: minmax(56px, 96px) 1fr`: a
  right-aligned mono **date gutter** and the content column.
- **Masthead band** — full-width Klein-blue strip with a "LATEST — <title> →"
  ticker (derived from `writing[0]`) and the post date.
- **Contact band** — inverted full-bleed band (`--contact-bg`/`--contact-ink`)
  closing the homepage.
- **Top nav** — serif wordmark, mono section links, and a CSS-only theme toggle.

Full specifics in [`grid-reference.md`](./grid-reference.md).

## Interaction

Deliberately minimal — no motion library, no scroll animation.

- **Link hover:** a highlighter swipe — `background: var(--hl)`. Chrome links
  (nav, footer, wordmark) opt out and use underline/color instead.
- **Selection:** `::selection` uses the same `--hl`.
- **Focus:** `outline: 2px solid var(--metric); outline-offset: 2px` — authored
  to stay visible even on the colored bands.
- **Theme switch:** `background-color`/`color` transition `0.3s ease`, suppressed
  on first paint by a `.no-transition` guard.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` disables all
  transitions, animations, and smooth scrolling.

## Accessibility

- Skip-to-content link, visible only on keyboard focus.
- Focus rings on every interactive element, tuned to survive on colored bands.
- `--faint` colors are nudged to meet ≥ 4.5:1 (ratios noted inline in the CSS).
- Tap targets padded to ~35–44px (nav links, theme toggle) even where the glyph
  is small.
- `tabular-nums` for aligned figures; semantic headings (`h1`/`h2`/`h3`) with
  the mono kickers as real `<h2>`s.
- No theme flash: theme is resolved before first paint.

## Implementation

- **Tokens & shared chrome:** `src/styles/global.css`
- **Homepage & writing-index layout:** `src/styles/ledger.css`
- **Article/prose styles:** scoped `<style>` in `src/pages/writing/[slug].astro`
- **Theme script:** `is:inline` in `src/layouts/BaseLayout.astro`
