import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { SideBar } from '@/widgets/Sidebar/ui/Sidebar/Sidebar';
import theme from './styles/theme/theme';
import { checkAuth } from '@/entities/User/model/services/auth/auth';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import { AppRouter } from '@/app/providers/router';
import i18n from '@/shared/config/i18n/i18n';

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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <SideBar>
            <AppRouter />
          </SideBar>
        </ThemeProvider>
      </I18nextProvider>
    </div>
  );
};

export default App;
