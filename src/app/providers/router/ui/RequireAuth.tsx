import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getRouteMain } from '@/shared/const/router';
import { getUserAuthData } from '@/entities/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { checkAuth } from '@/entities/User/model/services/auth/auth';
import { useAppDispatch } from '@/app/providers/StoreProvider';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const dispatch = useAppDispatch();
  const isAuth = !!useSelector(getUserAuthData);
  const location = useLocation();

  useEffect(() => {
    const checkAuthentication = async () => {
      if (!isAuth && localStorage.getItem(USER_LOCALSTORAGE_KEY)) {
        await dispatch(checkAuth());

        if (!isAuth) {
          return (
            <Navigate to={getRouteMain()} state={{ from: location }} replace />
          );
        }
      }
    };

    checkAuthentication();
  }, [dispatch, isAuth]);

  return children;
};
