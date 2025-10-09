# Core Design Philosophy

## Vision
A brutalist-meets-bento portfolio that feels like a precision-engineered playground. Every element snaps to an invisible grid—mathematical, intentional, but playful. Think: builder's workbench meets experimental lab.

## Design Principles

### 1. Precision Grid System
Everything aligns to a mathematical foundation your brain intuitively recognizes.

**Base Unit: 4px**
- All spacing, sizing, and positioning uses multiples of 4px
- Creates visual harmony without being obvious
- Ensures consistency across all screen sizes

**Grid Structure:**
```
Mobile:   4-column  (16px gutter, 16px margin)
Tablet:   8-column  (20px gutter, 24px margin)
Desktop:  12-column (24px gutter, 40px margin)
Wide:     16-column (24px gutter, 80px margin)
```

**Spacing Scale:**
```
xs:  4px   (0.25rem)
sm:  8px   (0.5rem)
md:  16px  (1rem)
lg:  24px  (1.5rem)
xl:  32px  (2rem)
2xl: 48px  (3rem)
3xl: 64px  (4rem)
4xl: 96px  (6rem)
```

### 2. Bento Grid Layout
Asymmetric card-based layout that feels modular and interactive.

**Card Sizes (based on grid columns):**
- Small: 1x1 (spans 1 column)
- Medium: 2x1, 1x2 (spans 2 columns or 2 rows)
- Large: 2x2, 3x2 (featured content)
- Wide: 3x1, 4x1 (horizontal content)

**Card Behavior:**
- Hover states that feel tactile
- Micro-interactions on click/tap
- Responsive reflow that maintains grid integrity

### 3. Brutalist Elements
Raw, functional, unapologetic.

**Visual Language:**
- Exposed structure (visible borders, outlines)
- Monospace fonts for technical elements
- High contrast (no subtle grays)
- Functional labels (show what things are)
- Sharp corners (minimal border-radius)
- Raw interactions (no overly smooth animations)

**UI Patterns:**
- Terminal-style code blocks
- System fonts mixed with custom typography
- Utilitarian buttons and controls
- Information density over whitespace

### 4. Experimental/Tinker Aesthetic
Feels like an active workspace, not a finished product.

**Interactive Elements:**
- Draggable cards (optional feature)
- Toggle states visible in UI
- "Under construction" isn't a bug, it's a feature
- Show version numbers, build info
- Easter eggs and hidden interactions

## Typography Scale

**System:**
- Headlines: Host Grotesk (existing)
- Body: Host Grotesk (existing)
- Accents: Playfair Display (for name/emphasis)
- Code/Labels: System monospace

**Scale (based on 1.25 ratio):**
```
xs:   12px  (0.75rem)   - labels, captions
sm:   14px  (0.875rem)  - body small
base: 16px  (1rem)      - body
lg:   20px  (1.25rem)   - subheadings
xl:   25px  (1.563rem)  - h3
2xl:  31px  (1.953rem)  - h2
3xl:  39px  (2.441rem)  - h1
4xl:  49px  (3.052rem)  - display
5xl:  61px  (3.815rem)  - hero
```

**Line Height:**
- Headings: 1.1-1.2 (tight)
- Body: 1.5-1.6 (readable)
- Code: 1.4 (monospace)

## Color System

### Strategy
Bold, confident, professional. Embrace functional color with purpose.

**3 Themes:**
1. **Light** - Professional, first impressions (default)
2. **Dark** - Focus, development, late-night browsing
3. **Reading** - Warm, content consumption, reduced blue light

### Light Mode (Default)
Bold and confident, trustworthy professional.

**Base:**
```
Background:  #FFFFFF (pure white)
Surface:     #FFFFFF (cards)
Elevated:    #F9FAFB (slight lift)
Border:      #000000 (brutalist strong)
Text:        #111827 (near-black)
Text-muted:  #374151 (gray-700)
```

**Accents:**
```
Primary:     #0066FF (bold blue - trustworthy, professional)
Success:     #10B981 (green)
Warning:     #F59E0B (amber)
Error:       #EF4444 (red)
Code:        #EC4899 (pink)
```

**Bento Tints (moderate pastels):**
```
Blue:    #DBEAFE (light blue)
Purple:  #E9D5FF (light purple)
Green:   #D1FAE5 (light green)
Yellow:  #FEF3C7 (light yellow)
Orange:  #FFEDD5 (light orange)
Pink:    #FCE7F3 (light pink)
```

