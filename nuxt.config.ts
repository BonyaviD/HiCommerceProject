import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      // Meta tags and other head elements
      link: [
        // Favicon
        { rel: 'icon', type: 'image/x-icon', href: '/assets/img/favicon/favicon.ico' },
        
        // Icons
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
        { rel: 'stylesheet', href: '/assets/vendor/libs/apex-charts/apex-charts.css' },
      ],
      script: [
        // Core JS
        { src: '/assets/vendor/libs/jquery/jquery.js', type: 'text/javascript' },
        { src: '/assets/vendor/libs/popper/popper.js', type: 'text/javascript' },
        { src: '/assets/vendor/js/bootstrap.js', type: 'text/javascript' },
        { src: '/assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js', type: 'text/javascript' },
        { src: '/assets/vendor/libs/hammer/hammer.js', type: 'text/javascript' },
        { src: '/assets/vendor/libs/i18n/i18n.js', type: 'text/javascript' },
        { src: '/assets/vendor/libs/typeahead-js/typeahead.js', type: 'text/javascript' },
        { src: '/assets/vendor/js/menu.js', type: 'text/javascript' },
  
        // Vendors JS
        { src: '/assets/vendor/libs/apex-charts/apexcharts.js', type: 'text/javascript' },
  
        // Main JS
        { src: '/assets/js/main.js', type: 'text/javascript' },
  
        // Page JS
        { src: '/assets/js/dashboards-analytics.js', type: 'text/javascript' },
  
        // Helpers
        { src: '/assets/vendor/js/helpers.js', type: 'text/javascript' },
  
        // Template customizer & Theme config files (include after core JS files)
        { src: '/assets/js/config.js', type: 'text/javascript' }
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
// https://nuxt.com/docs/api/configuration/nuxt-config


