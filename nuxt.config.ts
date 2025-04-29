export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        dir: 'rtl',
        lang: 'fa'
      },
      link: [
        // Favicon
        { rel: 'icon', type: 'image/x-icon', href: '/assets/img/favicon/favicon.ico' },

        // Fonts and Icons
        { rel: 'stylesheet', href: '/assets/vendor/fonts/boxicons.css' },
        { rel: 'stylesheet', href: '/assets/vendor/fonts/fontawesome.css' },
        { rel: 'stylesheet', href: '/assets/vendor/fonts/flag-icons.css' },

        // Core CSS
        { rel: 'stylesheet', href: '/assets/vendor/css/rtl/core.css' },
        { rel: 'stylesheet', href: '/assets/vendor/css/rtl/theme-default.css' },
        { rel: 'stylesheet', href: '/assets/css/demo.css' },
        { rel: 'stylesheet', href: '/assets/vendor/css/rtl/rtl.css' },

        // Vendors CSS
        { rel: 'stylesheet', href: '/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css' },
        { rel: 'stylesheet', href: '/assets/vendor/libs/typeahead-js/typeahead.css' },
        { rel: 'stylesheet', href: '/assets/vendor/libs/apex-charts/apex-charts.css' }
      ],
      script: [
        // Helpers
        { src: '/assets/vendor/js/helpers.js' },

        // Template customizer & Config
        { src: '/assets/vendor/js/template-customizer.js' },
        { src: '/assets/js/config.js' }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
