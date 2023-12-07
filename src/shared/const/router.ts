export enum AppRoutes {
  MAIN = 'overview',
  CHAT = 'chat',
  // CALENDAR = 'calendar',
  // PROFILE = 'profile',
  // NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteCalendar = () => '/calendar';
export const getRouteChat = () => '/chat';
export const getRouteProfile = (id: string) => `/profile/${id}`;

export const getRouteForbidden = () => '/forbidden';
