import type { AppProps } from "next/app";
import i18n, { ensureInitialAppLanguage } from "@devfolio/i18n";
import { I18nextProvider } from "react-i18next";

if (typeof window !== "undefined") {
  ensureInitialAppLanguage();
  if (process.env.NEXT_PUBLIC_PORTFOLIO_DEV) {
    import("../src/styles/global.scss");
    const theme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", theme);
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nextProvider>
  );
}
