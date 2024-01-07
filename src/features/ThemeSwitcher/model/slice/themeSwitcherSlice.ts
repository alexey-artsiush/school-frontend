import { createSlice } from '@reduxjs/toolkit';
import { ThemeSchema } from '../types/themeScheme';

const initialState: ThemeSchema = {
  theme: 'main',
};

export const themeSwitcherSlice = createSlice({
  name: 'themeSwitcherSlice',
  initialState,
  reducers: {
    setMainTheme: (state) => {
      state.theme = 'main';
    },
    setSecondTheme: (state) => {
      state.theme = 'second';
    },
  },
});

export const { actions: themeSwitcherActions } = themeSwitcherSlice;
export const { reducer: themeSwitcherReducer } = themeSwitcherSlice;
export default themeSwitcherSlice.reducer;
