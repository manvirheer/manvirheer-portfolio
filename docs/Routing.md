# Next.js App Router Documentation

## Introduction to Next.js App Router

Next.js 13+ introduced the App Router. In this architecture, every folder inside the `app` directory represents a route segment. A `page.tsx` file within a route segment makes that route publicly accessible.

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

- Primary landing page.
- Minimalist design featuring a typography-focused introduction.
- Potentially featuring a large name display, similar to the Harry Atkins site.
- Includes a brief introductory section.

### Information Page (`/information`)

- Contains personal details and background information.
- Features a contact form for professional inquiries.
- Provides location and availability information.
- May include a design philosophy or personal manifesto.

### Projects Page (`/projects`)

- Displays a grid layout of portfolio projects.
- Each project item will include:
    - A thumbnail image.
    - The project title.
    - A brief description.
    - The technologies or tools used.

### Project Detail Page (`/projects/[slug]`)

- Serves as a dynamic route for individual project pages.
- Will follow an in-depth case study format.
- Includes process documentation.
- Features images and potentially videos.
- Outlines outcomes and learnings from the project.

### Timeline Page (`/timeline`) - *Future Implementation*

- Will feature a horizontal scrolling timeline.
- Will showcase professional and educational milestones.
- May include interactive elements.
- Aims to provide a visual representation of career progression.

### Writings Page (`/writings`) - *Future Implementation*

- Will have a blog-style layout for articles.
- Will include categories or tags for content organization.
- Will display the date each article was published.
- May provide reading time estimates.

### Writing Detail Page (`/writings/[slug]`) - *Future Implementation*

- Will be a dynamic route for individual blog posts.
- Will support rich text formatting.
- Will allow for the inclusion of code snippets (if the post is technical).
- May suggest related articles.
