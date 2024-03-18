import './styles.css';
import 'reflect-metadata';

import { LayoutFeature } from '@placeholder/feature/layout';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import { bindDependencies } from '../lib/bind-dependencies';
import { store } from '../lib/store';

function CustomApp({ Component, pageProps }: AppProps) {
  bindDependencies();
  return (
    <>
      <Head>
        <title>Welcome to placeholder!</title>
      </Head>
      <Providers>
        <LayoutFeature>
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

// move this somewhere more shareable

type ProviderType<T> = React.FC<T>;

function buildProvidersTree(
  providerWithProps: Array<[ProviderType<any>, any]>
) {
  const initialComponent: React.FC<PropsWithChildren<unknown>> = ({
    children,
  }) => <>{children}</>;

  return providerWithProps.reduce(
    (
      AccumulatedComponents: React.FC<PropsWithChildren<unknown>>,
      [Provider, props = {}]
    ) => {
      // eslint-disable-next-line react/display-name
      return ({ children }) => {
        return (
          <AccumulatedComponents>
            <Provider {...props}>{children}</Provider>
          </AccumulatedComponents>
        );
      };
    },
    initialComponent
  );
}

export default CustomApp;
