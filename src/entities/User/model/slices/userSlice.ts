import { createSlice } from '@reduxjs/toolkit';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { UserSchema } from '../types/user';
import {
  checkAuth, login, logout, register,
} from '@/entities/User/model/services/auth/auth';

const initialState: UserSchema = {
  user: null,
  inited: false,
  error: false,
  isLoading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
    // login
      .addCase(login.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })

    // logout
      .addCase(logout.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })

    // registration
      .addCase(register.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data.user;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })

    // check auth
      .addCase(checkAuth.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.data.user;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { actions: userActions } = userSlice;

export const { reducer: userReducer } = userSlice;
export default userSlice.reducer;
