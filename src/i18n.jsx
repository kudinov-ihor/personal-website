import i18n from "i18next";
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from "react-i18next";


i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    backend: {
        //  translation file path
        loadPath: '/assets/i18n/{{ns}}/{{lng}}.json',
    },
    fallbackLng: "en",
    // disable on production
    debug: true,
    // can have multiple namespaces, in case you want to divide huge translition into smaller peaces and load them demand
    ns: ["common", "home", "navigation", "resume", "projects", "contacts"],
    interpolation: {
        escapeValue: false,
        formatSeparator: ","
    },
    react: {
        wait: true
    }
});

export default i18n;