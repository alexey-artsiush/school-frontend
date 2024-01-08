import { type PaletteOptions } from '@mui/material/styles';
import { TypeThemesList } from '@/app/types/material-ui';

export const createPalette = (theme: TypeThemesList): PaletteOptions => {
  const mainTheme = {
    primary: {
      main: '#7784EE',
      light: '#a8aff8',
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
      paper: '#FFFFFF',
      default: '#FFFFFF',
      purple: '#7784EE',
    },
    borders: {
      main: '#e0e0e0',
      disabled: '#fff',
    },
    text: {
      primary: '#34396c',
      secondary: '#FFFFFF',
      active: '#9CA3AF',
    },
    icons: {
      primary: '#34396c',
      secondary: '#FFFFFF',
      active: '#cbcbcb',
    },
    scrollbar: {
      main: '#fdfdfd',
      thumb: '#dfdfdf',
    },
  };

  const secondTheme = {
    background: {
      default: 'rgba(242,246,252,1)',
    },
    primary: {
      main: '#007DFE',
    },
  };

  switch (theme) {
    case 'main':
      return mainTheme;
    case 'second':
      return secondTheme;
    default:
      return mainTheme;
  }
};
