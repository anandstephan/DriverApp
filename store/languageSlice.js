// src/store/languageSlice.js
import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: {
    language: "en", // default language
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    toggleLanguage: (state) => {
      state.language = state.language === "en" ? "hi" : "en";
    },
  },
});

export const { setLanguage, toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
    