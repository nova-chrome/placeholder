import './styles.css';

import { AppLayout, LayoutProvider } from '@placeholder/feature/layout';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { PropsWithChildren } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to placeholder!</title>
      </Head>
      <Providers>
        <LayoutProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </LayoutProvider>
      </Providers>
    </>
  );
}

const Providers = buildProvidersTree([
  [
    ThemeProvider,
    {
      attribute: 'class',
      defaultTheme: 'system',
      enableSystem: true,
      disableTransitionOnChange: true,
    },
  ],
  [LayoutProvider, {}],
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
