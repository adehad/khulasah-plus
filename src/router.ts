// This file is generated based on page-config.ts and page-renderer.ts
// Do not modify this file directly.

import { lazy } from "@thepassle/app-tools/router/plugins/lazy.js";
import { Router } from "@thepassle/app-tools/router.js";
import { html } from "lit";

// biome-ignore lint/suspicious/noExplicitAny: TODO: figure out why this is needed.
if (!(globalThis as any).URLPattern) {
  await import("urlpattern-polyfill");
}

import { pageConfigs } from "./pages/page-config.ts";
import "./components/page-renderer.ts"; // Ensure page-renderer is registered

const baseURL: string = import.meta.env.BASE_URL;
const isDev: boolean = import.meta.env.BASE_URL === "/";

export const router = new Router({
  fallback: "/404",
  routes: [
    ...pageConfigs.map((config) => ({
      path: resolveRouterPath(config.path),
      plugins: [lazy(() => import("./components/page-renderer.js"))],
      title: config.title,
      render: () =>
        html`<page-renderer contentImportPath="${config.contentImportPath}"></page-renderer>`,
    })),
    {
      path: "/404",
      title: "404 - Not Found",
      render: () =>
        html`<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`,
    },
  ],
});

export function resolveRouterPath(unresolvedPath?: string): string {
  if (isDev) {
    const path = unresolvedPath ?? "/";
    const resolvedPath = path.startsWith("/") ? path : `/${path}`;
    return resolvedPath;
  }
  var resolvedPath = baseURL;
  if (unresolvedPath) {
    resolvedPath = `${resolvedPath}/${unresolvedPath}`;
  }
  return resolvedPath;
}
