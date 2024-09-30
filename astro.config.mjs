import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap"; // @ts-check
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig(
  /** @type {import('astro').AstroUserConfig} */
  {
    integrations: [react(), sitemap(), tailwind(), mdx()],
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
        () => (tree) => {
          tree.children = tree.children.map((node) => {
            if (node.tagName === "pre") {
              return {
                type: "element",
                tagName: "div",
                properties: { className: ["code-wrapper"] },
                children: [node],
              };
            }
            return node;
          });
        },
      ],
      shikiConfig: {
        themes: {
          light: "github-light",
          dark: "github-dark",
        },
        defaultColor: "light",
      },
    },
  }
);
