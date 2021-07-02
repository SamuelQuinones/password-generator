//* imports
import EN from "./translation/en.json";
import ES from "./translation/es.json";
import HI from "./translation/hi.json";
// new imports go above this line

//* Code
const resources = {
  en: {
    translation: EN,
  },
  es: {
    translation: ES,
  },
  hi: {
    translation: HI,
  },
  // new langs go above this line
};

export const supportedLngs = Object.keys(resources);

export const langPickerConfig = supportedLngs.map((lang) => {
  return {
    key: lang,
    display: resources[lang as keyof typeof resources].translation.lang_desc,
  };
});

export type TranslationObj = typeof EN;

export default resources;
