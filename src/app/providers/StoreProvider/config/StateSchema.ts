import { AxiosInstance } from 'axios';
import { UserSchema } from '@/entities/User';
import { SettingsSchema } from '@/features/Settings/model/types/settingsShema';
import { ChatGPTShema } from '@/features/ChatGPTSupport/model/types/chatGPTShema';

export interface StateSchema {
  userSlice: UserSchema;
  settingsSlice: SettingsSchema
  chatGPTSlice: ChatGPTShema
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
