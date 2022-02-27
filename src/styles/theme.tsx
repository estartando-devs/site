import { DefaultTheme } from 'styled-components';
import { convertPxToRem } from '../utils/convertPxToRem';

const theme: DefaultTheme = {
  media: {
    mobile_portrait: '320px',
    mobile_default: '360px',
    mobile_landscape: '480px',
    tablet_portrait: '600px',
    tablet: '768px',
    tablet_landscape: '801px',
    laptops_landscape: '1024px',
    desktop_hd: '1280px',
    desktop_fullhd: '1600px',
  },
  shadows: [
    '-1px -1px 3px rgba(123, 122, 122, 0.3), 1px 1px 3px rgba(0, 0, 0, 0.8)',
    '-1px -1px 3px rgba(0, 0, 0, 0.3)',
    '-1px -1px 3px rgba(123, 122, 122, 0.3))',
    '0px 4px 31px rgba(255, 255, 255, 0.2)',
  ],
  palette: {
    primary: {
      main: '#81CAA8',
    },
    gray: {
      0: '#121212',
      1: '#1E1E1E',
      2: '#606062',
    },
    design: {
      black_transparent: 'rgba(30, 30, 30, 0.5)',
      purple: '#6C63FF',
      orange: '#FF6A2B',
      green: '#00BFA6',
      white: '#FFFFFF',
    },
    background: {
      default: '#1E1E1E',
    },
  },
  radius: {
    default: 4,
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Open Sans',
    h1: {
      fontFamily: 'Ubuntu',
      fontWeight: 500,
      fontSize: convertPxToRem(64),
      lineHeight: convertPxToRem(88),
      letterSpacing: '0.2px',
    },
    h2: {
      fontFamily: 'Ubuntu',
      fontWeight: 'bold',
      fontSize: convertPxToRem(36),
      lineHeight: convertPxToRem(41),
    },
    body1: {
      fontFamily: 'Open Sans',
      fontWeight: 600,
      fontSize: convertPxToRem(24),
      lineHeight: convertPxToRem(33),
    },
    body2: {
      fontFamily: 'Open Sans',
      fontSize: convertPxToRem(18),
      lineHeight: convertPxToRem(25),
    },
    body3: {
      fontFamily: 'Open Sans',
      fontWeight: 600,
      fontSize: convertPxToRem(16),
      lineHeight: convertPxToRem(25),
    },
  },
};

export default theme;
