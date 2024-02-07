import { createSlice } from '@reduxjs/toolkit';
import { QuizSchema } from '@/entities/Quiz';
import { getQuiz } from '@/entities/Quiz/model/services/quizService';

const initialState: QuizSchema = {
  quiz: null,
  error: undefined,
  isLoading: false,
  isError: false,
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getQuiz.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
        state.isError = false;
      })
      .addCase(getQuiz.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = undefined;
        state.isError = false;
        state.quiz = action.payload?.data;
      })
      .addCase(getQuiz.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
        state.isError = true;
      });
  },
});

export const { actions: quizActions, reducer: quizReducer } = quizSlice;

export default quizSlice.reducer;
