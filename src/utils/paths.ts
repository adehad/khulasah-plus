/**
 * Path resolution utility for constructing URLs relative to the base URL.
 * Works in both Astro server-side and client-side code.
 * Replaces the SPA router's resolveRouterPath for static site navigation.
 */
export function resolveBasePath(unresolvedPath?: string): string {
  const rawBaseURL: string = import.meta.env.BASE_URL;

  const normalizedBase = rawBaseURL.endsWith("/")
    ? rawBaseURL
    : `${rawBaseURL}/`;

  if (!unresolvedPath) {
    return normalizedBase;
  }

  const cleanPath = unresolvedPath.startsWith("/")
    ? unresolvedPath.slice(1)
    : unresolvedPath;

  if (!cleanPath) {
    return normalizedBase;
  }

  return `${normalizedBase}${cleanPath}`;
}
