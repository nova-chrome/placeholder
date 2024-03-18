import './styles.css';

import { AppLayout, LayoutProvider } from '@placeholder/feature/layout';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to placeholder!</title>
      </Head>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <LayoutProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </LayoutProvider>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
