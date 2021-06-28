import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
//* langs
import EN from "./translation/en.json";
import ES from "./translation/es.json";
import HI from "./translation/hi.json";

export const resources = {
  en: {
    translation: EN,
  },
  es: {
    translation: ES,
  },
  hi: {
    translation: HI,
  },
};

const supportedLngs = Object.keys(resources);

i18n
  //* detect user language
  .use(LanguageDetector)
  //* pass the i18n instance to react-i18next.
  .use(initReactI18next)
  //* init i18next
  //* for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["em", "u", "strong", "code"],
    },
    debug: process.env.NODE_ENV !== "production",
    fallbackLng: "en",
    load: "languageOnly",
    supportedLngs,
    nonExplicitSupportedLngs: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources,
  });

export default i18n;
