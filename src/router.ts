// This file is generated based on page-config.ts and page-renderer.ts
// Do not modify this file directly.

import { Router } from "@thepassle/app-tools/router.js";
import { html } from "lit";

// biome-ignore lint/suspicious/noExplicitAny: TODO: figure out why this is needed.
if (!(globalThis as any).URLPattern) {
  await import("urlpattern-polyfill");
}

import { pageConfigs } from "./pages/page-config.ts";
import "./components/page-renderer.ts";

/**
 * Resolves a path relative to the application's base URL.
 *
 * This function handles path resolution correctly across different environments:
 * - Development: BASE_URL is typically "/"
 * - Production: BASE_URL is the deployment path (e.g., "/khulasah-plus/")
 *
 * Key behaviors:
 * - Normalizes the base URL to always have a trailing slash
 * - Strips leading slashes from input paths to avoid double slashes
 * - For empty/undefined paths, returns the base URL (with trailing slash for home route)
 * - For non-empty paths, joins base + path without trailing slash
 *
 * @param unresolvedPath - The path segment to resolve (e.g., "", "khulasah", "khulasah/after-fajr")
 * @returns The fully resolved path with base URL
 *
 * @example
 * // With BASE_URL = "/khulasah-plus/"
 * resolveRouterPath()                     // "/khulasah-plus/"
 * resolveRouterPath("")                   // "/khulasah-plus/"
 * resolveRouterPath("khulasah")           // "/khulasah-plus/khulasah"
 * resolveRouterPath("/khulasah")          // "/khulasah-plus/khulasah" (leading slash stripped)
 * resolveRouterPath("khulasah/after-fajr") // "/khulasah-plus/khulasah/after-fajr"
 *
 * @example
 * // With BASE_URL = "/" (development)
 * resolveRouterPath()                     // "/"
 * resolveRouterPath("khulasah")           // "/khulasah"
 */
export function resolveRouterPath(unresolvedPath?: string): string {
  const rawBaseURL: string = import.meta.env.BASE_URL;

  // Normalize base URL to always have a trailing slash.
  // This ensures consistent behavior whether Vite provides "/" or "/khulasah-plus" or "/khulasah-plus/"
  const normalizedBase = rawBaseURL.endsWith("/")
    ? rawBaseURL
    : `${rawBaseURL}/`;

  // If no path provided (or empty string), return the base URL.
  // The trailing slash is important for the home route to match browser URLs
  // since GitHub Pages redirects /khulasah-plus to /khulasah-plus/
  if (!unresolvedPath) {
    return normalizedBase;
  }

  // Strip leading slash from the path to avoid double slashes when joining.
  // e.g., "/khulasah" becomes "khulasah" so we don't get "/khulasah-plus//khulasah"
  const cleanPath = unresolvedPath.startsWith("/")
    ? unresolvedPath.slice(1)
    : unresolvedPath;

  // If after stripping the path is empty, return base URL
  if (!cleanPath) {
    return normalizedBase;
  }

  // Join base and path. The base already has trailing slash, path has no leading slash.
  // Result: "/khulasah-plus/" + "khulasah" = "/khulasah-plus/khulasah"
  return `${normalizedBase}${cleanPath}`;
}

export const router = new Router({
  fallback: resolveRouterPath("404"),
  routes: [
    ...pageConfigs.map((config) => ({
      path: resolveRouterPath(config.path),
      title: config.title,
      render: () =>
        html`<page-renderer contentImportPath="${config.contentImportPath}"></page-renderer>`,
    })),
    {
      path: resolveRouterPath("404"),
      title: "404 - Not Found",
      render: () =>
        html`<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`,
    },
  ],
});
