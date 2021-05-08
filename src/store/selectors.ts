import type { RootState } from "store";

//* userSettings
export const getSettings = (state: RootState) => state.settings;
export const getGeneratedPW = (state: RootState) => state.settings.generatedPW;
export const getTheme = (state: RootState) => state.settings.theme;
export const getSettingsSaved = (state: RootState) =>
  state.settings.settingsSaved;
