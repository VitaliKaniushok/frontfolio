type SharedDep = {
  singleton: boolean;
  requiredVersion?: string | false;
};

export const sharedDeps: Record<string, SharedDep> = {
  react: { singleton: true, requiredVersion: false },
  "react-dom": { singleton: true, requiredVersion: false },
  "next/router": { singleton: true, requiredVersion: false },
  "next/navigation": { singleton: true, requiredVersion: false },
  "next/link": { singleton: true, requiredVersion: false },
  "next/image": { singleton: true, requiredVersion: false },
};
