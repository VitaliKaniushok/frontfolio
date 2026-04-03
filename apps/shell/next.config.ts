import type { NextConfig } from "next";
import NextFederationPlugin from "@module-federation/nextjs-mf";
import { sharedDeps } from "@frontfolio/config/federation/shared";

import { getRemoteEntryUrl } from "./src/utils/federation";
import path from "path/win32";

process.env.NEXT_PRIVATE_LOCAL_WEBPACK = "true"; // NOTE: flag means use webpack from my project's node_modules, not the built-in one in next.js

const nextConfig: NextConfig = {
  reactStrictMode: true,
  devIndicators: false,
  transpilePackages: ["@frontfolio/constants", "@frontfolio/ui"],

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
        name: "frontfolio_shell",
        filename: "static/chunks/remoteEntry.js",
        remotes: {
          portfolio: `frontfolio_portfolio@${getRemoteEntryUrl("frontfolio_portfolio", options.isServer)}`,
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
