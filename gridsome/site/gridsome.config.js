// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'CCWIPP',
  siteDescription: 'Commercial site',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      /**
      * These are the default options.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
      */
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'de-de',
          'en-gb'
        ],
        pathAliases: { // path segment alias for each locales
          'de-de': 'de',
          'en-gb': 'en',
        },
        fallbackLocale: 'en-gb', // fallback language
        defaultLocale: 'en-gb', // default language
        enablePathRewrite: true, // rewrite path with locale prefix, default: true
        rewriteDefaultLanguage: true, // rewrite default locale, default: true
        messages: {
          'de-de': require('./src/locales/de-de.json'),
          'en-gb': require('./src/locales/en-gb.json')
        }
      }
    }
  ],
}
