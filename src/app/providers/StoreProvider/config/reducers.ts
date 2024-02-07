import { combineReducers } from '@reduxjs/toolkit';

// reducers
import settingsSlice from '@/features/Settings/model/slice/settingsSlice';
import userSlice from '@/entities/User/model/slices/userSlice';
import chatGPTSlice from '@/features/ChatGPTSupport/model/slice/chatGPTSlice';
import themeSwitcherReducer from '@/features/ThemeSwitcher/model/slice/themeSwitcherSlice';
import course from '@/entities/Course/model/slice/courseSlice';
import { quizReducer } from '@/entities/Quiz';

export const rootReducer = combineReducers({
  settingsSlice,
  userSlice,
  chatGPTSlice,
  themeSwitcherReducer,
  course,
  quizReducer,
});
