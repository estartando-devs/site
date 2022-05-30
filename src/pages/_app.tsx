import { ChakraProvider } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import { ThemeProvider } from 'styled-components';
import SEO from '../../next-seo.config';
import { GlobalStyles } from '../styles/global';
import theme from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name="google-site-verification"
          content="8kDtWUmUQEh7QXoj_shRaxcgYAVpHs_YQ7TeniN0kmI"
        />
        <meta name="theme-color" content="#81CAA8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#81CAA8" />
        <meta name="msapplication-navbutton-color" content="#81CAA8" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <GlobalStyles />
      <DefaultSeo {...SEO} />
      <NextNProgress
        color="#81CAA8"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default App;
