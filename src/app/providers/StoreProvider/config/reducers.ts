import { combineReducers } from '@reduxjs/toolkit';

// reducers
import settingsSlice from '@/features/Settings/model/slice/settingsSlice';
import userSlice from '@/entities/User/model/slices/userSlice';
import chatGPTSlice from '@/features/ChatGPTSupport/model/slice/chatGPTSlice';

export const rootReducer = combineReducers({
  settingsSlice,
  userSlice,
  chatGPTSlice,
});
