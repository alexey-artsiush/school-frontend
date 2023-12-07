import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';
import { AppRoutesProps } from '@/shared/types/router';
import { routeConfig } from '@/app/providers/router/config/routeConfig/routeConfig';
import { Spinner } from '@/shared/ui/Spiner';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<Spinner />}>{route.element}</Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          route.authOnly ? (
            <RequireAuth>{element}</RequireAuth>
          ) : (
            element
          )
      }
      />
    );
  }, []);

  // @ts-ignore
  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
