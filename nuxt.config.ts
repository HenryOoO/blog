// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  extends: ['@nuxt-themes/typography'],
  content: {
      documentDriven: false,
  },
  devServer: {
      host: '0.0.0.0',
  }
  
})