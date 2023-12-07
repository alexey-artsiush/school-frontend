import { createSlice } from '@reduxjs/toolkit';
import { SettingsSchema } from '@/features/Settings/model/types/settingsShema';

const initialState: SettingsSchema = {
  isLoading: false,
  mail: '',
  password: '',
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
  },
});

export const { actions: settingsActions } = settingsSlice;
export const { reducer: settingsReducer } = settingsSlice;
export default settingsSlice.reducer;
