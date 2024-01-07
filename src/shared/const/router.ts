export enum AppRoutes {
  MAIN = 'overview',
  CHAT = 'chat',
  COURSES = 'courses',
  COURSE_DETAIL = 'course',
  // CALENDAR = 'calendar',
  // PROFILE = 'profile',
  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteCalendar = () => '/calendar';
export const getRouteChat = () => '/chat';
export const getRouteCourses = () => '/courses';
export const getCourseDetailPage = () => '/courses/:id';
export const getRouteProfile = () => '/profile/:id';

export const getRouteForbidden = () => '/forbidden';
