// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
    extends: ['@nuxt-themes/typography'],
    content: {
        navigation: {
            fields: ['icon'],
        },
        documentDriven: {
            // https://content.nuxt.com/get-started/configuration#documentdriven
            // Will fetch `content/_theme.yml` and put it in `globals.theme` if present.
            globals: {
                theme: {
                    where: [{ _id: 'content:_theme.yml' }],
                    without: ['_'],
                },
            },
            // Will use `theme` global to search for a fallback `layout` key.
            layoutFallbacks: ['theme'],
        },
    },
    devServer: {
        host: '0.0.0.0',
    },
})
