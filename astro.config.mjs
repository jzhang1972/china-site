// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.yogotochina.com',
  integrations: [sitemap()],
  redirects: {
    '/blog/first-guide': '/blog/how-to-pay-in-china',
  },
});