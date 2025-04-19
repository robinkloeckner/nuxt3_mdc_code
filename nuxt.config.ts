export default defineNuxtConfig({
  compatibilityDate: '2025-04-19',
  modules: ['@nuxtjs/mdc'],
  mdc: {
    highlight: {
      theme: 'nord',
      langs: ['js'],
      wrapperStyle: true
    }
  }
})