//* imports
import en from "./translation/en";
import es from "./translation/es";
import hi from "./translation/hi";
// new imports go above this line

//* Code
const resources = {
  en,
  es,
  hi,
  // new langs go above this line
};

export const supportedLngs = Object.keys(resources);

export const langPickerConfig = supportedLngs.map((lang) => {
  return {
    key: lang,
    display: resources[lang as keyof typeof resources].main.lang_desc,
  };
});

export type TranslationObj = typeof en;

export default resources;
