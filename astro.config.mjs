// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Páginas fora do sitemap: logins (noindex) e 404.
const foraDoSitemap = ['/area-do-cliente', '/portal-do-contador', '/404'];

export default defineConfig({
  // No GitHub Pages o workflow define SITE_URL e BASE_PATH (ex.: /diprosoft-site);
  // para domínio próprio, use SITE_URL=https://www.diprosoft.com.br e BASE_PATH=/.
  site: process.env.SITE_URL || 'https://www.diprosoft.com.br',
  base: process.env.BASE_PATH || '/',
  integrations: [
    sitemap({
      filter: (pagina) => !foraDoSitemap.some((caminho) => new URL(pagina).pathname.replace(/\/$/, '').endsWith(caminho)),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
