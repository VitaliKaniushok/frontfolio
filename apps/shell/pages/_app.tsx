import type { AppProps } from "next/app";

import { Footer, Navbar } from "../src/components";

import "../src/styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
