import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap"; // @ts-check
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */
  {
    integrations: [react(), sitemap(), tailwind(), partytown()],
    site: "https://benadam.me",
    markdown: {
      rehypePlugins: [
        ["rehype-slug", {}],
        [
          "@jsdevtools/rehype-toc",
          {
            position: "afterend",
          },
        ],
      ],
    },
  }
);
