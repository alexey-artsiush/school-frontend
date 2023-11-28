import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '../../../../shared/config/routeConfig/routeConfig';
import { Spinner } from '../../../../shared/ui/Spiner';

export const AppRouter = () => (
  <Suspense fallback={<Spinner />}>
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={element}
        />
      ))}
    </Routes>
  </Suspense>
);
