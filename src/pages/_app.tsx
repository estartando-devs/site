import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { GlobalStyles } from "../styles/global";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Estartando Devs</title>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
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
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
          <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Component {...pageProps} />
          </ThemeProvider>
    </>
  );
}

export default App;
