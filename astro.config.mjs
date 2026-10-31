// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://electrp.com/',
  integrations: [preact(), icon()],
  vite: {
    server: {
      watch: {
        ignored: ['!**/src/**', '!**/vite.config.js'],
        usePolling: true,
        interval: 100, // check for changes every 100ms
      },
    },
  },
})