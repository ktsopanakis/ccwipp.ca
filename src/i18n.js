import { createI18n } from 'vue-i18n'

const messages = {
    en: {
      message: {
        hello: 'hello world',
        about: 'about'
      },
      image: {
        logo: './the-pension-plan_logo.png'
      }
    },
    ja: {
      message: {
        hello: 'こんにちは、世界',
        about: 'こんに'
      },
      image: {
        logo: './the-pension-plan_logo_ja.png'
      }
    }
  }

  const i18n = createI18n({
    locale: 'ja', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, //
  })
  
  export default i18n;