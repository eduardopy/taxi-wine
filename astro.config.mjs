import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const site = process.env.ASTRO_SITE ?? 'https://taxiwine.com';
const base = process.env.ASTRO_BASE;
const baseConfig = base && base !== '/' ? { base } : {};

// https://astro.build/config
export default defineConfig({
  site,
  ...baseConfig,
  vite: {
    plugins: [tailwindcss()],
  },
});
