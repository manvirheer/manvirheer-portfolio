# Design Changelog

All notable design decisions and iterations are documented here.

## [Unreleased] - 2025-10-08

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
