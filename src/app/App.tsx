import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { SideBar } from '@/widgets/Sidebar/ui/Sidebar/Sidebar';
import { checkAuth } from '@/entities/User/model/services/auth/auth';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import { AppRouter } from '@/app/providers/router';
import i18n from '@/shared/config/i18n/i18n';
import { AppThemeProvider } from '@/app/styles/theme/AppThemeProvider';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem(USER_LOCALSTORAGE_KEY)) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  return (
    <div className="app">
      <I18nextProvider i18n={i18n}>
        <AppThemeProvider>
          <CssBaseline />
          <SideBar>
            <AppRouter />
          </SideBar>
        </AppThemeProvider>
      </I18nextProvider>
    </div>
  );
};

export default App;
