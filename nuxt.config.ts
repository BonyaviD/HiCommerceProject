export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'fa'
      },
    }
  },
  runtimeConfig: {
    public: {
      apiBase: 'http://api.hicommerce.ir/api', // برای استفاده در کلاینت
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
