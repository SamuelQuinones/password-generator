import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Themes } from "components/ThemeSwitcher/Helper";

export type UserState = {
  generatedPW?: string;
  theme: Themes;
  settingsSaved: boolean;
};

const initialState: UserState = {
  generatedPW: undefined,
  theme: "pink",
  settingsSaved: false,
};

const slice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    reset(state) {
      state.generatedPW = undefined;
      state.theme = "pink";
      state.settingsSaved = false;
    },
    setTheme(state, action: PayloadAction<Themes>) {
      state.theme = action.payload;
    },
    setGeneratedPW(state, action: PayloadAction<string>) {
      state.generatedPW = action.payload;
    },
    setSettingsSaved(state, action: PayloadAction<boolean>) {
      state.settingsSaved = action.payload;
    },
    resetGeneratedPW(state) {
      state.generatedPW = undefined;
    },
  },
});

//* actions tell redux WHAT to do, reducers tell redux HOW to do it
export const { actions: userActions, reducer: userReducer } = slice;
