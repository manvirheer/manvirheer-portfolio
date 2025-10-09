# Tech Stack & Standards

Definitive guide to libraries, frameworks, and design references. **Use this to maintain brand consistency and avoid getting lost in other people's systems.**

## Core Stack (Locked)

### Framework & Language
```json
{
  "next": "15.2.3",
  "react": "^19.0.0",
  "typescript": "^5",
  "tailwindcss": "^4"
}
```

**Why:**
- Next.js 15: App Router, Turbopack, modern React
- React 19: Latest features, better performance
- TypeScript: Type safety (even with strict mode off)
- Tailwind v4: New @theme directive, better DX

**Rules:**
- Use App Router exclusively (no pages directory)
- TypeScript for all new files (match existing loose typing)
- Tailwind for 95% of styling (CSS modules only when necessary)

---

## Animation & Interaction

### Primary: Framer Motion
```json
{
  "framer-motion": "^12.5.0"
}
```

**Use for:**
- All component animations
- Page transitions (if needed)
- Gesture interactions (drag, hover, tap)
- Scroll-triggered animations

**Centralized in:** `app/config/motion.ts`

**Rules:**
1. ✅ **DO:** Define variants in `motion.ts`, import and reuse
2. ✅ **DO:** Use existing easing curves (ease, standardEase, smoothEase)
3. ✅ **DO:** Keep animations fast (100-200ms for micro, 400ms max for major)
4. ❌ **DON'T:** Inline animation objects (creates inconsistency)
5. ❌ **DON'T:** Use multiple animation libraries (no GSAP, React Spring, etc.)
6. ❌ **DON'T:** Over-animate (brutalist = purposeful, not flashy)

**Standard Patterns:**
```javascript
// Card hover (border thickens - brutalist approach)
export const cardHover = {
  borderWidth: '2px',
  transition: { duration: 0.2, ease: smoothEase }
}

// Card tap
export const cardTap = {
  scale: 0.98,
  transition: { duration: 0.1 }
}

// Stagger children (for bento grid entry)
export const bentoContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

export const bentoCard = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: smoothEase }
  }
}
```

### Secondary: CSS Transitions
**Use for:**
- Theme switching (already implemented)
- Simple hover states (border, background)
- When Framer Motion is overkill

**Rules:**
1. ✅ **DO:** Use for color/border/background changes
2. ✅ **DO:** Keep timing consistent with Framer Motion (200ms, 400ms)
3. ❌ **DON'T:** Use for complex animations (use Framer Motion instead)

---

## 3D & Visual Effects

### Spline (Optional, Use Sparingly)
```json
{
  "@splinetool/react-spline": "^4.0.0",
  "@splinetool/runtime": "^1.9.82"
}
```

**Currently used:** YVR project background only

**Rules:**
1. ✅ **DO:** Use for specific project showcases (like YVR)
2. ❌ **DON'T:** Use on homepage (brutalist = no unnecessary 3D)
3. ❌ **DON'T:** Use as decoration (must serve purpose)

**Constraint:** Max 1-2 Spline scenes in entire site. Performance > wow factor.

---

## Styling System

### Tailwind CSS v4
**Configuration:** `app/styles/globals.css` using `@theme` directive

**Custom Spacing (4px base):**
```css
@theme {
  /* Spacing scale (4px increments) */
  --spacing-1: 4px;   /* 1 unit */
  --spacing-2: 8px;   /* 2 units */
  --spacing-3: 12px;  /* 3 units */
  --spacing-4: 16px;  /* 4 units */
  --spacing-6: 24px;  /* 6 units */
  --spacing-8: 32px;  /* 8 units */
  --spacing-12: 48px; /* 12 units */
  --spacing-16: 64px; /* 16 units */
  --spacing-20: 80px; /* 20 units */
  --spacing-24: 96px; /* 24 units */
}
```

**Rules:**
1. ✅ **DO:** Use spacing scale exclusively (no arbitrary values like `p-[13px]`)
2. ✅ **DO:** Use CSS custom properties for theme colors (--page-bg, etc.)
3. ✅ **DO:** Create reusable component classes for patterns
4. ❌ **DON'T:** Hardcode colors (use theme variables)
5. ❌ **DON'T:** Use Tailwind's default spacing that breaks 4px grid

