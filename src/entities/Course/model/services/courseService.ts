import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { CourseGetResponse, CoursesGetResponse } from '@/entities/Course/model/types/course';
import { api } from '@/shared/api/api';

interface ISearchParams {
  id?: number | string | undefined
}

export const getCourses = createAsyncThunk<
CoursesGetResponse | undefined, ISearchParams
>('courses/getCourses', async (searchParams, thunkApi) => {
  try {
    const courses = await api
      .get<ISearchParams, AxiosResponse<CoursesGetResponse>>('/course/get-courses', { params: searchParams })
      .then((res) => res.data as CoursesGetResponse);

    return courses;
  } catch (err: unknown) {
    return thunkApi.rejectWithValue('err');
  }
});

export const getCourse = createAsyncThunk<
CourseGetResponse | undefined, ISearchParams
>('courses/getCourse', async (searchParams, thunkApi) => {
  try {
    const courses = await api
      .get<ISearchParams, AxiosResponse<CourseGetResponse>>('/course/get-courses', { params: searchParams })
      .then((res) => res.data);

    thunkApi.fulfillWithValue(courses);

    return courses;
  } catch (err: unknown) {
    return thunkApi.rejectWithValue('err');
  }
});
