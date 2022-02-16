import 'styled-components';
import { ITypography } from './interfaces';

declare module 'styled-components' {
  export interface DefaultTheme {
    shadows: string[];
    palette: {
      primary: {
        main: string;
      };
      gray: {
        0: string;
        1: string;
        2: string;
      };
      design: {
        purple: string;
        orange: string;
        green: string;
        white: string;
      };
      background: {
        default: string;
      };
    };
    typography: ITypography;
  }
}
