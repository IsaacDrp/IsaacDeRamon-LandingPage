// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // ...
  server: {
    host: '0.0.0.0', // Escucha en todas las interfaces de tu Gateway
    allowedHosts: true
  },
  vite: {
    server: {
      allowedHosts: true
    },
    preview: {
      allowedHosts: true
    }
  }
});