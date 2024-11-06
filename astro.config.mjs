import { defineConfig } from 'astro/config'
import react from '@astrojs/react'

import tailwind from '@astrojs/tailwind'
import rehypePrettyCode from 'rehype-pretty-code'
import { transformerCopyButton } from '@rehype-pretty/transformers'

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'catppuccin-mocha',
          transformers: [
            transformerCopyButton({
              visibility: 'hover',
              feedbackDuration: 2_500,
            }),
          ],
        },
      ],
    ],
  },
})
