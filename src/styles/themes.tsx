import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  shadows: [
    '-1px -1px 3px rgba(123, 122, 122, 0.3), 1px 1px 3px rgba(0, 0, 0, 0.8)',
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
      purple: '#6C63FF',
      orange: '#FF6A2B',
      green: '#00BFA6',
      white: '#FFFFFF',
    },
    background: {
      default: '#1E1E1E',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: 'Ubuntu',
      fontWeight: 300,
      fontSize: '2rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontFamily: 'Ubuntu',
      fontWeight: 300,
      fontSize: '1.8rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
    body1: {
      fontFamily: 'Open Sans',
      fontWeight: 300,
      fontSize: '1rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
  },
};

export default theme;
