export enum AppRoutes {
  MAIN = 'overview',
  CALENDAR = 'calendar',
  CHAT = 'chat',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteCalendar = () => '/calendar';
export const getRouteChat = () => '/chat';
export const getRouteProfile = (id: string) => `/profile/${id}`;

export const getRouteForbidden = () => '/forbidden';
