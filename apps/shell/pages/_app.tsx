import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

import "../src/styles/global.scss";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Devfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Frontfolio - Vitali's modern portfolio platform."
        />
        <meta property="og:title" content="Frontfolio" />
        <meta
          property="og:description"
          content="Frontfolio - Vitali's modern portfolio platform."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
