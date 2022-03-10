import React, { useEffect } from 'react';
import Head from 'next/head';
import * as gtag from '../lib/gtag';
import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import NextNProgress from 'nextjs-progressbar';
import { useRouter } from 'next/router';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Estartando Devs</title>
        <meta
          name="google-site-verification"
          content="8kDtWUmUQEh7QXoj_shRaxcgYAVpHs_YQ7TeniN0kmI"
        />
        <meta name="theme-color" content="#81CAA8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#81CAA8" />
        <meta name="msapplication-navbutton-color" content="#81CAA8" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Acreditamos no poder de transformação social através da tecnologia."
        />
        <meta
          property="og:image"
          content="https://media-exp1.licdn.com/dms/image/C4D0BAQEp4FVZvqZz2Q/company-logo_200_200/0?e=2159024400&v=beta&t=7u2-5asQNxjGYAgF18kGeHiIc-WXNIqwNscWXhuRzoY"
        />
      </Head>
      <GlobalStyles />
      <DefaultSeo {...SEO} />
      <NextNProgress
        color="#81CAA8"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
