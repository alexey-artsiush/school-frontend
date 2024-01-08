import { Palette, ThemeOptions } from '@mui/material';

type Func = (palette: Palette) => NonNullable<ThemeOptions['components']>;

export const createComponents: Func = (palette) => ({
  MuiButton: {
    defaultProps: {
      style: {
        boxShadow: 'none',
        borderRadius: '8px',
      },
    },
  },
  MuiLink: {
    styleOverrides: {
      root: {
        fontFamily: 'Jost',
        fontSize: '12px',
      },
    },
  },

  MuiInputLabel: {
    styleOverrides: {
      root: {
        color: palette.text.secondary,
      },
    },
  },

  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        color: palette.text.primary,
      },
    },
  },
});
