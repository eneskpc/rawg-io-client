import { createSlice } from "@reduxjs/toolkit";
import RK from "store/reducer-keys";

export interface IOptionsState {
  darkMode: boolean;
}

const initialState: IOptionsState = {
  darkMode: false,
};

export const OptionsSlice = createSlice({
  name: RK.Option._,
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export default OptionsSlice.reducer;

export const { toggleDarkMode } = OptionsSlice.actions;
