import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import node from "@astrojs/node";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://luiznormanha.dev",
  trailingSlash: "always",
  build: {
    format: "directory",
  },
  output: "hybrid",
  integrations: [react()],
  adapter: vercel({
    includeFiles: ["./src/pages/api/send-email.json.ts"],
  }),
});
