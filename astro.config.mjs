import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://manvirheer.com',
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      // Replicate the per-URL priority tiers from the old Next sitemap.ts.
      serialize(item) {
        const path = new URL(item.url).pathname;
        if (path === '/') {
          item.priority = 1.0;
          item.changefreq = 'weekly';
        } else if (path === '/writing' || path === '/writing/') {
          item.priority = 0.8;
          item.changefreq = 'weekly';
        } else {
          item.priority = 0.6;
          item.changefreq = 'yearly';
        }
        return item;
      },
    }),
  ],
  markdown: {
    // react-markdown shipped no syntax highlighting → keep code blocks monochrome.
    syntaxHighlight: false,
    gfm: true,
    // keep straight quotes exactly as the current site renders them
    smartypants: false,
  },
  // output defaults to 'static'. No prefetch, no <ClientRouter> — keeps client JS at 0.
});
