import "react-i18next";
import { TranslationObj } from "./lang/resources";

declare module "react-i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: {
      translation: TranslationObj;
    };
  }
}
