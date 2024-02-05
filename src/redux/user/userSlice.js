import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "EN",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    languageChangeToTW: (state) => {
      state.language = "TW";
    },
    languageChangeToEN: (state) => {
      state.language = "EN";
    },
  },
});

export const { languageChangeToTW, languageChangeToEN } = userSlice.actions;

export default userSlice.reducer;
