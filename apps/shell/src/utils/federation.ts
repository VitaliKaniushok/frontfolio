import { baseUrls } from "../constants/base-urls";

export function getRemoteEntryUrl(scope: string, isServer: boolean) {
  const base = baseUrls[scope];
  const chunk = isServer ? "ssr" : "chunks";
  return `${base}/_next/static/${chunk}/remoteEntry.js?t=${Date.now()}`;
}
