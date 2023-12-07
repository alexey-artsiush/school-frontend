import { UserRole } from '../consts/userConsts';

export interface User {
  id: number;
  email: string;
  avatar?: string;
  roles?: UserRole[];
  accessToken?: string
  refreshToken?: string
}

export interface UserSchema {
  user: User | null
  error: boolean
  isLoading: boolean

  inited: boolean
}
