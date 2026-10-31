export type InstallHint =
  | "ios"
  | "mac-safari"
  | "firefox-android"
  | "firefox-windows"
  | "firefox-unsupported"
  | "samsung"
  | "chromium"
  | "other";

// Shown when no beforeinstallprompt is stashed, so it names the browser's own
// install route. Every iOS browser shares Safari's Add to Home Screen (16.4+),
// and iPadOS reports a Mac user agent, so touch support tells an iPad from a Mac.
// Samsung Internet and Edge also report Chrome, so they are matched first.
export function installHint(
  userAgent: string,
  maxTouchPoints: number,
): InstallHint {
  const isMac = /Macintosh/.test(userAgent);
  if (/iPad|iPhone|iPod/.test(userAgent) || (isMac && maxTouchPoints > 1)) {
    return "ios";
  }
  if (/SamsungBrowser/.test(userAgent)) return "samsung";
  if (/Firefox\//.test(userAgent)) {
    if (/Android/.test(userAgent)) return "firefox-android";
    if (/Windows/.test(userAgent)) return "firefox-windows";
    return "firefox-unsupported";
  }
  if (/Chrome|Chromium/.test(userAgent)) return "chromium";
  if (isMac && /Safari/.test(userAgent)) return "mac-safari";
  return "other";
}

export interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

declare global {
  interface Window {
    __installPrompt?: BeforeInstallPromptEvent | null;
  }
  interface Navigator {
    standalone?: boolean;
  }
}

// Fired by the inline capture script in BaseLayout whenever the stashed
// prompt appears or is used up.
export const INSTALL_PROMPT_CHANGED = "kp-install-prompt-changed";

export function isStandalone(): boolean {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.matchMedia("(display-mode: window-controls-overlay)").matches ||
    navigator.standalone === true
  );
}

export function currentInstallHint(): InstallHint {
  return installHint(navigator.userAgent, navigator.maxTouchPoints);
}
