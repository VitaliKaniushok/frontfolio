import type { NextConfig } from "next";
import NextFederationPlugin from "@module-federation/nextjs-mf";
import { sharedDeps } from "@frontfolio/config/federation/shared";

import { getRemoteEntryUrl } from "./src/utils/federation";

process.env.NEXT_PRIVATE_LOCAL_WEBPACK = "true";

const PORTFOLIO_URL = process.env.PORTFOLIO_URL ?? "http://localhost:3001";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,

  webpack(config: any, options: any) {
    config.plugins.push(
      new NextFederationPlugin({
        name: "frontfolio_shell",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          portfolio: `frontfolio_portfolio@${getRemoteEntryUrl("frontfolio_portfolio", options.isServer)}`,
        },
        shared: sharedDeps,
        extraOptions: {},
      }),
    );

    return config;
  },
};

export default nextConfig;
