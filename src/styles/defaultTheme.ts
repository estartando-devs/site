import 'styled-components';
import { ITypography } from './interfaces';

declare module 'styled-components' {
  export interface DefaultTheme {
    media: {
      mobile_portrait: string;
      mobile_default: string;
      mobile_landscape: string;
      tablet_portrait: string;
      tablet: string;
      tablet_landscape: string;
      laptops_landscape: string;
      desktop_hd: string;
      desktop_fullhd: string;
    };
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
    radius: {
      default: number;
    };
    typography: ITypography;
  }
}
