import {
  AppRoutes, getCourseDetailPage, getQuizPage, getRouteChat, getRouteCourses, getRouteMain,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
import { MainPage } from '@/pages/MainPage';
import { ChatPage } from '@/pages/ChatPage';
import { CourseDetailPage, CoursesPage, QuizPage } from '@/pages/CoursesPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
  },
  [AppRoutes.CHAT]: {
    path: getRouteChat(),
    element: <ChatPage />,
    authOnly: true,
  },
  [AppRoutes.COURSES]: {
    path: getRouteCourses(),
    element: <CoursesPage />,
    authOnly: true,
  },
  [AppRoutes.COURSE_DETAIL]: {
    path: getCourseDetailPage(),
    element: <CourseDetailPage />,
    authOnly: true,
  },
  [AppRoutes.QUIZ]: {
    path: getQuizPage(),
    element: <QuizPage />,
    authOnly: true,
  },

  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
