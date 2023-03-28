import { createSlice } from "@reduxjs/toolkit";

interface IThemeState {
  theme: boolean;
}

const THEME_INITIAL_STATE: IThemeState = {
  theme: false,
};

const themesSlice = createSlice({
  name: "themes",
  initialState: THEME_INITIAL_STATE,
  reducers: {
    setThemes(state) {
      state.theme = !state.theme;
      if (state.theme) {
        document.documentElement.style.setProperty("--bodyColor", "#2e2e2e");
        document.documentElement.style.setProperty("--textColor", "#fff");
      } else {
        document.documentElement.style.setProperty("--bodyColor", "#fff");
        document.documentElement.style.setProperty("--textColor", "#000");
      }
    },
  },
});

export const themesActions = themesSlice.actions;
export default themesSlice;
