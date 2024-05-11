export default defineNuxtConfig({
  modules: ['@nuxtjs/mdc'],
  mdc: {
    highlight: {
      theme: 'nord',
      langs: ['js'],
      wrapperStyle: true
    }
  }
})