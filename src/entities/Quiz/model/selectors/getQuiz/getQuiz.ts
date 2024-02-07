import { StateSchema } from '@/app/providers/StoreProvider';

export const getQuizState = (state: StateSchema) => state.quizReducer;
