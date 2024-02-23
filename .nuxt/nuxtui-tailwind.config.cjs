
      const { defaultExtractor: createDefaultExtractor } = require('tailwindcss/lib/lib/defaultExtractor.js')
      const { customSafelistExtractor } = require("C:/develop/develop/node_modules/@nuxt/ui/dist/runtime/utils/colors")
      const { iconsPlugin, getIconCollections } = require('@egoist/tailwindcss-icons')

      const defaultExtractor = createDefaultExtractor({ tailwindConfig: { separator: ':' } })

      module.exports = {
        darkMode: 'class',
        plugins: [
          require('@tailwindcss/forms')({ strategy: 'class' }),
          require('@tailwindcss/aspect-ratio'),
          require('@tailwindcss/typography'),
          require('@tailwindcss/container-queries'),
          require('@headlessui/tailwindcss'),
          iconsPlugin({ collections: getIconCollections(["heroicons"]) })
        ],
        content: {
          files: [
            "C:/develop/develop/node_modules/@nuxt/ui/dist/runtime/components/**/*.{vue,mjs,ts}",
            "C:/develop/develop/node_modules/@nuxt/ui/dist/runtime/ui.config/**/*.{mjs,js,ts}"
          ],
          transform: {
            vue: (content) => {
              return content.replaceAll(/(?:\r\n|\r|\n)/g, ' ')
            }
          },
          extract: {
            vue: (content) => {
              return [
                ...defaultExtractor(content),
                ...customSafelistExtractor("U", content, ["red","orange","amber","yellow","lime","green","emerald","teal","cyan","sky","blue","indigo","violet","purple","fuchsia","pink","rose","primary"], ["primary"])
              ]
            }
          }
        }
      }
    