### Dark Mode
Foundation: #32374A (navy blue-gray)

**Base:**
```
Background:  #1A1D28 (darkest navy)
Surface:     #232732 (dark navy)
Elevated:    #2A2F3C (medium dark navy)
Border:      #3F4558 (softer than pure white)
Text:        #E5E7EB (off-white, not harsh)
Text-muted:  #9CA3AF (gray)
```

**Accents:**
```
Primary:     #3B82F6 (brighter blue for dark bg)
Success:     #34D399 (bright green)
Warning:     #FBBF24 (bright amber)
Error:       #F87171 (bright red)
Code:        #F472B6 (bright pink)
```

**Bento Tints (muted dark):**
```
Blue:    #1E3A5F (dark blue)
Purple:  #3B2F4A (dark purple)
Green:   #1F3D2F (dark green)
Yellow:  #3D3420 (dark yellow)
Orange:  #3D2A1F (dark orange)
Pink:    #3D2432 (dark pink)
```

### Reading Mode
Warm, sepia-inspired for long-form content.

**Base:**
```
Background:  #FAF8F3 (lightest cream)
Surface:     #F5F1E8 (light cream)
Elevated:    #FFFFFF (pure white for cards)
Border:      #5C4A3A (warm dark)
Text:        #3D2F23 (darkest warm)
Text-muted:  #5C4A3A (warm brown)
```

**Accents:**
```
Primary:     #2563EB (warmer blue)
Success:     #059669 (warm green)
Warning:     #D97706 (warm amber)
Error:       #DC2626 (warm red)
Code:        #BE185D (warm pink)
```

**Bento Tints (warm pastels):**
```
Blue:    #DBEAFE (soft blue)
Purple:  #F3E8FF (warm purple)
Green:   #D1FAE5 (soft green)
Yellow:  #FEF3C7 (warm yellow)
Orange:  #FFEDD5 (peach)
Pink:    #FCE7F3 (soft pink)
```

## Animation Philosophy

**Principles:**
- Fast and snappy (100-200ms for micro-interactions)
- Purposeful (animations explain state changes)
- Physics-based when appropriate (spring animations for drag/drop)
- Interruptible (user action stops animation)

**Timing:**
```
instant:  0ms     (immediate feedback)
fast:     100ms   (micro-interactions)
normal:   200ms   (standard transitions)
slow:     400ms   (major state changes)
```

**Easing:**
- Use existing curves from `app/config/motion.ts`
- Prefer `ease-out` for UI entering viewport
- Use `ease-in-out` for state transitions

## Responsive Strategy

**Breakpoints:**
```
mobile:  0-640px    (bento: 2-column, stacked)
tablet:  641-1024px (bento: 4-column, mixed)
desktop: 1025-1440px (bento: 6-8 column, full)
wide:    1441px+    (bento: 8-12 column, spacious)
```

**Grid Behavior:**
- Mobile: Cards stack, full-width
- Tablet: 2x2 bento starts appearing
- Desktop: Full bento grid experience
- Wide: Maximum 1400px container, centered

## Component Patterns

### Bento Cards
```
Structure:
- 12px padding minimum
- Border: 1px solid black
- Border-radius: 4px (minimal, not 0)
- Shadow: none (brutalist) OR subtle on hover
- Background: varies by content type

States:
- Default: border black, bg white
- Hover: slight lift OR border thickens to 2px
- Active: background tint
- Focus: outline offset 2px
```

### Buttons
```
Primary:
- Background: black
- Text: white
- Padding: 12px 24px (1.5 spacing scale)
- Border: none
- Hover: slight scale (1.02) or background #1a1a1a

Secondary:
- Background: white
- Text: black
- Border: 1px solid black
- Hover: background #fafafa

Tertiary:
- Background: transparent
- Text: black
- Border: none
- Hover: underline
```

## Implementation Notes

**CSS Strategy:**
- Continue using Tailwind v4 with @theme directive
- Define all spacing/sizing in globals.css as custom properties
- Use `--grid-unit: 4px` as foundation
- Create utility classes for bento card sizes

**Grid Implementation:**
- CSS Grid for bento layout
- Grid template columns: repeat(auto-fit, minmax(200px, 1fr))
- Use `grid-column: span X` for card sizing
- Gap: 16px (md spacing)

**Quality Checks:**
- Use 4px baseline grid overlay for alignment testing
- Test all breakpoints for grid integrity
- Ensure interactive elements have 44px minimum touch target
- Validate color contrast ratios (WCAG AA minimum)
