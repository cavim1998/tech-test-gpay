// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
  ],
  imports: {
    dirs: ['stores'],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/variables.scss";
            @import 'bootstrap-icons/font/bootstrap-icons.css';
          `
        }
      }
    }
  },
  css: [
    'bootstrap/scss/bootstrap.scss'
  ]
})
