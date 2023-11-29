import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { AppRouter } from './providers/router';
import { SideBar } from '@/widgets/Sidebar/ui/Sidebar/Sidebar';
import theme from './styles/theme/theme';

const App = () => (
  <div className="app">
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideBar>
        <AppRouter />
      </SideBar>
    </ThemeProvider>

  </div>
);

export default App;
