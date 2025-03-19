# Next.js App Router Documentation

## Introduction to Next.js App Router

Next.js 13+ introduced the App Router. In this architecture, every folder represents a route segment and a `page.tsx` file within a folder makes that route publicly accessible.

## Project Routes Structure
```
# will be changing 
app/
├─ page.tsx              # manvirheer.com/
├─ layout.tsx            # Root layout (applies to all pages)
├─ information/
│  └─ page.tsx           # manvirheer.com/information
├─ projects/
│  ├─ page.tsx           # manvirheer.com/projects
│  └─ [slug]/
│     └─ page.tsx        # manvirheer.com/projects/[project-name]
├─ timeline/             # Future implementation
│  └─ page.tsx           # manvirheer.com/timeline
└─ writings/             # Future implementation
   ├─ page.tsx           # manvirheer.com/writings
   └─ [slug]/
      └─ page.tsx        # manvirheer.com/writings/[post-name]
```

## Route Specifications

### Home Page (`/`)
- Primary landing page
- Minimalist design featuring typography-focused introduction
- Potentially featuring a large name display similar to the Harry Atkins site
- Brief introduction

### Information Page (`/information`)
- Personal details and background
- Contact form for professional inquiries
- Location and availability information
- Design philosophy or personal manifesto

### Projects Page (`/projects`)
- Grid layout of portfolio projects
- Each project will have:
  - Thumbnail image
  - Project title
  - Brief description
  - Technology/tools used

### Project Detail Page (`/projects/[slug]`)
- Dynamic route for individual project pages
- In-depth case study format
- Process documentation
- Images and potentially videos
- Outcomes and learnings

### Timeline Page (`/timeline`) - *Future Implementation*
- Horizontal scrolling timeline
- Professional and educational milestones
- Potentially interactive elements
- Visual representation of career progression

### Writings Page (`/writings`) - *Future Implementation*
- Blog-style layout for articles
- Categories or tags for content organization
- Date published information
- Reading time estimates

### Writing Detail Page (`/writings/[slug]`) - *Future Implementation*
- Dynamic route for individual blog posts
- Rich text formatting
- Code snippets (if technical)
- Related articles
