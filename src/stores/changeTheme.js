import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    dark: {
      foreground: "#fff",
      background: "#333"
    },
    light: {
      foreground: "#333",
      background: "#f9f5f5"
    },
    activeTheme: "dark"
  }
};

const lang = createSlice({
  name: "lang",
  initialState,
  reducers: {
      changeThemes:(state,action) => {
        state.value.activeTheme = action.payload
      }
  },
});
export const { changeThemes} = lang.actions;
export default lang.reducer;
