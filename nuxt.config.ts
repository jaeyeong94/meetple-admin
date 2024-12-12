// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  devServer: {
    port: parseInt(process.env.NUXT_PORT ? process.env.NUXT_PORT : '3000'),
  },
  css: ['~/assets/fonts/static/pretendard.css', "~/assets/css/global.scss"],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'initial-scale=1',
      title: '밋플 관리자 : 친구와 함께 직장인 미팅',
      meta: [
        { name: 'description', content: '밋플 관리자 : 친구와 함께 직장인 미팅' },
        { name: 'author', content: '밋플' },
        { name: 'theme-color', content: '#ffffff' }
      ]
    }
  },
  runtimeConfig: {
    NUXT_PORT: process.env.NUXT_PORT,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_PORT: process.env.DATABASE_PORT,
    DATABASE_USERNAME: process.env.DATABASE_USERNAME,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_SCHEMA: process.env.DATABASE_SCHEMA,
  }
})
