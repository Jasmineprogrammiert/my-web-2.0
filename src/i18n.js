import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(Backend)
  .init({ 
    debug: true,
    fallbackLng: "en",
    backend: {
      loadPath: "/i18n/{{ns}}/{{lng}}.json",
    },
    ns: ["about", "contact", "home"],
    
    interpolation: {
      escapeValue: false,
      formatSeparator: ",",
    },

    react: {
      useSuspense: true,
    }
  });

  export default i18n;