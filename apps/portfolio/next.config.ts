import type { NextConfig } from "next";
import NextFederationPlugin from "@module-federation/nextjs-mf";
import { sharedDeps } from "@frontfolio/config/federation/shared";

process.env.NEXT_PRIVATE_LOCAL_WEBPACK = "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpack(config: any, options: any) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "frontfolio_portfolio",
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./PortfolioWidget": "./src/components/PortfolioWidget.tsx",
          },
          shared: sharedDeps,
          extraOptions: {},
        }),
      );
    }

    return config;
  },
};

export default nextConfig;
