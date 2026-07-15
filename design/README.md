# Design System — Quiet Ledger

Design documentation for the Manvir Heer portfolio.

## Quick Start

**Core idea:** a quiet, editorial *ledger* — restrained typography, a single
narrow column, hairline rules instead of boxes, and one blue accent. It should
read like a well-kept document, not a dashboard.

**Principles:**

- **One column, 820px.** Everything lives in a centered measure. No grid of
  cards, no bento, no sidebars.
- **Two typefaces, clear jobs.** EB Garamond (serif) for headings/titles;
  IBM Plex Mono for labels, dates, and metrics. Body copy is Helvetica/Arial.
- **One accent.** Klein blue `#2e3cf2`, used sparingly — masthead band,
  benchmarked metrics, focus ring, and the highlighter-swipe on link hover.
- **Rules, not boxes.** 1px hairline rules (`--rule`) separate rows. The only
  "filled" surfaces are the masthead band and the inverted contact band.
- **Two themes.** Light and dark only, driven by `.dark-mode` on `<html>`.
- **Zero JavaScript** on the page except a tiny inline theme toggle.

## Documents

### [Core Design](./core-design.md)
The full design language: type scale, color tokens (both themes), spacing,
layout building blocks, and interaction rules. **Read this first.**

### [Tech Stack](./tech-stack.md)
What the site is built with and — just as importantly — what it deliberately
does *not* use. Constraints that keep the site fast and consistent.

### [Layout Reference](./grid-reference.md)
The concrete layout primitives: the 820px measure, the date-gutter ledger grid,
the masthead and contact bands, and the single responsive breakpoint.

### [Changelog](./changelog.md)
Decision log. Records the Astro migration and the quiet-ledger redesign, and
preserves the history of the earlier (abandoned) bento/brutalist direction.

## At a Glance

### Type
```
Serif:   EB Garamond Variable   — headings, titles, hero, contact line
Mono:    IBM Plex Mono          — labels, dates, metrics, nav, masthead
Body:    Helvetica / Arial      — 15.5px, line-height 1.6, tabular-nums
```

### Color (light theme)
```
--bg      #ffffff   page
--ink     #1c1c1c   primary text
--muted   #4d4d48   body / secondary text
--faint   #78736a   dates, captions (a11y-tuned to 4.7:1)
--rule    #f0efec   hairline separators
--band    #2e3cf2   Klein-blue masthead
--metric  #2e3cf2   benchmarked numbers
--hl      #dfe3ff   link-hover swipe + ::selection
```

### Layout
```
Measure:      820px, centered, 24px side padding
Ledger grid:  minmax(56px, 96px) 1fr   (mono date gutter + content)
Separators:   1px border-top rules between rows
Breakpoint:   520px — the date gutter stacks above each row
```

## When Making a Change, Ask

1. Does it stay inside the 820px measure?
2. Serif for display, mono for metadata, Helvetica for body — is the right one used?
3. Is blue still rare (a highlight, not a fill)?
4. Rules instead of boxes/shadows?
5. Does it work in both light and dark, with no theme flash?
6. Did it add any client JavaScript? (The answer should almost always be no.)
7. Is contrast still ≥ 4.5:1, focus visible, tap targets adequate?

## Updating Docs

Update the [changelog](./changelog.md) when you change core principles, tokens,
type, layout, or add a page. Keep these docs describing what the site *is* —
history belongs in the changelog.

---

**Version:** 2.0.0 (quiet ledger)
**Last updated:** 2026-07-15
**Status:** Live in production
