import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentContext, DocumentInitialProps } from "next/document";
import { FlushedChunks, flushChunks } from "@module-federation/nextjs-mf/utils";
import { revalidate } from "@module-federation/nextjs-mf/utils";
import { DEFAULT_LANGUAGE } from "@frontfolio/i18n";

class FederatedDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    await revalidate().catch(() => {});

    const initialProps = await Document.getInitialProps(ctx);
    const chunks = await flushChunks();

    return {
      ...initialProps,
      chunks,
    } as DocumentInitialProps & { chunks: string[] };
  }

  render() {
    const { chunks } = this.props as DocumentInitialProps & {
      chunks?: string[];
    };

    return (
      <Html lang={DEFAULT_LANGUAGE}>
        <Head>
          <meta charSet="UTF-8" />
          <link rel="icon" href="/favicon.ico" />
          {chunks ? <FlushedChunks chunks={chunks} /> : null}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  window.__FRONTFOLIO_INITIAL_LANGUAGE__ = '${DEFAULT_LANGUAGE}';
                  document.documentElement.lang = '${DEFAULT_LANGUAGE}';
                  const theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                })();
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default FederatedDocument;
