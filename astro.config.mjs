// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site:
    process.env.SITE_URL ||
    (process.env.GITHUB_REPOSITORY_OWNER
      ? `https://${process.env.GITHUB_REPOSITORY_OWNER}.github.io`
      : 'http://localhost:4321'),
  base: process.env.BASE_PATH || '/',
  compressHTML: true,
  trailingSlash: 'always',

  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  integrations: [sitemap()],
});
