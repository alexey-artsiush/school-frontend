import { StateSchema } from '@/app/providers/StoreProvider';

export const getChatInfo = (state: StateSchema) => state.chatGPTSlice.messages;
export const getChatLoadingState = (state: StateSchema) => state.chatGPTSlice.isLoading;
export const getChatErrorState = (state: StateSchema) => state.chatGPTSlice.error;
