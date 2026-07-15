# Design Changelog

All notable design decisions and iterations are documented here.

## [2.0.0] - 2026-07-15 — Astro migration + quiet-ledger redesign

The largest change so far: the site was rebuilt from the ground up and the
earlier bento/brutalist direction (documented in the historical entries below)
was **abandoned before it shipped**.

### Framework
**Changed:** Next.js 15 + React 19 → **Astro 5**, static output, **zero client JS**.
**Reason:** A personal portfolio doesn't need a client runtime. Static HTML/CSS
is faster, simpler, and cheaper to host; the only JavaScript now is a ~30-line
inline theme toggle.
**Impact:** Removed React, Tailwind, Framer Motion, Heroicons, and Spline.
Styling moved to hand-written CSS with custom properties. `app/` (App Router)
→ `src/` (Astro pages/layouts/components/content/data/styles).

### Design language
**Changed:** "bento grid + brutalist + experimental" → **quiet ledger**.
**Reason:** The bento/brutalist concept never felt like the work. An editorial,
document-like layout (single 820px column, hairline rules, restrained type)
reads as calmer and more honest — closer to the plain engineer sites (Bellard,
Hotz) that were the real reference.
**Impact:** No cards, no bento grid, no shadows. Rules separate rows; two
full-bleed bands (Klein-blue masthead, inverted contact) are the only fills.

### Typography
**Changed:** Host Grotesk + Playfair Display → **EB Garamond** (serif) +
**IBM Plex Mono** (mono) + **Helvetica/Arial** (body).
**Reason:** Serif display + mono metadata gives the ledger its voice.
**Impact:** Fonts self-hosted via `@fontsource` (no external font requests).

### Color & themes
**Changed:** `#0066FF` accent + six pastel bento tints + **3 themes**
(light/dark/reading) → single **Klein-blue `#2e3cf2`** accent on a warm
near-neutral palette + **2 themes** (light/dark).
**Reason:** One disciplined accent on ink/paper neutrals suits the ledger; a
third "reading" mode added complexity for no real benefit.
**Impact:** All colors are tokens on `:root` / `html.dark-mode`. Theme resolved
before first paint (no flash), persisted to `localStorage`.

### Structure & content
**Added:** Two-page architecture — homepage (`/`) + writing (`/writing`,
`/writing/[slug]`). Blog posts are an Astro **content collection**
(`src/content/writing`, Zod schema); homepage lists live in `src/data/home.ts`.
**Added:** Masthead "LATEST" ticker derived from `writing[0]`.
**Changed:** Content/persona sharpened to **AI Infrastructure Engineer at Tenzr
Health** with benchmarked metrics (`329ms → 2ms`, `20s → 2s`, `−40% deploy`).

### Deploy & repo
**Changed:** Deploy target is now **AWS Amplify** static build (`amplify.yml`,
artifacts from `dist/`).
**Removed:** Leftover Next.js artifacts (`.next/`, `next-env.d.ts`) deleted and
added to `.gitignore`.

---

> **The entries below are historical.** They document the earlier
> bento/brutalist Next.js direction that was abandoned in the 2.0.0 rebuild.
> Kept for decision history — they no longer describe the live site.

## [Superseded] - 2025-10-08

### Strategic Direction - v1 Scope

**Primary Goal:** Establish design feel/system in practice (not full site)
**Reason:** Once design direction is proven on homepage, can continue independently with clear inspiration
**Timeline:** ~2 weeks, flexible based on inspiration/flow

**v1 Deliverables:**
- Homepage with bento grid layout
- 3-5 featured projects from GitHub
- About section
- Navigation structure

**Phase 2 (Post-v1):**
- Blog section (content not yet written)
- Books page (separate, review-style with covers)
- Additional project details
- Timeline/experience section

**Portfolio Purpose:**
- Career advancement (jobs, internships)
- Collaboration opportunities
- Showcase technical range (Python, TypeScript, data analysis, web dev)

### Content Sources
**Projects from GitHub (manvirheer):**
1. nx-logstats - Python CLI for NGINX log analysis
2. parkingticketanalysis - Vancouver data + geospatial analysis
3. shift_logger_api - Industrial boiler management API (TypeScript)
4. flow_metrics - Next.js frontend for industrial client
5. DeadLinkCrawler - Python web scraping utility

