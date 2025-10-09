# V1 Implementation Plan

**Goal:** Establish design feel with working homepage that demonstrates the bento + brutalist + experimental aesthetic

**Success Criteria:** Design system proven in practice → can continue building independently with clear direction

## Phase 1: Foundation (Days 1-2)

### Setup Design System
**Objective:** Get the grid and base styles working

- [ ] Update `globals.css` with 4px spacing scale
- [ ] Add bento grid utilities to Tailwind theme
- [ ] Create base card component with brutalist styling
- [ ] Test grid overlay for alignment verification
- [ ] Update color system (functional accents + bento tints)

**Deliverable:** Design tokens working, can build cards that snap to grid

**Decision Checkpoint:** Grid feels right? Spacing looks precise?

---

## Phase 2: Homepage Layout (Days 3-5)

### Bento Grid Structure
**Objective:** Build the asymmetric layout that feels like a builder's workbench

**Layout Sections (Bento Cards):**

1. **Hero Card** (Large 2x2 or wider)
   - Name display
   - Title/tagline
   - Visual hook (typography animation or subtle interaction)

2. **About Card** (Medium)
   - Brief bio from LinkedIn
   - Skills/focus areas
   - Link to full about (future)

3. **Featured Projects** (Mixed sizes: 3-5 cards)
   - Select from: nx-logstats, parking analysis, flow_metrics, shift_logger_api
   - Each card: Image/icon, title, tech stack, brief description
   - Hover states with brutalist transitions

4. **Contact/Links Card** (Small)
   - GitHub, LinkedIn, Email
   - Clean, functional layout

5. **Status/Meta Card** (Small, experimental)
   - "Last updated: [date]"
   - Or current focus/availability
   - Adds tinker-lab vibe

**Tasks:**
- [ ] Create bento grid container component
- [ ] Build hero card with name/title
- [ ] Design project card component (reusable)
- [ ] Implement 3-5 project cards with real content
- [ ] Add about card with bio
- [ ] Create contact/links card
- [ ] Add experimental status card (optional)

**Deliverable:** Full homepage layout with real content

**Decision Checkpoint:** Does it feel right? Bento balance working? Too dense or too sparse?

---

## Phase 3: Interactions & Polish (Days 6-8)

### Animation System
**Objective:** Bring the experimental/tinker feel to life

**Standardized Animations (add to `motion.ts`):**

1. **Card Hover:**
   - Option A: Subtle lift (2-4px)
   - Option B: Border thickens (1px → 2px)
   - Option C: Background tint shift
   - **Decision:** Pick one pattern, apply consistently

2. **Card Entry (on page load):**
   - Stagger fade-in from top-left to bottom-right
   - Or: No animation (brutalist = immediate)
   - **Decision:** Subtle or none

3. **Interactive Elements:**
   - Button states (existing in motion.ts)
   - Link underlines (animated)
   - Theme switcher (keep existing)

**Tasks:**
- [ ] Define card hover animation in `motion.ts`
- [ ] Apply to all cards consistently
- [ ] Add project card click/tap states
- [ ] Implement any hero card interactions
- [ ] Test theme switching with new design
- [ ] Ensure all animations feel snappy (100-200ms)

**Deliverable:** Cohesive interaction model across all cards

**Decision Checkpoint:** Animations feel experimental but not gimmicky? Consistent enough?

---

## Phase 4: Responsive & Polish (Days 9-11)

### Mobile → Desktop
**Objective:** Ensure grid integrity across breakpoints

**Breakpoint Behavior:**
- Mobile (< 640px): Stack cards, 1-2 column
- Tablet (641-1024px): 4-column bento starts
- Desktop (1025px+): Full 12-column bento

**Tasks:**
- [ ] Test mobile layout (cards stack properly)
- [ ] Test tablet layout (bento starts working)
- [ ] Test desktop layout (full asymmetric grid)
- [ ] Verify 4px alignment at all breakpoints
- [ ] Check typography scaling
- [ ] Test dark/mono themes with new design
- [ ] Touch targets 44px minimum (mobile)

**Deliverable:** Works beautifully on all screen sizes

**Decision Checkpoint:** Mobile-first working? Desktop bento impressive?

---

## Phase 5: Content & Launch (Days 12-14)

### Real Content Integration
**Objective:** Replace placeholders with actual portfolio content

**Content Tasks:**
- [ ] Pull project descriptions from GitHub READMEs
- [ ] Write brief bio (or adapt from LinkedIn)
- [ ] Add real links (GitHub, LinkedIn, email)
- [ ] Screenshots/images for projects (if available)
- [ ] Proofread all copy
- [ ] Update metadata (title, description)

**Final Polish:**
- [ ] Remove placeholder text
- [ ] Test all links
- [ ] Performance check (Lighthouse)
- [ ] Accessibility audit (contrast, keyboard nav)
- [ ] Cross-browser testing
- [ ] Deploy to production

**Deliverable:** Live v1 portfolio with real content

---

## Decision Checkpoints Summary

Built-in stopping points to avoid getting stuck:

1. **After Foundation:** Grid system feels right?
2. **After Layout:** Bento balance working?
3. **After Interactions:** Animation style consistent and appropriate?
4. **After Responsive:** Works across all devices?
5. **Before Launch:** Content ready and polished?

At each checkpoint: **Review → Adjust → Proceed** or **Iterate → Re-review**

---

## What's NOT in V1

**Explicitly out of scope:**
- Blog section (no content written yet)
- Books page (phase 2)
- Individual project detail pages
- Timeline page
- Full about page

**Why:** Focus on establishing design system and feel. Once v1 is solid, these pages follow the same patterns.

---

## Success Metrics

**V1 is successful if:**
1. ✅ Design system proven (can build new pages confidently)
2. ✅ Grid precision visible (that "brain likes it" feeling)
3. ✅ Brutalist + experimental aesthetic clear
4. ✅ Showcases 3-5 strong projects
5. ✅ Works on mobile and desktop
6. ✅ Fast and accessible
7. ✅ You feel confident continuing on your own

**Not success metrics:**
- ❌ Feature completeness (intentionally MVP)
- ❌ Perfect content (can iterate)
- ❌ Every idea implemented (focus > breadth)

---

## Next Steps

1. **Review this plan** - Adjust timeline/scope as needed
2. **Start Phase 1** - Foundation work (design tokens)
3. **Check in after each phase** - Decision checkpoints
4. **Deploy v1** - Celebrate and continue building
