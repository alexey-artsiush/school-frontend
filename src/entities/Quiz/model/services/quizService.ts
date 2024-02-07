import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { api } from '@/shared/api/api';
import { QuizGetResponse } from '@/entities/Quiz/model/types/quiz';

interface ISearchParams {
  id?: string
}
export const getQuiz = createAsyncThunk<
QuizGetResponse | undefined, ISearchParams
>('quiz/getQuiz', async (searchParams, thunkApi) => {
  try {
    const quiz = await api
      .get<ISearchParams, AxiosResponse<QuizGetResponse>>('/quiz/get-quiz', { params: searchParams })
      .then((res) => res.data);

    thunkApi.fulfillWithValue(quiz);

    return quiz;
  } catch (err: unknown) {
    return thunkApi.rejectWithValue('err');
  }
});
