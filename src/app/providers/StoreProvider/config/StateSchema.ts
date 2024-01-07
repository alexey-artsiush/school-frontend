import { AxiosInstance } from 'axios';
import { UserSchema } from '@/entities/User';
import { SettingsSchema } from '@/features/Settings/model/types/settingsShema';
import { ChatGPTShema } from '@/features/ChatGPTSupport/model/types/chatGPTShema';
import { CourseSchema } from '@/entities/Course/model/types/course';

export interface StateSchema {
  userSlice: UserSchema;
  settingsSlice: SettingsSchema
  chatGPTSlice: ChatGPTShema
  course: CourseSchema
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
