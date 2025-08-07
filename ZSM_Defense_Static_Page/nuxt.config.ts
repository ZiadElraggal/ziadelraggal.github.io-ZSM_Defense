import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-05-03',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  ssr: false,
  app: {
    baseURL:'/ziadelraggal.github.io-ZSM_Defense/',
    buildAssetsDir: 'assets',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/ziadelraggal.github.io-ZSM_Defense/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap'
        }
      ]   
    }
  },
  modules: ['@nuxt/ui', '@nuxt/fonts'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});