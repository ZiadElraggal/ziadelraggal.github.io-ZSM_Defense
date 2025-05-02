import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  ssr: false,
  app: {
    baseURL:'/ziadelraggal.github.io-ZSM_Defense/',
    buildAssetsDir: 'assets',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/ziadelraggal.github.io-ZSM_Defense/favicon.ico' }
      ]    
    }
  },
  modules: ['@nuxt/ui'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});