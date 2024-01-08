import '@mui/material/styles/createPalette';
import { SimplePaletteColorOptions } from '@mui/material';

export type TypeThemesList = 'main' | 'second';

interface ExtendedBorderPaletteColorOptions extends SimplePaletteColorOptions {
  disabled: string;
}

declare module '@mui/material/styles/createPalette' {
  export interface PaletteOptions {
    borders?: ExtendedBorderPaletteColorOptions
  }

  export interface Palette {
    borders?: ExtendedBorderPaletteColorOptions
  }
}
