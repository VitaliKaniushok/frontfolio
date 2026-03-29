import type { AppProps } from "next/app";

import { Header, Footer } from "../src/components";

// import "@frontfolio/styles/globals";
import "../src/styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
