import dynamic from "next/dynamic";
import type { ComponentType, ReactNode } from "react";
import { getRemoteEntryUrl } from "../utils/federation";

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

type MFContainer = {
  init: (shareScope: unknown) => Promise<void>;
  get: (module: string) => Promise<() => { default: ComponentType<unknown> }>;
};

/* ------------------------------------------------------------------ */
/*  Module-level cache – avoids re-creating next/dynamic wrappers      */
/* ------------------------------------------------------------------ */

const cache = new Map<string, ComponentType<unknown>>();

/* ------------------------------------------------------------------ */
/*  Webpack container loader (server + client)                         */
/*                                                                     */
/*  Full SSR requires NextFederationPlugin for both isServer and       */
/*  !isServer in next.config.ts.  When the server-side container is    */
/*  missing the loader silently returns an empty component so the page */
/*  doesn't crash – the client will hydrate the real remote.           */
/* ------------------------------------------------------------------ */

async function loadRemoteModule<P = Record<string, unknown>>(
  scope: string,
  module: string,
): Promise<{ default: ComponentType<P> }> {
  try {
    // @ts-expect-error – webpack federation runtime global
    await __webpack_init_sharing__("default");

    const container =
      typeof window !== "undefined"
        ? ((window as unknown as Record<string, unknown>)[scope] as
            | MFContainer
            | undefined)
        : ((globalThis as unknown as Record<string, unknown>)[scope] as
            | MFContainer
            | undefined);

    if (!container) {
      throw new Error(`Container "${scope}" not found`);
    }

    // @ts-expect-error – webpack share scopes global
    await container.init(__webpack_share_scopes__.default);
    const factory = await container.get(module);
    return factory() as { default: ComponentType<P> };
  } catch (error) {
    if (typeof window === "undefined") {
      // SSR without server-side federation – render fallback (loader) if provided.
      // The client will load the real component during hydration.
      // fallback is not available here, so we return a component rendering fallback if possible.
      // We'll handle fallback in getOrCreateDynamic, so return a special marker.
      const marker = () => null;
      Object.defineProperty(marker, "__ssr_fallback__", { value: true });
      return { default: marker as unknown as ComponentType<P> };
    }
    console.error(`Error loading remote module "${scope}::${module}":`, error);
    throw error;
  }
}

async function ensureRemoteLoaded(scope: string, url: string) {
  // @ts-expect-error – dynamic global set by Module Federation
  if (typeof window !== "undefined" && !window[scope]) {
    await new Promise<void>((resolve, reject) => {
      const script = document.createElement("script");
      script.src = url;
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error(`Failed to load ${url}`));
      document.head.appendChild(script);
    });
  }
}

/* ------------------------------------------------------------------ */
/*  Get or create a cached next/dynamic component                      */
/* ------------------------------------------------------------------ */

function getOrCreateDynamic<P = Record<string, unknown>>(
  scope: string,
  module: string,
  fallback?: ReactNode,
  ssr = true,
): ComponentType<P> {
  const key = `${scope}::${module}::${ssr ? "ssr" : "csr"}`;

  if (!cache.has(key)) {
    // Custom loader to inject fallback during SSR hydration mismatch
    const DynamicComponent = dynamic<P>(
      async () => {
        await ensureRemoteLoaded(scope, getRemoteEntryUrl(scope, false));

        const mod = await loadRemoteModule<P>(scope, module);
        // If SSR fallback marker is returned, wrap with fallback if provided
        if (
          mod.default &&
          (mod.default as { __ssr_fallback__?: boolean }).__ssr_fallback__ &&
          fallback
        ) {
          // Return a component that renders fallback on server
          return { default: () => <>{fallback}</> } as {
            default: ComponentType<P>;
          };
        }
        return mod;
      },
      {
        ssr,
        loading: fallback ? () => <>{fallback}</> : undefined,
      },
    );
    cache.set(key, DynamicComponent as ComponentType<unknown>);
  }

  return cache.get(key) as ComponentType<P>;
}

/* ------------------------------------------------------------------ */
/*  Runtime wrapper – use when scope/module are determined at runtime   */
/* ------------------------------------------------------------------ */

// export default function WrapperFederatedComponent<
//   P extends Record<string, unknown> = Record<string, unknown>,
// >({
//   scope,
//   module,
//   fallback,
//   componentProps,
// }: WrapperFederatedComponentProps<P>) {
//   const Remote = getOrCreateDynamic<P>(scope, module, fallback);
//   return <Remote {...(componentProps as P & JSX.IntrinsicAttributes)} />;
// }

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