**Component Pattern Example:**
```css
/* In globals.css */
.bento-card {
  border: 1px solid var(--page-border);
  border-radius: 4px;
  padding: var(--spacing-6);
  background: var(--page-surface);
  transition: all 0.2s var(--easingOut);
}

.bento-card:hover {
  border-width: 2px;
  padding: calc(var(--spacing-6) - 1px); /* Compensate for border */
}
```

### CSS Grid (Native, No Library)
**Use for:** Bento layout, responsive grids

**Standard Pattern:**
```css
.bento-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-6);
}

/* Responsive */
@media (min-width: 1025px) {
  .bento-grid {
    grid-template-columns: repeat(12, 1fr);
  }
}

/* Card spanning */
.span-2 { grid-column: span 2; }
.span-4 { grid-column: span 4; }
.span-6 { grid-column: span 6; }
```

**Rules:**
1. ✅ **DO:** Use CSS Grid for layout (not Flexbox for grids)
2. ✅ **DO:** Use gap property (maintains 4px grid)
3. ❌ **DON'T:** Use grid libraries (CSS Grid is enough)

---

## Color System & Themes

### Theme Structure
**3 Themes:** Light (default), Dark, Reading

**Theme switcher:** In navigation layout (existing pattern)

---

### Light Mode (Default - Professional)
**Purpose:** First impressions, job applications, daytime browsing

```css
:root {
  /* Neutrals */
  --color-white: #FFFFFF;
  --color-black: #000000;
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-700: #374151;
  --color-gray-900: #111827;

  /* Light theme variables */
  --page-bg: var(--color-white);
  --page-surface: var(--color-white);
  --page-surface-elevated: var(--color-gray-50);
  --page-border: var(--color-black);
  --page-text: var(--color-gray-900);
  --page-text-muted: var(--color-gray-700);

  /* Primary accent - Bold blue (trustworthy, professional) */
  --color-primary-500: #0066FF;
  --color-primary-600: #0052CC;
  --color-primary-700: #0043A8;
  --page-primary: var(--color-primary-500);
  --page-primary-hover: var(--color-primary-600);

  /* Functional colors */
  --page-success: #10B981;
  --page-warning: #F59E0B;
  --page-error: #EF4444;
  --page-code: #EC4899;

  /* Bento card tints (moderate pastels) */
  --bento-blue: #DBEAFE;     /* Light blue */
  --bento-purple: #E9D5FF;   /* Light purple */
  --bento-green: #D1FAE5;    /* Light green */
  --bento-yellow: #FEF3C7;   /* Light yellow */
  --bento-orange: #FFEDD5;   /* Light orange */
  --bento-pink: #FCE7F3;     /* Light pink */
}
```

---

### Dark Mode (Focus - Development)
**Purpose:** Late-night coding, reduced eye strain, developer preference

```css
body.dark-mode {
  /* Base - using #32374A as foundation */
  --color-navy-950: #1A1D28;  /* Darkest - background */
  --color-navy-900: #232732;  /* Dark - elevated surfaces */
  --color-navy-800: #2A2F3C;  /* Medium dark */
  --color-navy-700: #32374A;  /* Medium (your choice) */
  --color-navy-600: #3F4558;  /* Medium light */
  --color-navy-500: #4D5366;  /* Light */

  /* Dark theme variables */
  --page-bg: var(--color-navy-950);
  --page-surface: var(--color-navy-900);
  --page-surface-elevated: var(--color-navy-800);
  --page-border: var(--color-navy-600);        /* Softer than pure white */
  --page-text: #E5E7EB;                        /* Off-white, not harsh */
  --page-text-muted: #9CA3AF;                  /* Gray for secondary */

  /* Primary accent - Brighter blue for dark bg */
  --color-primary-400: #3B82F6;
  --color-primary-300: #60A5FA;
  --page-primary: var(--color-primary-400);
  --page-primary-hover: var(--color-primary-300);

  /* Functional colors (adjusted for dark) */
  --page-success: #34D399;
  --page-warning: #FBBF24;
  --page-error: #F87171;
  --page-code: #F472B6;

  /* Bento card tints (muted dark versions) */
  --bento-blue: #1E3A5F;      /* Dark blue */
  --bento-purple: #3B2F4A;    /* Dark purple */
  --bento-green: #1F3D2F;     /* Dark green */
  --bento-yellow: #3D3420;    /* Dark yellow */
  --bento-orange: #3D2A1F;    /* Dark orange */
  --bento-pink: #3D2432;      /* Dark pink */
}
```

