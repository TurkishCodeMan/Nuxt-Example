export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'borulce',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  script: [
    {
      src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
      type: "text/javascript"
    },
    {
      src:
        "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
      type: "text/javascript"
    },
    {
      src:
        "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
      type: "text/javascript"
    },
    {
      src:"~/assets/js/jquery.dropotron.min.js",
      type: "text/javascript"
    },
    {
      src:"~/assets/js/jquery.scrolly.min.js",
      type: "text/javascript"
    },
    {
      src:"~/assets/js/jquery.scrollex.min.js",
      type: "text/javascript"
    },
    {
      src:"~/assets/js/browser.min.js",
      type: "text/javascript"
    },
    {
      src:"~/assets/js/breakpoints.min.js",
      type: "text/javascript"
    },
    {
      src:"~/assets/js/util.js",
      type: "text/javascript"
    },
    {
      src:"~/assets/js/main.js",
      type: "text/javascript"
    },


  ],
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [

  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
