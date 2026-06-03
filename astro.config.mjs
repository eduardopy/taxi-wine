import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://eduardopy.github.io',
  base: '/taxi-wine',
  vite: {
    plugins: [tailwindcss()],
  },
});
