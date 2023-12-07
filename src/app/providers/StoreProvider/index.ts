import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/providers/StoreProvider/config/store';

import type {
  StateSchema,
  ThunkConfig,
} from './config/StateSchema';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type {
  StateSchema,
  AppDispatch,
  ThunkConfig,
};
