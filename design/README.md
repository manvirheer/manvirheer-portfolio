# Design System

Complete design documentation for the Manvir Heer portfolio.

## Quick Start

**Core Philosophy:** Bento grid + brutalist + experimental = precision-engineered playground

**Key Principles:**
- 4px base unit (everything aligns to invisible grid)
- Bento card layout (modular, asymmetric)
- Brutalist aesthetic (raw, functional, high contrast)
- Tinker lab feel (show the work, not just the result)

## Documents

### [Core Design](./core-design.md)
Complete design philosophy including:
- Precision grid system (4px base)
- Bento layout patterns
- Typography scale
- Color system
- Animation principles
- Component patterns

**Read this first** to understand the overall vision.

### [Grid Reference](./grid-reference.md)
Technical implementation guide:
- Responsive grid breakpoints
- Card sizing system
- CSS Grid code examples
- Tailwind configuration
- Quality checklist

**Use this** when building components.

### [Changelog](./changelog.md)
Decision log and design iterations:
- Why we moved away from Atkins copy
- Rationale for each major decision
- Historical context

**Update this** when making design changes.

## Design at a Glance

### Grid System
```
Base Unit:     4px
Spacing:       4, 8, 16, 24, 32, 48, 64, 96px
Breakpoints:   640, 1024, 1440px
Columns:       4 → 8 → 12 → 16
Container Max: 1400px
```

### Typography
```
Font:       Host Grotesk (primary)
            Playfair Display (accents)
Scale:      1.25 ratio
Sizes:      12, 14, 16, 20, 25, 31, 39, 49, 61px
Line Height: Aligns to 4px grid
```

### Colors
```
Base:    Black borders, white surfaces
Accent:  Functional (blue, green, orange, red)
Bento:   Pastel tints for card variety
Dark:    High contrast (no subtle grays)
```

### Components
```
Cards:   1px border, 4px radius, bento grid
Buttons: 44px height, bold states
Spacing: 16-24px gaps, 16-32px padding
```

## Implementation Path

**V1 Focus:** Establish design feel with homepage (see `design/v1-plan.md` for detailed timeline)

### Phase 1: Foundation (Days 1-2)
1. Update Tailwind config with 4px spacing scale
2. Create grid container component
3. Define base card component
4. Implement color system in theme
5. Test grid alignment

### Phase 2: Homepage Bento Layout (Days 3-5)
1. Hero card (name/title)
2. About card (bio from LinkedIn)
3. Project cards (3-5 from GitHub: nx-logstats, parking analysis, flow_metrics, etc.)
4. Contact/links card
5. Status/meta card (experimental)

### Phase 3: Interactions & Polish (Days 6-8)
1. Standardized card hover states
2. Consistent animations (define in motion.ts)
3. Theme switcher integration
4. Interactive element states

### Phase 4: Responsive (Days 9-11)
1. Mobile stack (1-2 column)
2. Tablet bento (4 column)
3. Desktop full grid (12 column)
4. Cross-theme testing

### Phase 5: Content & Launch (Days 12-14)
1. Real project content from GitHub
2. Bio from LinkedIn
3. Final polish and deploy

**Post-v1 (Phase 2):**
- Blog section (once content written)
- Books page (reviews with covers)
- Project detail pages
- Timeline/experience page

## Design Tokens

Copy these into your development environment:

```javascript
// Spacing (multiples of 4px)
const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
  '4xl': '96px',
}

// Typography
const fontSize = {
  xs: '12px',
  sm: '14px',
  base: '16px',
  lg: '20px',
  xl: '25px',
  '2xl': '31px',
  '3xl': '39px',
  '4xl': '49px',
  '5xl': '61px',
}

// Colors
const colors = {
  base: {
    bg: '#FAFAFA',
    surface: '#FFFFFF',
    border: '#000000',
    text: '#0A0A0A',
    muted: '#666666',
  },
  accent: {
    primary: '#0066FF',
    success: '#00CC66',
    warning: '#FF9500',
    error: '#FF3B30',
    code: '#FF006E',
  },
  bento: {
    blue: '#E5F0FF',
    green: '#E5F9F0',
    yellow: '#FFF8E5',
    purple: '#F3E5FF',
    red: '#FFE5E5',
    orange: '#FFE5D9',
  }
}
```

## Tools & Resources

### Design
- Figma: Create bento grid templates
- Color contrast checker: https://webaim.org/resources/contrastchecker/
- Typography scale generator: https://typescale.com

### Development
- Grid overlay: Enable during dev to verify alignment
- Browser DevTools: Grid inspector in Chrome/Firefox
- Tailwind IntelliSense: VSCode extension for class completion

### Inspiration
- LlamaIndex: Bento grid reference
- Harry J Atkins: Grid precision reference (aesthetic diverged)
- Brutalist websites: https://brutalistwebsites.com

## Questions?

When making design decisions, ask:
1. Does it align to the 4px grid?
2. Is it brutalist (functional, honest, high contrast)?
3. Does it feel experimental/playful?
4. Is it accessible (contrast, touch targets)?
5. Does it work across all breakpoints?

## Updates

Update the changelog when:
- Changing core principles
- Adding new components
- Modifying color/typography
- Making responsive adjustments
- Learning from implementation

---

**Version:** 1.0.0
**Last Updated:** 2025-10-08
**Status:** Foundation defined, implementation pending
