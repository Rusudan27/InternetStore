// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  modules: ['@nuxt/eslint', 'nuxt-svgo', "@nuxtjs/stylelint-module",
],
   css: [ '@/assets/scss/main.scss'],
   vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/variables" as *;'
        }
      }
    }
  },
})