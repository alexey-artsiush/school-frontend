import { useEffect, ReactNode, useState } from 'react';
import { Palette, Theme } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createTypography } from './typography';
import { createComponents } from './components';
import { createPalette } from './palette';
import { useAppSelector } from '@/app/providers/StoreProvider';

export type ThemeProviderProps = {
  children: ReactNode;
};

const appCreateTheme = (paletteTheme: any): Theme => {
  const palette = createPalette(paletteTheme);
  return createTheme(
    {
      palette,
      components: createComponents(palette as Palette),
      typography: createTypography(palette as Palette),
    },
  );
};

export const AppThemeProvider = (props: ThemeProviderProps): JSX.Element => {
  const { children } = props;
  const [theme, setTheme] = useState(() => appCreateTheme('main'));
  const { theme: themePreset } = useAppSelector(
    (state) => state.themeSwitcherReducer,
  );

  useEffect(() => {
    setTheme(appCreateTheme(themePreset));
  }, [themePreset]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
