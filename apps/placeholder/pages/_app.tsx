import './styles.css';
import 'reflect-metadata';

import { LayoutFeature } from '@placeholder/shared/feature/layout';
import { buildProvidersTree } from '@placeholder/shared/util/react';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import { bindDependencies } from '../lib/bind-dependencies';
import { NAV_ITEMS } from '../lib/nav-items';
import { store } from '../lib/store';

function CustomApp({ Component, pageProps }: AppProps) {
  bindDependencies();
  return (
    <>
      <Head>
        <title>Welcome to placeholder!</title>
      </Head>
      <Providers>
        <LayoutFeature navItems={NAV_ITEMS}>
          <Component {...pageProps} />
        </LayoutFeature>
      </Providers>
    </>
  );
}

const Providers = buildProvidersTree([
  [Provider, { store }],
  [
    ThemeProvider,
    {
      attribute: 'class',
      defaultTheme: 'system',
      enableSystem: true,
      disableTransitionOnChange: true,
    },
  ],
]);

export default CustomApp;
