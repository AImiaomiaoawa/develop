// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({ 
  modules: ['@nuxt/ui'],
  // devtools: { enabled: true }
  app:{
    head:{
      title: 'Nuxt miaomiao',
      meta: [
        { name: 'description', content: 'Everything about Nuxt 3' }
        
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
        
      ]
      
    }
  }
})
