import "react-i18next";
import { TranslationObj } from "./lang/resources";

declare module "react-i18next" {
  export interface Resources {
    translation: TranslationObj;
  }
}
