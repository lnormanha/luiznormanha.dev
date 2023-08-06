import { defineConfig } from 'astro/config';
import { i18n, defaultLocaleSitemapFilter } from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";
const defaultLocale = "en";
const locales = {
  "en": "en-US",
  // the `defaultLocale` value must present in `locales` keys
  "pt": "pt-BR"
};


// https://astro.build/config
export default defineConfig({
  site: "https://luiznormanha.dev",
  trailingSlash: "always",
  build: {
    format: "directory"
  },
  output: "hybrid",
  integrations: [i18n({
    locales,
    defaultLocale
  }), sitemap({
    i18n: {
      locales,
      defaultLocale
    },
    filter: defaultLocaleSitemapFilter({
      defaultLocale
    })
  }), react()],
  adapter: vercel({
    includeFiles: ['./src/pages/send-email.json'],
  }),
});