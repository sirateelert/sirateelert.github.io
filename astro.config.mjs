import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// ---------------------------------------------------------------------------
// IMPORTANT: update `site` to your final GitHub Pages URL before deploying,
// e.g. https://<your-username>.github.io  (or your custom domain).
// If you deploy to https://<username>.github.io/<repo>, also set `base`.
// See README.md for full deployment instructions.
// ---------------------------------------------------------------------------
export default defineConfig({
  site: 'https://siratee.com',
  // base: '/your-repo-name', // uncomment + set if deploying to a project page
  integrations: [
    mdx(),
    sitemap(),
    tailwind({ applyBaseStyles: false }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true,
    },
  },
});
