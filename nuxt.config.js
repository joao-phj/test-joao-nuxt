export default defineNuxtConfig({
  ssr: false,
  target: 'server',
  css: ['@/assets/css/roboto.css'],

  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'y7fmtIRtjWdV3I8rj4ZUVQtt',
        apiOptions: {
          region: '' // Set 'US" if your space is created in US region (EU default)
        }
      },
    ],
    '@nuxtjs/tailwindcss',
  ],

  compatibilityDate: '2024-07-08'
})