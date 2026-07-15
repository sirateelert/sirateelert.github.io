import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Add your live domain here
  site: 'https://sirateelert.github.io',
  integrations: [tailwind()],
});