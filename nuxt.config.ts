// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app:{
    baseURL: '/jw-notes/',
    head: {
      title: 'JW Notes'
    }
  },
  ssr: false
})
