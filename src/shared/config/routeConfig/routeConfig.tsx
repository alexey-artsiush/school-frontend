import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { ChatPage } from '@/pages/ChatPage';

export enum AppRoutes {
  MAIN = 'main',
  CHAT = 'chat',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.CHAT]: '/chat',

};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.CHAT]: {
    path: RoutePath.chat,
    element: <ChatPage />,
  },
};
