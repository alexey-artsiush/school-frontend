import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getRouteMain } from '@/shared/const/router';
import { getUserAuthData } from '@/entities/User';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const isAuth = !!useSelector(getUserAuthData);
  const location = useLocation();

  if (!isAuth) {
    return (
      <Navigate to={getRouteMain()} state={{ from: location }} replace />
    );
  }

  return children;
};
