import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { RegisterData } from '@/entities/User/model/services/auth/auth';

export const api = axios.create({
  withCredentials: true,
  baseURL: `${import.meta.env.VITE_API_URL}/api`,
});

api.interceptors.request.use((config) => {
  if (config.headers) {
    const token = localStorage.getItem(USER_LOCALSTORAGE_KEY) || '';
    config.headers.Authorization = token ? `Bearer ${token}` : '';
  }
  return config;
});

api.interceptors.response.use((config) => config, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && error.config && !error.config._isRetry) {
    originalRequest._isRetry = true;
    try {
      const response = await axios.get<RegisterData>(`${import.meta.env.VITE_API_URL}/api/auth/refresh`, { withCredentials: true });
      localStorage.setItem('token', response.data.data.accessToken);
      return await api.request(originalRequest);
    } catch (e) {
      console.log('NO AUTH');
    }
  }
  throw error;
});
