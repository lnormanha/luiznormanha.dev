import { defineConfig } from 'astro/config';
import { i18n, defaultLocaleSitemapFilter } from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";
const defaultLocale = "en";
const locales = {
  "en": "en-US",
  // the `defaultLocale` value must present in `locales` keys
  "pt": "pt-BR"
};

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:3000",
  trailingSlash: "always",
  build: {
    format: "directory"
  },
  integrations: [i18n({
    locales,
    defaultLocale
  }), sitemap({
    i18n: {
      locales,
      defaultLocale
    },
    filter: defaultLocaleSitemapFilter({ defaultLocale }),
  })]
});