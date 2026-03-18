/**
 * Resolves a path relative to the configured base URL.
 * Works in both Astro server-side and client-side code.
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