**About/Bio:** LinkedIn profile (Manvir Heer)

### Tech Stack & Color System Defined
**Added:** Complete tech stack documentation (`tech-stack.md`)
- Locked dependencies: Framer Motion, Tailwind v4, Heroicons
- Animation standards: All variants in motion.ts, 100-400ms timing
- Component patterns: Build custom, no UI libraries

**Color System:**
- **Strategy:** Bold/confident professional (saturated blue primary)
- **Primary color:** #0066FF (trustworthy blue) for light mode
- **Dark foundation:** #32374A (navy blue-gray) as base
- **Bento variety:** Moderate pastels (clear but soft)

**Theme Structure:** 3 themes total
1. **Light** - Default, professional, first impressions
2. **Dark** - Focus mode, development, using #32374A foundation
3. **Reading** - Warm sepia tones, long-form content

**Rationale:**
- Blue = tech standard, trustworthy for job hunting
- Bold saturated tones = confident, not timid
- Moderate pastels = visual variety without overwhelming
- 3 themes = covers all use cases without complexity
- Navy dark mode = sophisticated, not pure black

## [Unreleased] - 2025-10-08

### Philosophy Shift
**Changed:** Moving away from Harry J Atkins 1:1 copy approach
**Reason:** Personal portfolio needs unique voice to avoid appearing derivative
**New Direction:** Bento grid + brutalist + experimental "tinker lab" aesthetic

### Design System Defined
**Added:** Core design philosophy document
- 4px base unit grid system (mathematical precision)
- Bento card layout system (modular, asymmetric)
- Brutalist visual language (raw, functional, high contrast)
- Experimental/builder aesthetic (active workspace feel)

**Added:** Comprehensive spacing scale (4px increments)
**Added:** Typography scale (1.25 ratio, Host Grotesk + Playfair)
**Added:** Functional color system (moving from grayscale minimalism)

### Grid System
**Defined:** 4/8/12/16 column responsive grid
**Defined:** Card sizing system based on column spans
**Rationale:** Maintains precision that brain recognizes (Atkins influence) while allowing bento flexibility

### Color Philosophy
**Changed:** From monochrome + minimal accent to functional color system
**Added:** Purpose-driven accent colors (primary, success, warning, error, code)
**Added:** Bento card background tints (blue, green, yellow, purple, red, orange)
**Rationale:** Brutalist aesthetic + functional color = clarity without being boring

## [Previous] - Pre-2025-10-08

### Initial Inspiration Phase
**Researched:** Harry J Atkins portfolio
- Loved: Pixel-perfect grid system, typography focus, minimal aesthetic
- Issue: Too similar for personal branding

**Researched:** Katherine Le portfolio
- Noted: Clean layouts, project showcases

### Current Implementation
**Implemented:** Under construction page with Main Layout
**Implemented:** YVR project showcase with specialized layout
**Implemented:** Theme system (light/dark/mono modes)
**Implemented:** Font configuration (Host Grotesk primary)
**Implemented:** Framer Motion animation system

### Technical Foundation
**Setup:** Next.js 15 + TypeScript + Tailwind v4
**Setup:** Theme context with localStorage persistence
**Setup:** Centralized font and motion configuration
**Setup:** Dual layout system (Main + YVR)

---

## Notes Template for Future Changes

Use this format for documenting design decisions:

```markdown
## [Version/Date] - YYYY-MM-DD

### [Category]
**[Action]:** What changed
**Reason:** Why it changed
**Impact:** What this affects
**Alternative Considered:** What else was considered
```

## Decision Log

### Why 4px base unit?
- Common in modern design systems (Material, Tailwind)
- Divisible by 2 (easier responsive scaling)
- Small enough for precision, large enough for consistency
- Matches typical font-size increments

### Why bento over traditional grid?
- More dynamic and modern (2024-2025 trend)
- Allows varied content hierarchy
- Better mobile adaptation
- Feels more "experimental" than static grid

### Why brutalist?
- Aligns with technical/builder persona
- Stands out from soft, rounded modern portfolios
- Honest about being a portfolio (form follows function)
- Easier to implement well (fewer subtle details to perfect)

### Why show "under construction"?
- Transparency builds trust
- Portfolio is never "done" (continuous iteration)
- Experimental aesthetic embraces work-in-progress
- Can showcase process, not just final product
