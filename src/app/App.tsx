import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect } from 'react';
import { SideBar } from '@/widgets/Sidebar/ui/Sidebar/Sidebar';
import theme from './styles/theme/theme';
import { checkAuth } from '@/entities/User/model/services/auth/auth';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { useAppDispatch } from '@/app/providers/StoreProvider';
import { AppRouter } from '@/app/providers/router';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem(USER_LOCALSTORAGE_KEY)) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SideBar>
          <AppRouter />
        </SideBar>
      </ThemeProvider>

    </div>
  );
};

export default App;
