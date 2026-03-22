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
        <Head>{chunks ? <FlushedChunks chunks={chunks} /> : null}</Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default FederatedDocument;
