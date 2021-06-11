import "react-i18next";
import { resources } from "./lang/i18n";

declare module "react-i18next" {
  export interface Resources {
    translation: typeof resources.en.translation;
  }
}
