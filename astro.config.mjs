import { defineConfig } from "astro/config";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import { transformerNotationDiff } from "shikiji-transformers";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: "catppuccin-mocha",
          transformers: [
            transformerNotationDiff(),
            transformerCopyButton({
              visibility: "hover",
              feedbackDuration: 2_500,
            }),
          ],
        },
      ],
    ],
  },
  site: "https://simon-hv.dev/",
});
