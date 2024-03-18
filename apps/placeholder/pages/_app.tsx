import './styles.css';

import { AppProps } from 'next/app';
import Head from 'next/head';

import { AppLayout } from '../components/layout';
import { ThemeProvider } from '../components/providers';
import { SidebarProvider } from '../components/sidebar/sidebar.context';

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
        <SidebarProvider>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </SidebarProvider>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
