import { createSlice } from '@reduxjs/toolkit';
import { CourseSchema } from '../types/course';
import { getCourse, getCourses } from '../services/courseService';

const initialState: CourseSchema = {
  courses: [],
  error: undefined,
  isLoading: false,
  isError: false,
  currentCourse: undefined,
};

export const courseSlice = createSlice({
  name: 'course',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getCourses.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.isError = false;
      })
      .addCase(getCourses.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.isError = false;
        state.courses = action.payload?.data;
      })
      .addCase(getCourses.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.isError = true;
      })
      .addCase(getCourse.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.isError = false;
      })
      .addCase(getCourse.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.isError = false;
        state.currentCourse = action.payload?.data;
      })
      .addCase(getCourse.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.isError = true;
      });
  },
});

export const { actions: courseActions, reducer: courseReducer } = courseSlice;

export default courseSlice.reducer;
