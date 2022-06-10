import { createI18n } from 'vue-i18n'

const messages = {
    en: {
      message: {
        hello: 'hello world',
        about: 'about'
      }
    },
    ja: {
      message: {
        hello: 'こんにちは、世界',
        about: 'こんに'
      }
    }
  }

  const i18n = createI18n({
    locale: 'ja', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, //
  })
  
  export default i18n;