// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://synectura.com',
  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
    // Aquí autorizamos los dominios para el modo preview
    preview: {
      allowedHosts: ['synectura.com', 'www.synectura.com']
    
    }
  },
});