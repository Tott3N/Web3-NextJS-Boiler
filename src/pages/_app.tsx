import React from 'react';
import { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';
import Head from 'next/head';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';

const GlobalStyles = createGlobalStyle<{ theme: any }>`
  * {
    font-family: 'Lato';
  }

  html, body {
    min-height: 100%;
  }

  body {
    margin: 0 auto;
    max-width: 100%;
  }

  html {
    font-size: 16px;
    height: min-content;

    @media screen and (max-width: 448px) {
      font-size: 13px;
    }
  }
`;

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Web3 Next.JS Boilerplate</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Fira+Code:wght@400;500&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Web3ReactProvider
        getLibrary={(provider: any) => {
          return new Web3(provider);
        }}
      >
        <Component {...pageProps} />
        <GlobalStyles />
      </Web3ReactProvider>
    </>
  );
}
