// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.yogotochina.com',
  integrations: [sitemap()],
  redirects: {
    '/blog/first-guide': '/blog/how-to-pay-in-china',
    
    // ===== 新增：旧故事页 301 重定向到博客文章 =====
    '/stories/24h-convenience-store': '/blog/24h-convenience-store/',
    '/stories/cold-medicine-delivery': '/blog/cold-medicine-delivery/',
    '/stories/flying-without-wings': '/blog/flying-without-wings/',
    '/stories/lost-and-found': '/blog/lost-and-found/',
    '/stories/midnight-barbecue': '/blog/midnight-barbecue/',
    '/stories/one-phone-14-days': '/blog/one-phone-14-days/',
    '/stories/same-day-doctor': '/blog/same-day-doctor/',
  },
});