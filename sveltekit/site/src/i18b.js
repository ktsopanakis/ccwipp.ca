// src/i18n.js
import { register, init, getLocaleFromNavigator,dictionary,
    locale,
    _ } from 'svelte-i18n';

//register('en', () => import('./en.json'));
//register('pt', () => import('./pt.json'));

init({
     fallbackLocale: 'en',
     initialLocale: 'en',
   });

  function setupI18n({
    withLocale: _locale
  } = {
    withLocale: 'en'
  }) {
    dictionary.set({
      en: {
        "page_title": "Page title",
        "home": {
          "topic": "Svelte Localization Tutorial",
          "subtopic": "Internationalization and Localization"
        },
        "header": {
          "home": "Home",
          "contact": "Contact Us",
          "about": "About"
        }
      },
      ar: {
        "page_title": "AR Page title",
        "home": {
          "topic": "البرنامج التعليمي Svelte Localization",
          "subtopic": "مجموعة أفلام مختارة من الثمنينات"
        },
        "header": {
          "home": "الصفحة الرئيسية",
          "contact": "اتصل",
          "about": "حول"
        }
      },
      fr: {
        "page_title": "FR Page title",
        "home": {
          "topic": "Tutoriel de localisation Svelte ",
          "subtopic": "Internationalization and Localization"
        },
        "header": {
          "home": "Accueil",
          "contact": "Nous contacter",
          "about": "À propos"
        }
      },
      pt: {
        "page_title": "PT Page title",
        "home": {
          "topic": "Tutoriel de localisation Svelte ",
          "subtopic": "Internationalization and Localization"
        },
        "header": {
          "home": "Accueil",
          "contact": "Nous contacter",
          "about": "À propos"
        }
      },
    });
    locale.set(_locale);
  }
  export {
    _,
    setupI18n
  };