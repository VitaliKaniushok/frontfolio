declare module "@frontfolio/config/federation/shared" {
  export const sharedDeps: Record<string, any>;
}

declare module "@frontfolio/config/*" {
  const whatever: any;
  export default whatever;
}
