import type { Router as RouterEvent } from "@thepassle/app-tools/router.js";
import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import { resolveRouterPath, router } from "@/router";

import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/breadcrumb/breadcrumb.js";
import "@shoelace-style/shoelace/dist/components/breadcrumb-item/breadcrumb-item.js";
import "@shoelace-style/shoelace/dist/components/dropdown/dropdown.js";
import "@shoelace-style/shoelace/dist/components/menu/menu.js";
import "@shoelace-style/shoelace/dist/components/menu-item/menu-item.js";
import "@shoelace-style/shoelace/dist/components/icon/icon.js";
import "@/components/theme-switcher";

@customElement("app-header")
export class AppHeader extends LitElement {
  @state()
  private _breadcrumbs: Array<{ text: string; href: string }> = [];

  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: var(--app-color-primary);
      padding: 12px;
      padding-top: 4px;

      position: fixed;
      left: env(titlebar-area-x, 0);
      top: env(titlebar-area-y, 0);
      height: env(titlebar-area-height, 30px);
      width: env(titlebar-area-width, 100%);
      -webkit-app-region: drag;
    }

    header h1 {
      margin-top: 0;
      margin-bottom: 0;
      font-size: 12px;
      font-weight: bold;
    }

    nav a {
      margin-left: 10px;
    }

    #back-button-block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
    }

    .theme-switcher-container {
      display: flex;
      gap: 8px;
      /* z-index: 1000; */
      -webkit-app-region: no-drag; /* Allow interaction with the theme switcher */
    }

    sl-breadcrumb {
      -webkit-app-region: no-drag;
    }

    @media(prefers-color-scheme: light) {
      nav a {
        color: initial;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    router.addEventListener("route-changed", this.handleRouteChange);
    // Use a microtask to allow router to initialize
    queueMicrotask(() => {
      this.generateBreadcrumbs(router.url);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    router.removeEventListener("route-changed", this.handleRouteChange);
  }

  private handleRouteChange = (event: Event) => {
    const routeEvent = event as unknown as RouterEvent;
    if (routeEvent.context?.url) {
      this.generateBreadcrumbs(routeEvent.context.url);
    }
  };

  private generateBreadcrumbs(url: URL) {
    const path = url.pathname;
    const homeRoute = router.routes.find((r) => r.path === "/");
    const homeTitle =
      homeRoute && typeof homeRoute.title === "string"
        ? homeRoute.title
        : "Home";

    const breadcrumbs = [{ text: homeTitle, href: resolveRouterPath("") }];

    if (path === "/") {
      this._breadcrumbs = breadcrumbs;
      return;
    }

    const segments = path.split("/").filter((s) => s);

    let accumulatedPath = "";
    for (const segment of segments) {
      accumulatedPath += `/${segment}`;
      const route = router.routes.find((r) => r.path === accumulatedPath);
      if (route && typeof route.title === "string") {
        if (route.path !== "/") {
          breadcrumbs.push({
            text: route.title,
            href: route.path,
          });
        }
      }
    }
    this._breadcrumbs = breadcrumbs;
  }

  render() {
    const breadcrumbs = this._breadcrumbs;
    const homeCrumb = breadcrumbs[0];
    const currentCrumb = breadcrumbs[breadcrumbs.length - 1];
    const intermediateCrumbs = breadcrumbs.slice(1, breadcrumbs.length - 1);

    return html`
      <header>
        <sl-breadcrumb>
          ${
            homeCrumb
              ? html`
            <sl-breadcrumb-item href="${homeCrumb.href}">
              <sl-icon name="house" style="font-size: 1.2rem;"></sl-icon>
            </sl-breadcrumb-item>
          `
              : ""
          }

          ${
            intermediateCrumbs.length > 0
              ? html`
            <sl-breadcrumb-item>
              <sl-dropdown>
                <sl-button slot="trigger" size="small" caret>
                  ${intermediateCrumbs.length}
                </sl-button>
                <sl-menu>
                  ${intermediateCrumbs.map(
                    (crumb) => html`
                    <sl-menu-item @click=${() => router.navigate(crumb.href)}>${crumb.text}</sl-menu-item>
                  `,
                  )}
                </sl-menu>
              </sl-dropdown>
            </sl-breadcrumb-item>
          `
              : ""
          }

          ${
            currentCrumb && breadcrumbs.length > 1
              ? html`
            <sl-breadcrumb-item>${currentCrumb.text}</sl-breadcrumb-item>
          `
              : ""
          }
        </sl-breadcrumb>

        <div class="theme-switcher-container">
          <slot name="actions"></slot>
          <theme-switcher></theme-switcher>
        </div>
      </header>
    `;
  }
}
