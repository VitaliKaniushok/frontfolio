import type { NextConfig } from "next";
import NextFederationPlugin from "@module-federation/nextjs-mf";
import { sharedDeps } from "config/federation/shared";

process.env.NEXT_PRIVATE_LOCAL_WEBPACK = "true";

const PORTFOLIO_URL = process.env.PORTFOLIO_URL ?? "http://localhost:3001";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  webpack(config: any, options: any) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "shell",
          filename: "static/chunks/remoteEntry.js",
          remotes: {
            portfolio: `portfolio@${PORTFOLIO_URL}/_next/static/chunks/remoteEntry.js`,
          },
          shared: sharedDeps,
        }),
      );
    }

    return config;
  },
};

export default nextConfig;
