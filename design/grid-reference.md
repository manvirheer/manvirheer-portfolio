# Grid System Reference

Visual and technical reference for the 4px precision grid system.

## Foundation

**Base Unit:** 4px
**Why:** Mathematical precision that creates visual harmony

```
1 unit  = 4px   = 0.25rem
2 units = 8px   = 0.5rem
4 units = 16px  = 1rem (base font size)
6 units = 24px  = 1.5rem
8 units = 32px  = 2rem
```

## Responsive Grid Layout

### Mobile (0-640px)
```
Columns:     4
Gutter:      16px (4 units)
Margin:      16px (4 units)
Container:   100%

Card Layouts:
- Full width: 4 columns
- Half width: 2 columns
- Stacked: 1 column each row
```

### Tablet (641-1024px)
```
Columns:     8
Gutter:      20px (5 units)
Margin:      24px (6 units)
Container:   calc(100% - 48px)

Card Layouts:
- Featured: 4-6 columns
- Medium:   2-3 columns
- Small:    2 columns
```

### Desktop (1025-1440px)
```
Columns:     12
Gutter:      24px (6 units)
Margin:      40px (10 units)
Container:   calc(100% - 80px), max 1400px

Card Layouts:
- Hero:     12 columns (full)
- Featured: 6-8 columns
- Medium:   3-4 columns
- Small:    2-3 columns
```

### Wide (1441px+)
```
Columns:     16
Gutter:      24px (6 units)
Margin:      80px (20 units)
Container:   1400px (fixed, centered)

Card Layouts:
- Similar to desktop but with more breathing room
- Cards don't exceed 8 columns for readability
```

## Bento Card System

### Card Dimensions
All cards snap to column grid with consistent gaps.

```
Small Card (1x1):
- Min height: 200px (50 units)
- Aspect ratio: flexible or 1:1
- Use: Stats, quick links, icons

Medium Card (2x1 or 1x2):
- Width: 2 columns OR Height: 2 row heights
- Use: Project previews, featured content

Large Card (2x2):
- Spans: 2 columns × 2 row heights
- Use: Hero content, main CTAs, featured projects

Wide Card (3x1 or 4x1):
- Spans: 3-4 columns × 1 row
- Use: Timeline, horizontal showcases
```

### Card Spacing
```
Internal padding:   16px (4 units) min
                    24px (6 units) preferred

Gap between cards:  16px (4 units) mobile
                    24px (6 units) desktop

Border width:       1px (not on 4px grid, acceptable)
Border radius:      4px (1 unit, minimal)
```

## Typography Grid Alignment

All typography aligns to 4px baseline grid for vertical rhythm.

```
Line Heights (4px increments):
- Display (61px): 68px line-height (17 units)
- H1 (39px):      44px line-height (11 units)
- H2 (31px):      36px line-height (9 units)
- H3 (25px):      32px line-height (8 units)
- Body (16px):    24px line-height (6 units)
- Small (14px):   20px line-height (5 units)
- Caption (12px): 16px line-height (4 units)

Margins:
- H1 bottom:      32px (8 units)
- H2 bottom:      24px (6 units)
- H3 bottom:      16px (4 units)
- Paragraph:      16px (4 units)
```

## Component Grid Alignment

### Buttons
```
Height:     44px (11 units) - touch target
Padding:    12px 24px (3 units, 6 units)
Gap:        8px between buttons (2 units)
Icon size:  20px (5 units)
```

### Input Fields
```
Height:     44px (11 units)
Padding:    12px 16px (3 units, 4 units)
Margin:     16px bottom (4 units)
Label gap:  8px (2 units)
```

### Navigation
```
Height:     64px (16 units)
Padding:    16px 24px (4 units, 6 units)
Logo:       32px (8 units) or 40px (10 units)
Link gap:   24px (6 units)
```

### Cards
```
Padding:    16px (4 units) mobile
            24px (6 units) desktop
            32px (8 units) large cards

Title:      24px bottom margin (6 units)
Content:    16px between sections (4 units)
```

## CSS Grid Implementation

### Base Grid Container
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px; /* 6 units */
  padding: 24px;
}

/* Responsive columns */
@media (max-width: 640px) {
  .bento-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 16px;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .bento-grid {
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
    padding: 24px;
  }
}

@media (min-width: 1025px) {
  .bento-grid {
    grid-template-columns: repeat(12, 1fr);
    gap: 24px;
    padding: 40px;
    max-width: 1400px;
    margin: 0 auto;
  }
}
```

### Card Span Classes
```css
.span-1 { grid-column: span 1; }
.span-2 { grid-column: span 2; }
.span-3 { grid-column: span 3; }
.span-4 { grid-column: span 4; }
.span-6 { grid-column: span 6; }
.span-8 { grid-column: span 8; }
.span-12 { grid-column: span 12; }

/* Row spans */
.row-span-1 { grid-row: span 1; }
.row-span-2 { grid-row: span 2; }
```

## Tailwind v4 Configuration

Add to `globals.css` @theme block:

```css
@theme {
  /* Grid units */
  --grid-unit: 4px;

  /* Spacing scale (4px increments) */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;
  --spacing-24: 96px;
}
```

## Visual Testing

### Grid Overlay
For development, create a visual grid overlay:

```css
.grid-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 9999;
  background-image:
    repeating-linear-gradient(
      0deg,
      rgba(255, 0, 0, 0.1) 0px,
      rgba(255, 0, 0, 0.1) 1px,
      transparent 1px,
      transparent 4px
    ),
    repeating-linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.1) 0px,
      rgba(255, 0, 0, 0.1) 1px,
      transparent 1px,
      transparent 4px
    );
}
```

Toggle with keyboard shortcut during development.

## Quality Checklist

- [ ] All spacing uses multiples of 4px
- [ ] Typography line heights align to 4px grid
- [ ] Cards snap to column grid
- [ ] Gaps consistent across breakpoints
- [ ] Touch targets minimum 44px (11 units)
- [ ] Container max-width respects grid
- [ ] Responsive breakpoints tested
- [ ] Grid overlay verified alignment
