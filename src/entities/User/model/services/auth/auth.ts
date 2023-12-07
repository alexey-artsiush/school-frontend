import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import axios from 'axios';
import { User } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { api } from '@/shared/api/api';

interface LoginProps {
  email: string;
  password: string;
}

export interface RegisterData {
  success: boolean
  data: {
    accessToken: string
    refreshToken: string
    email: string
    id: number
  }
}

interface UserResponseData {
  success: boolean
  data: User
}

export const login = createAsyncThunk<
User,
LoginProps,
ThunkConfig<string>
>('auth/login', async (authData, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const response = await api.post<UserResponseData>('/auth/login', authData);

    if (!response.data) {
      throw new Error();
    }

    localStorage.setItem(
      USER_LOCALSTORAGE_KEY,
      JSON.stringify(response.data.data.accessToken),
    );

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});

export const register = createAsyncThunk<
User,
LoginProps,
ThunkConfig<string>
>('auth/register', async (authData, thunkApi) => {
  const { rejectWithValue } = thunkApi;

  try {
    const response = await api.post<RegisterData>('/auth/register', authData);

    if (!response.data.success) {
      throw new Error();
    }

    localStorage.setItem(
      USER_LOCALSTORAGE_KEY,
      JSON.stringify(response.data.data.accessToken),
    );

    return response.data;
  } catch (e) {
    console.log(e);
    return rejectWithValue('error');
  }
});

export const logout = createAsyncThunk<User, void, ThunkConfig<string>>(
  'auth/logout',
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const response = await api.post<UserResponseData>('/auth/logout');

      if (!response.data) {
        throw new Error();
      }

      localStorage.removeItem(
        USER_LOCALSTORAGE_KEY,
      );
      Cookies.remove('refreshToken');

      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);

export const checkAuth = createAsyncThunk<User, void, ThunkConfig<string>>(
  'auth/check_auth',
  async (_, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const response = await axios.get<RegisterData>(`${import.meta.env.VITE_API_URL}/api/auth/refresh`, { withCredentials: true });

      if (!response.data.success) {
        throw new Error();
      }

      localStorage.setItem(
        USER_LOCALSTORAGE_KEY,
        JSON.stringify(response.data.data.accessToken),
      );
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
