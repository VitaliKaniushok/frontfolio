type SharedDep = {
  singleton: boolean;
  requiredVersion?: string | false;
  eager?: boolean;
};

export const sharedDeps: Record<string, SharedDep> = {
  react: { singleton: true, requiredVersion: false, eager: true },
  "react-dom": { singleton: true, requiredVersion: false, eager: true },
  i18next: { singleton: true, requiredVersion: false },
  "react-i18next": { singleton: true, requiredVersion: false },
  "@devfolio/i18n": { singleton: true, requiredVersion: false },
  "next/router": { singleton: true, requiredVersion: false },
  "next/navigation": { singleton: true, requiredVersion: false },
  "next/link": { singleton: true, requiredVersion: false },
  "next/image": { singleton: true, requiredVersion: false },
};
