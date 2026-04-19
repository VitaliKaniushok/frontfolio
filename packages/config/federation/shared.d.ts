export type SharedDep = {
  singleton: boolean;
  requiredVersion?: string | false;
  eager?: boolean;
};

export declare const sharedDeps: Record<string, SharedDep>;