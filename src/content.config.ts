import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The `writing` collection. Slug is derived from each file's name (entry.id),
// so it is intentionally not part of the frontmatter schema.
const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/), // YYYY-MM-DD; display does .replace(/-/g,'.')
    readTime: z.string(), // e.g. "8 min"
    tags: z.array(z.string()).default([]),
    excerpt: z.string(),
  }),
});

export const collections = { writing };
