import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://taxiwine.com', // TODO: replace with your real domain
  vite: {
    plugins: [tailwindcss()],
  },
});
