import dynamic from "next/dynamic";
import type { ComponentType, JSX, ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type RemoteModuleConfig = {
  scope: string; // Webpack container global name, e.g. "portfolio"
  module: string; // Exposed module path, e.g. "./PortfolioWidget"
};

export type WrapperFederatedComponentProps<
  P extends Record<string, unknown> = Record<string, unknown>,
> = RemoteModuleConfig & {
  fallback?: ReactNode; // Shown while the remote is loading
  componentProps?: P; // Props forwarded to the loaded remote component
};

/* ------------------------------------------------------------------ */
/*  Module-level cache – avoids re-creating next/dynamic wrappers      */
/* ------------------------------------------------------------------ */

const cache = new Map<string, ComponentType<any>>();

/* ------------------------------------------------------------------ */
/*  Webpack container loader (server + client)                         */
/*                                                                     */
/*  Full SSR requires NextFederationPlugin for both isServer and       */
/*  !isServer in next.config.ts.  When the server-side container is    */
/*  missing the loader silently returns an empty component so the page */
/*  doesn't crash – the client will hydrate the real remote.           */
/* ------------------------------------------------------------------ */

async function loadRemoteModule(
  scope: string,
  module: string,
): Promise<{ default: ComponentType<any> }> {
  try {
    // @ts-expect-error – webpack federation runtime global
    await __webpack_init_sharing__("default");

    const container =
      typeof window !== "undefined"
        ? // @ts-expect-error – dynamic global set by Module Federation
          (window[scope] as any)
        : // @ts-expect-error – dynamic global set by Module Federation
          (globalThis[scope] as any);

    if (!container) {
      throw new Error(`Container "${scope}" not found`);
    }

    // @ts-expect-error – webpack share scopes global
    await container.init(__webpack_share_scopes__.default);
    const factory = await container.get(module);
    return factory();
  } catch (error) {
    if (typeof window === "undefined") {
      // SSR without server-side federation – render nothing; the
      // client will load the real component during hydration.
      return { default: (() => null) as unknown as ComponentType<any> };
    }
    throw error;
  }
}

/* ------------------------------------------------------------------ */
/*  Get or create a cached next/dynamic component                      */
/* ------------------------------------------------------------------ */

function getOrCreateDynamic<P>(
  scope: string,
  module: string,
  fallback?: ReactNode,
  ssr = true,
): ComponentType<P> {
  const key = `${scope}::${module}::${ssr ? "ssr" : "csr"}`;

  if (!cache.has(key)) {
    cache.set(
      key,
      dynamic<P>(() => loadRemoteModule(scope, module), {
        ssr,
        loading: fallback ? () => <>{fallback}</> : undefined,
      }),
    );
  }

  return cache.get(key) as ComponentType<P>;
}

/* ------------------------------------------------------------------ */
/*  Runtime wrapper – use when scope/module are determined at runtime   */
/* ------------------------------------------------------------------ */

export default function WrapperFederatedComponent<
  P extends Record<string, unknown> = Record<string, unknown>,
>({
  scope,
  module,
  fallback,
  componentProps,
}: WrapperFederatedComponentProps<P>) {
  const Remote = getOrCreateDynamic<P>(scope, module, fallback);
  return <Remote {...(componentProps as P & JSX.IntrinsicAttributes)} />;
}

/* ------------------------------------------------------------------ */
/*  Static factory – preferred when the remote is known at build time  */
/*                                                                     */
/*  Usage:                                                             */
/*    const PortfolioWidget = createFederatedComponent({               */
/*      scope: "portfolio",                                            */
/*      module: "./PortfolioWidget",                                   */
/*    });                                                              */
/*    <PortfolioWidget someProp="value" />                             */
/* ------------------------------------------------------------------ */

export function createFederatedComponent<P = Record<string, unknown>>(
  config: RemoteModuleConfig & { fallback?: ReactNode; ssr?: boolean },
): ComponentType<P> {
  return getOrCreateDynamic<P>(
    config.scope,
    config.module,
    config.fallback,
    config.ssr ?? true,
  );
}
