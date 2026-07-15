# Layout Reference

The concrete layout primitives of the quiet-ledger site. There is **no column
grid and no bento** — the layout is a single narrow measure with a mono date
gutter, hairline rules, and two full-bleed bands. This is the reference for
building or extending a page consistently.

## The Measure

Every page centers its content in an 820px measure with 24px side padding:

```css
.container {
  max-width: 820px;
  margin: 0 auto;
  padding: 0 24px;
}
```

The top nav (`.mh-nav-inner`) and the contact band (`.contactInner`) use the
same 820px / 24px measure so all chrome lines up with the content.

## The Ledger Grid

Rows in Work and Writing use a two-column grid: a right-aligned **mono date
gutter** and the content column.

```css
.grid {
  display: grid;
  grid-template-columns: minmax(56px, 96px) 1fr;
  column-gap: clamp(16px, 4vw, 28px);
}

.date {                 /* the gutter cell */
  font-family: var(--mono);
  font-size: 12px;
  color: var(--faint);
  text-align: right;
  padding-top: 22px;    /* optically aligns the date with the row title */
}
```

Projects reuse the same grid but leave the gutter empty (`<span></span>`) and
put all rows in the content column.

## Rows

Rows are separated by hairline rules, never boxes:

```css
.entry {                        /* work row */
  border-top: 1px solid var(--rule);
  padding: 18px 0;
}
.entryLast { border-bottom: 1px solid var(--rule); }  /* close the group */
```

Row head layout (title left, metric/read-time right, wrapping gracefully):

```css
.entryHead {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;              /* metric drops to its own line, never clips */
  gap: 4px 16px;
}
.metric { margin-left: auto; } /* stays right-aligned after wrapping */
```

Vertical padding per row type:

```
Work rows      18px
Project rows   13px
Writing rows   14px
```

## Section Labels

Each section opens with a mono kicker that is a real `<h2>`:

```css
.label {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.14em;
  color: var(--label);
  margin: 0 0 6px;
}
```

Numbered in the copy: `01 | WORK`, `02 | PROJECTS`, `03 | WRITING`,
`04 | CONTACT`. When a section needs an action on the right (e.g. "All writing
→"), wrap the label in `.sectionHead` (a baseline-aligned flex row).

## Bands (full-bleed)

Two full-width strips break out of the measure:

- **Masthead band** (`.band` / `.bandInner`) — a Klein-blue strip above the nav
  with the "LATEST — <title> →" ticker (from `writing[0]`) and the post date.
  The ticker truncates with ellipsis so it never pushes the date off one line.
- **Contact band** (`.contact` / `.contactInner`) — the inverted section closing
  the homepage (`--contact-bg` / `--contact-ink`), holding the contact line,
  obfuscated email, and footer links.

Both bands are full-width but re-center their inner content in the 820px measure.

## Top Nav

```css
.mh-nav-inner {
  max-width: 820px;
  margin: 0 auto;
  padding: 28px 24px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 12px;
  border-bottom: 1px solid var(--rule);
}
```

Serif wordmark on the left; mono section links + the CSS-only theme toggle on
the right. `SiteNav` takes `variant="home"` (in-page `#work` anchors) or
`variant="inner"` (`/#work`, back to the homepage).

## Article / Prose

Posts (`/writing/[slug]`) use a slightly wider prose measure inside the 820px
article shell:

```
Article shell   max-width 820px, padding 40px 24px 88px
Prose measure   max-width 68ch, 16px / 1.75
Prose headings  serif — h2 28px, h3 22px, h4 18px
Code / pre      mono 13.5px / 13px, subtle --ink tint + --rule border
Tables (GFM)    collapsed borders, mono headers
```

## Responsive

The layout is fluid (clamps on the hero/title, `%`/`ch` measures) with a single
hard breakpoint:

```css
@media (max-width: 520px) {
  .grid { grid-template-columns: 1fr; }  /* gutter stacks above the row */
  .date, .writeDate {
    text-align: left;
    padding-top: 0;
    margin-top: 16px;
  }
  .hero { padding: 48px 0; }
  .section { padding-bottom: 48px; }
}
```

Below 520px the date gutter moves above each row (left-aligned) instead of being
squeezed, and the hero/section spacing tightens.

## Checklist

- [ ] Content stays within the 820px measure (or is a deliberate full-bleed band).
- [ ] Rows are separated by `1px solid var(--rule)`, not boxes or shadows.
- [ ] Row heads use the baseline flex pattern and wrap without clipping.
- [ ] Dates/metrics/labels are mono; titles are serif; body is sans.
- [ ] The 520px breakpoint stacks the date gutter correctly.
- [ ] No new client JavaScript.
