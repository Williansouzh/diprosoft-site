// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // No GitHub Pages o workflow define SITE_URL e BASE_PATH (ex.: /diprosoft-site).
  site: process.env.SITE_URL ?? 'https://www.diprosoft.com.br',
  base: process.env.BASE_PATH ?? '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
