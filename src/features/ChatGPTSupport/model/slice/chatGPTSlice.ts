// @ts-nocheck

import { createSlice } from '@reduxjs/toolkit';
import { ChatGPTShema } from '@/features/ChatGPTSupport/model/types/chatGPTShema';
import { sendMessage } from '@/features/ChatGPTSupport/model/services/chat/chat';

const initialState: ChatGPTShema = {
  isLoading: false,
  messages: [],
  error: false,
};

export const chatGPTSlice = createSlice({
  name: 'chatGPT',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setMessage: (state, action) => {
      const { author, message } = action.payload;
      state.messages = [...state.messages, { author, message }];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.error = false;
        state.isLoading = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.messages = [...state.messages, { author: 'Chatbot', message: action.payload.data }];
      })
      .addCase(sendMessage.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const { actions: chatGPTActions } = chatGPTSlice;
export const { reducer: chatGPTReducer } = chatGPTSlice;
export default chatGPTSlice.reducer;
