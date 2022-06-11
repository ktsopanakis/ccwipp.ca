import { defineNuxtConfig } from 'nuxt'
//import { I18nOptions } from 'vue-i18n'

// export interface IntlifyModuleOptions {
//     /**
//      * Options specified for `createI18n` in vue-i18n.
//      *
//      * If you want to specify not only objects but also functions such as messages functions and modifiers for the option, specify the path where the option is defined.
//      * The path should be relative to the Nuxt project.
//      */
//     vueI18n?: I18nOptions | string
//     /**
//      * Define the directory where your locale messages files will be placed.
//      *
//      * If you don't specify this option, default value is `locales`
//      */
//     localeDir?: string
//   }

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    //css: ["~/assets/css/tailwind.css"],
    // build: {
    //     postcss: {
    //     postcssOptions: {
    //         plugins: {
    //         tailwindcss: {},
    //         autoprefixer: {},
    //         },
    //     },
    //     },
    //},

    //buildModules: ['@intlify/nuxt3'],
    // intlify: {
    //     vueI18n: {
    //       // You can setting same `createI18n` options here !
    //       locale: 'en',
    //       messages: {
    //         en: {
    //           hello: 'Hello'
    //         },
    //         ja: {
    //           hello: 'こんにちは'
    //         }
    //       }
    //     }
    //   }
})
