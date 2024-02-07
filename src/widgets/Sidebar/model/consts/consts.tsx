import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import { Chat } from '@mui/icons-material';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { getRouteChat, getRouteCourses, getRouteMain } from '@/shared/const/router';

export const getSidebarData = () => {
  const { t } = useTranslation();

  return [
    {
      icon: <MenuIcon />,
      text: t('Main'),
      route: getRouteMain(),
    },
    {
      icon: <Chat />,
      text: t('Chat'),
      route: getRouteChat(),
    },
    {
      icon: <SchoolIcon />,
      text: t('Courses'),
      route: getRouteCourses(),
    },
  ];
};
