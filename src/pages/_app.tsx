import React from 'react';
import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/themes';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
