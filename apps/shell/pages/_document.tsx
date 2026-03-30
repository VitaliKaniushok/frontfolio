import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentContext, DocumentInitialProps } from "next/document";
import { FlushedChunks, flushChunks } from "@module-federation/nextjs-mf/utils";
import { revalidate } from "@module-federation/nextjs-mf/utils";

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
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Frontfolio – Vitali's modern portfolio platform."
          />
          <meta property="og:title" content="Frontfolio" />
          <meta
            property="og:description"
            content="Frontfolio – Vitali's modern portfolio platform."
          />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="/favicon.ico" />
          <link rel="icon" href="/favicon.ico" />
          {chunks ? <FlushedChunks chunks={chunks} /> : null}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
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
