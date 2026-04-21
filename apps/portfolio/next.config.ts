import type { NextConfig } from "next";
import NextFederationPlugin from "@module-federation/nextjs-mf";
import { sharedDeps } from "@frontfolio/config/federation/shared";
import path from "path/win32";

process.env.NEXT_PRIVATE_LOCAL_WEBPACK = "true"; // NOTE: flag means use webpack from my project's node_modules, not the built-in one in next.js

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    "@frontfolio/constants",
    "@frontfolio/i18n",
    "@frontfolio/ui",
  ],

  webpack(config: any, options: any) {
    const shared = options.isServer
      ? Object.fromEntries(
          Object.entries(sharedDeps).filter(
            ([k]) => k !== "react" && k !== "react-dom",
          ),
        )
      : sharedDeps;

    config.plugins.push(
      new NextFederationPlugin({
        name: "frontfolio_portfolio",
        filename: "static/chunks/remoteEntry.js",
        exposes: {
          "./PortfolioPage": "./pages/index.tsx",
        },
        shared,
        extraOptions: {
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        },
      }),
    );

    config.resolve.alias["@styles"] = path.resolve(
      __dirname,
      "../../packages/styles/src",
    );

    return config;
  },
};

export default nextConfig;
