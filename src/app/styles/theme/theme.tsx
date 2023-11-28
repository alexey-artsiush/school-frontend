import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    h6: {
      fontSize: '1.125rem',
    },
  },

  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.secondary.main,
        }),
      },
    },

  },

  palette: {
    primary: {
      main: '#7784EE',
      light: '#D2D7FF',
    },
    secondary: {
      main: '#3d2f52',
      light: '#6e5598',
    },
    success: {
      main: '#30A936',
      light: '#B1ECC0',
    },
    warning: {
      main: '#F85640',
      light: '#F37C1A',
    },
    error: {
      main: '#ED3B3B',
      dark: '#D32F2F',
    },
    background: {
      paper: '#F4F7FE',
    },
  },
});

export default theme;
