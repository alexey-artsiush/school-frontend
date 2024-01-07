// @ts-nocheck

import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { api } from '@/shared/api/api';
import { RegisterData } from '@/entities/User/model/services/auth/auth';
import { chatGPTSlice } from '@/features/ChatGPTSupport/model/slice/chatGPTSlice';

export const sendMessage = createAsyncThunk<
User,
string
>('chat/send_message', async (message, thunkApi) => {
  const { rejectWithValue, dispatch } = thunkApi;

  dispatch(chatGPTSlice.actions.setMessage({ author: 'You', message }));

  try {
    const response = await api.post<RegisterData>('/chat-gpt/send-message', { message });

    if (!response.data.success) {
      return dispatch(chatGPTSlice.actions.setMessage({ author: 'Chatbot', message: 'Something went wrong. Please try again' }));
    }

    return response.data;
  } catch (e) {
    dispatch(chatGPTSlice.actions.setMessage({ author: 'Chatbot', message: 'Something went wrong. Please try again' }));
    return rejectWithValue('error');
  }
});