---

### Reading Mode (Warm - Content)
**Purpose:** Blog posts, long-form content, reduced blue light

```css
body.reading-mode {
  /* Warm neutrals */
  --color-sepia-50: #FAF8F3;   /* Lightest cream */
  --color-sepia-100: #F5F1E8;  /* Light cream */
  --color-sepia-200: #E8DFC9;  /* Cream */
  --color-sepia-800: #5C4A3A;  /* Warm dark */
  --color-sepia-900: #3D2F23;  /* Darkest warm */

  /* Reading theme variables */
  --page-bg: var(--color-sepia-50);
  --page-surface: var(--color-sepia-100);
  --page-surface-elevated: var(--color-white);
  --page-border: var(--color-sepia-800);
  --page-text: var(--color-sepia-900);
  --page-text-muted: var(--color-sepia-800);

  /* Primary accent - Warmer blue */
  --color-warm-blue-600: #2563EB;
  --color-warm-blue-700: #1D4ED8;
  --page-primary: var(--color-warm-blue-600);
  --page-primary-hover: var(--color-warm-blue-700);

  /* Functional colors (warmer tones) */
  --page-success: #059669;
  --page-warning: #D97706;
  --page-error: #DC2626;
  --page-code: #BE185D;

  /* Bento card tints (warm pastels) */
  --bento-blue: #DBEAFE;      /* Keep soft blue */
  --bento-purple: #F3E8FF;    /* Warm purple */
  --bento-green: #D1FAE5;     /* Soft green */
  --bento-yellow: #FEF3C7;    /* Warm yellow */
  --bento-orange: #FFEDD5;    /* Peach */
  --bento-pink: #FCE7F3;      /* Soft pink */
}
```

---

### Theme Implementation

**In globals.css:**
```css
/* Base theme (light) in :root */
:root {
  /* ... light mode colors ... */
}

/* Dark theme override */
body.dark-mode {
  /* ... dark mode colors ... */
}

/* Reading theme override */
body.reading-mode {
  /* ... reading mode colors ... */
}

/* Base body styles with theme variables */
body {
  background-color: var(--page-bg);
  color: var(--page-text);
  transition:
    background-color 0.4s var(--easingOut),
    color 0.4s var(--easingOut),
    border-color 0.4s var(--easingOut);
}
```

**Theme context (already exists):**
- Light mode: no class on body
- Dark mode: `body.dark-mode`
- Reading mode: `body.reading-mode`

---

## Font System (Locked)

**Primary:** Host Grotesk (existing)
**Accent:** Playfair Display (existing)
**Mono:** System monospace

**Rules:**
1. ✅ **DO:** Use Host Grotesk for 90% of text
2. ✅ **DO:** Use Playfair for name/special emphasis only
3. ✅ **DO:** Use monospace for code, labels, technical info
4. ❌ **DON'T:** Add more fonts
5. ❌ **DON'T:** Mix serif/sans randomly

**Typography scale:** Defined in `design/core-design.md`

---

## Icons

**Current:** Heroicons v2.2.0

**Rules:**
1. ✅ **DO:** Use Heroicons for all icons (already imported)
2. ✅ **DO:** Use outline style by default, solid for emphasis
3. ✅ **DO:** Size in multiples of 4px (16px, 20px, 24px)
4. ❌ **DON'T:** Mix icon libraries
5. ❌ **DON'T:** Use custom SVG icons unless necessary

---

## Utilities & Dependencies

### What We DON'T Need
**Avoid adding:**
- UI libraries (Shadcn, MUI, Chakra) - build custom
- Additional animation libraries (GSAP, React Spring) - have Framer Motion
- State management (Zustand, Redux) - Context is enough for v1
- Form libraries (React Hook Form) - not needed yet

### What We MIGHT Add (Only If Needed)
**Consider only if v1 requires:**
- `clsx` or `classnames` - conditional Tailwind classes
- `react-intersection-observer` - scroll animations (if bento needs)

**Rule:** Default to "no" for new dependencies. Must justify.

---

## Design References (Extract Principles, Don't Copy)

### Harry J Atkins - Grid Precision
**What to extract:**
- 4px mathematical grid alignment
- Everything snaps to invisible grid
- Consistent spacing rhythm

**What to AVOID:**
- His exact layout structure
- His color palette
- His typography choices
- His navigation style

