import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dark: false,
    language: 'tr'
};

const lang = createSlice({
  name: "lang",
  initialState,
  reducers: {
      setDarkMode: state => {
        state.dark = !state.dark
      },
      setLanguage: (state,action) => {
         state.language = action.payload
      }
  },
});
export const { setDarkMode,setLanguage} = lang.actions;
export default lang.reducer;
