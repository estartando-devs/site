import { DefaultTheme } from 'styled-components';

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
      3: '#7b7a7a',
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
      fontSize: '4rem',
      lineHeight: '5.5rem',
      letterSpacing: '0.2px',
    },
    h2: {
      fontFamily: 'Ubuntu',
      fontWeight: 'bold',
      fontSize: '2.25rem',
      lineHeight: '2.6rem',
    },
    body1: {
      fontFamily: 'Open Sans',
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: '2rem',
    },
    body2: {
      fontFamily: 'Open Sans',
      fontSize: '1.125rem',
      lineHeight: '1.56rem',
    },
    body3: {
      fontFamily: 'Open Sans',
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: '1.56rem',
    },
  },
};

export default theme;
