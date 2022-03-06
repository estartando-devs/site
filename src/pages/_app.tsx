import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Estartando Devs</title>
        <meta
          name="google-site-verification"
          content="8kDtWUmUQEh7QXoj_shRaxcgYAVpHs_YQ7TeniN0kmI"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#81CAA8" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#81CAA8" />
        <meta name="msapplication-navbutton-color" content="#81CAA8" />
        <meta
          property="og:image"
          content="https://media-exp1.licdn.com/dms/image/C4D0BAQEp4FVZvqZz2Q/company-logo_200_200/0?e=2159024400&v=beta&t=7u2-5asQNxjGYAgF18kGeHiIc-WXNIqwNscWXhuRzoY"
        />
        <meta
          name="description"
          content="Acreditamos no poder de transformação social através da tecnologia"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
