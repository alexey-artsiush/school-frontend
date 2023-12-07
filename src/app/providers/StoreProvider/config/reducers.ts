import { combineReducers } from '@reduxjs/toolkit';

// reducers
import settingsSlice from '@/features/Settings/model/slice/settingsSlice';
import userSlice from '@/entities/User/model/slices/userSlice';

export const rootReducer = combineReducers({
  settingsSlice,
  userSlice,
});
