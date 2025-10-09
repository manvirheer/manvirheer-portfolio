# Manvir Heer - Portfolio Website

Personal portfolio website showcasing projects, writing, and professional experience.

**Live Site:** [manvirheer.com](https://manvirheer.com)

## Design Philosophy

**Bento Grid + Brutalist + Experimental = Precision-Engineered Playground**

This portfolio combines three core design principles:
- **Bento Grid:** Asymmetric, modular card layouts with varied content hierarchy
- **Brutalist:** High contrast, strong borders, functional over decorative, honest structure
- **Experimental:** Builder's workbench aesthetic, shows process alongside polish

**Key Features:**
- 4px mathematical grid system (everything aligns to invisible grid)
- Three theme modes: Light (professional), Dark (focus), Reading (warm)
- Bold blue (#0066FF) primary accent with moderate pastel variety
- Custom-built components (no UI libraries)
- Fast, purposeful animations (100-400ms)

## Tech Stack

**Framework & Core:**
- Next.js 15.2.3 (App Router, Turbopack)
- React 19
- TypeScript 5
- Tailwind CSS v4 (using @theme directive)

**Animation & Interaction:**
- Framer Motion 12.5.0 (centralized in `app/config/motion.ts`)
- CSS transitions for simple states

**Styling:**
- Host Grotesk (primary typography)
- Playfair Display (accent typography)
- Heroicons 2.2.0 (icons)
- Custom 4px spacing scale

**Additional:**
- Spline (3D backgrounds for project showcases)

## Design Documentation

Complete design system in `/design/` folder:

- **[`design/README.md`](./design/README.md)** - Quick reference and overview
- **[`design/core-design.md`](./design/core-design.md)** - Full design philosophy and principles
- **[`design/grid-reference.md`](./design/grid-reference.md)** - Technical grid implementation guide
- **[`design/tech-stack.md`](./design/tech-stack.md)** - Tech standards and constraints
- **[`design/v1-plan.md`](./design/v1-plan.md)** - Implementation roadmap
- **[`design/changelog.md`](./design/changelog.md)** - Design decisions and history

## Project Structure

```
manvirheer-portfolio/
├── app/
│   ├── components/
│   │   ├── layout/          # Layout components (main, yvr)
│   │   ├── ui/              # Base UI components (to be built)
│   │   └── home/            # Homepage-specific components (to be built)
│   ├── config/
│   │   ├── fonts.ts         # Font configuration
│   │   └── motion.ts        # Framer Motion variants
│   ├── context/
│   │   └── theme-context.tsx # Theme state management
│   ├── styles/
│   │   └── globals.css      # Tailwind config, theme variables
│   ├── yvr/                 # YVR project showcase
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── design/                  # Design system documentation
├── docs/                    # Additional documentation
└── public/                  # Static assets
```

## Current Status

**Phase:** Design system definition complete, beginning v1 implementation

**v1 Goals:**
- Establish design feel with homepage
- Showcase 3-5 featured projects
- About section
- Working theme switcher
- Responsive bento grid layout

**Post-v1:**
- Blog section
- Book reviews page
- Project detail pages
- Timeline/experience section

See [`design/v1-plan.md`](./design/v1-plan.md) for detailed implementation roadmap.

## Other Documentation

- **Routing Structure:** [`docs/Routing.md`](./docs/Routing.md)
- **Claude Code Guide:** [`CLAUDE.md`](./CLAUDE.md)

## Design Principles

When building components or pages, follow these core principles:

1. **4px Grid Alignment** - All spacing and sizing in multiples of 4px
2. **Theme Variables** - Use CSS custom properties (--page-bg, --page-text, etc.)
3. **Centralized Animations** - Define in `app/config/motion.ts`, import and reuse
4. **Custom Components** - Build from scratch, no UI libraries
5. **Three Theme Support** - Test in light, dark, and reading modes
6. **Fast Animations** - 100-200ms for micro-interactions, 400ms max for major

See [`design/tech-stack.md`](./design/tech-stack.md) for complete standards.

## Commit Guidelines

Follow these commit message conventions:

- `Docs`: documentation changes
- `Task`: build process, tools, dependencies, new features
- `Refactor`: code refactoring without changing functionality
- `Bug`: bug fixes

**Format:** `Category: everything else in lowercase`

**Examples:**
```
Refactor: update header animation timing
Bug: fix theme switcher initial state
Task: upgrade next.js to 15.2.3
Docs: add design system documentation
```

## Development

### Prerequisites

- Node.js (v18 or later)
- npm (v9 or later)

### Getting Started

```bash
# Clone the repository
git clone https://github.com/manvirheer/manvirheer-portfolio.git

# Navigate to the project
cd manvirheer-portfolio

# Install dependencies
npm install

# Start development server (with Turbopack)
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

Visit [http://localhost:3000](http://localhost:3000) to see the development site.

### Available Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```