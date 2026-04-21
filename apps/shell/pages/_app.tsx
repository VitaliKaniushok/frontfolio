import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Head from "next/head";
import i18n, {
  ensureInitialAppLanguage,
  syncAppLanguage,
} from "@frontfolio/i18n";
import { I18nextProvider, useTranslation } from "react-i18next";

import "../src/styles/global.scss";

if (typeof window !== "undefined") {
  ensureInitialAppLanguage();
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const { t } = useTranslation();

  useEffect(() => {
    void syncAppLanguage();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <Head>
        <title>{t("shell.meta.title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={t("shell.meta.description")} />
        <meta property="og:title" content={t("shell.meta.title")} />
        <meta property="og:description" content={t("shell.meta.description")} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.ico" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </I18nextProvider>
  );
}
