// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

import icon from 'astro-icon';

import mdx from '@astrojs/mdx';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio.electrp.com/',
  integrations: [preact(), icon(), mdx()],
  vite: {
    server: {
      watch: {
        ignored: ['!**/src/**', '!**/vite.config.js'],
        usePolling: true,
        interval: 100, // check for changes every 100ms
      },
    },
    plugins: [tailwindcss()]
  },
})