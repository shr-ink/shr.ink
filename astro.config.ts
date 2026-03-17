// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import favicons from "astro-favicons";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    favicons({
      input: "src/assets/icon.svg",
      name: "shr.ink",
      short_name: "shr.ink",
    }),
  ],

  image: {
    remotePatterns: [{ protocol: "https" }],
  },
});