**Our interpretation:**
- Use 4px base unit ✅
- Verify alignment with grid overlay ✅
- Create our own bento layout ✅
- Use our own colors (bold blue + moderate pastels) ✅

---

### LlamaIndex - Bento Grid
**What to extract:**
- Asymmetric card layout
- Mixed card sizes (1x1, 2x1, 2x2)
- Visual variety through cards

**What to AVOID:**
- Their rounded corners (we use 4px)
- Their soft shadows (we use borders)
- Their color gradients (we use flat tints)
- Their smooth aesthetic (we're brutalist)

**Our interpretation:**
- Bento card sizing ✅
- Asymmetric layout ✅
- Moderate color variety (clear pastels) ✅
- Sharp corners + borders (not shadows) ✅

---

### Brutalist Websites - Aesthetic
**What to extract:**
- High contrast (but not chaotic)
- Strong borders (1-2px solid)
- Functional over decorative
- Raw, honest structure

**What to AVOID:**
- Chaotic layouts (we're precise)
- Random typography (we're systematic)
- Intentional ugliness (we're functional)

**Our interpretation:**
- Black borders in light, muted in dark ✅
- Minimal border-radius (4px) ✅
- No shadows (or subtle only) ✅
- Typography clean (Host Grotesk) ✅
- Brutalist + organized = confident/professional ✅

---

## Component Library (Build Our Own)

**We are NOT using pre-built components.** Build custom with these patterns:

### Base Components to Create
1. **BentoCard** - Reusable card with variants
2. **ProjectCard** - Extends BentoCard for projects
3. **Button** - Primary, secondary, tertiary variants
4. **Link** - Animated underline hover
5. **BentoGrid** - Container with responsive columns

### Component Standardization

**File structure:**
```
app/
  components/
    ui/              # Base UI components
      BentoCard.tsx
      Button.tsx
      Link.tsx
    layout/          # Layout components (existing)
    home/            # Page-specific components
      HeroCard.tsx
      ProjectCard.tsx
      AboutCard.tsx
```

**Component pattern example:**
```typescript
interface BentoCardProps {
  children: React.ReactNode
  className?: string
  span?: 1 | 2 | 3 | 4 | 6 | 8 | 12
  tint?: 'blue' | 'purple' | 'green' | 'yellow' | 'orange' | 'pink' | 'none'
}

export const BentoCard = ({
  children,
  className = '',
  span = 1,
  tint = 'none'
}: BentoCardProps) => {
  return (
    <motion.div
      className={`bento-card span-${span} ${tint !== 'none' ? `tint-${tint}` : ''} ${className}`}
      whileHover={cardHover}
      whileTap={cardTap}
    >
      {children}
    </motion.div>
  )
}
```

---

## Performance & Optimization

### Images
**Next.js Image component only**

```typescript
import Image from 'next/image'

<Image
  src="/project.png"
  alt="Project screenshot"
  width={800}
  height={600}
  className="object-cover"
/>
```

### Code Splitting
**Dynamic imports for heavy components:**

```typescript
import dynamic from 'next/dynamic'

const SplineBackground = dynamic(
  () => import('@/app/components/yvr/SplineBackground'),
  { ssr: false }
)
```

**Rules:**
1. ✅ **DO:** Use next/image for all images
2. ✅ **DO:** Dynamic import Spline scenes
3. ❌ **DON'T:** Import heavy libraries in main bundle

---

## Summary: The Constraints

**These constraints PROTECT your brand:**

### ✅ Use Only:
- Framer Motion (animations)
- Tailwind v4 (styling)
- CSS Grid (layout)
- Next.js Image (images)
- Heroicons (icons)
- Host Grotesk + Playfair (fonts)
- 4px spacing scale
- Defined color palette (bold blue + moderate pastels)
- 3 themes (light, dark, reading)

### ❌ Don't Use:
- Additional animation libraries
- UI component libraries
- Color palette generators
- Additional icon sets
- Additional fonts
- Arbitrary spacing values
- External design systems directly

### 📏 Always:
- Align to 4px grid
- Define animations in motion.ts
- Use theme CSS variables
- Build custom components
- Reference designs for principles (not copy)
- Test all 3 themes
- Keep animations fast (100-400ms)

---

**When in doubt, ask:** Does this maintain our brutalist + experimental + precise aesthetic, or are we copying someone else's system?
