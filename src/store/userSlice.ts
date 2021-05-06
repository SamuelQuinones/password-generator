import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Themes } from "components/ThemeSwitcher/Helper";

export type UserState = {
  generatedPW?: string;
  theme: Themes;
};

const initialState: UserState = {
  generatedPW: undefined,
  theme: "pink",
};

const slice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    reset(state) {
      state.generatedPW = undefined;
      state.theme = "pink";
    },
    setTheme(state, action: PayloadAction<Themes>) {
      state.theme = action.payload;
    },
    setGeneratedPW(state, action: PayloadAction<string>) {
      state.generatedPW = action.payload;
    },
    resetGeneratedPW(state) {
      state.generatedPW = undefined;
    },
  },
});

//* actions tell redux WHAT to do, reducers tell redux HOW to do it
export const { actions: userActions, reducer: userReducer } = slice;
