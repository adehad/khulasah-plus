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
import "@shoelace-style/shoelace/dist/components/icon-button/icon-button.js";
import "@/components/theme-switcher";

@customElement("app-header")
export class AppHeader extends LitElement {
  @state()
  private _breadcrumbs: Array<{ text: string; href: string }> = [];

  @state()
  private _tocItems: Array<{ text: string; id: string }> = [];

  @state()
  private _previousPath: string | undefined;

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
      gap: 10px;
      padding-right: 15px;
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
    window.addEventListener("toc-updated", this.handleTocUpdate);
    queueMicrotask(() => {
      this.generateBreadcrumbs(router.url);
      this._previousPath = router.url.pathname;
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    router.removeEventListener("route-changed", this.handleRouteChange);
    window.removeEventListener("toc-updated", this.handleTocUpdate);
  }

  private handleTocUpdate = (event: Event) => {
    const customEvent = event as CustomEvent;
    this._tocItems = customEvent.detail.tocItems;
  };

  private handleRouteChange = (event: Event) => {
    const routeEvent = event as unknown as RouterEvent;
    const newUrl = routeEvent.context?.url;

    if (newUrl) {
      const newPath = newUrl.pathname;
      if (this._previousPath === newPath) {
        // Path is the same, likely a hash change, so don't clear TOC.
        // Just update the previous path and exit.
        this._previousPath = newPath;
        return;
      }
      this._previousPath = newPath;
    }

    this._tocItems = []; // Clear TOC on route change
    if (newUrl) {
      this.generateBreadcrumbs(newUrl);
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

  private handleShow() {
    this.emitBorderStateChange(true);
  }

  private handleHide() {
    this.emitBorderStateChange(false);
  }

  private emitBorderStateChange(isBackground: boolean) {
    const event = new CustomEvent("border-state-change", {
      bubbles: true,
      composed: true,
      detail: { background: isBackground },
    });
    this.dispatchEvent(event);
  }

  private _handleTocItemClick(id: string) {
    window.location.hash = id;
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
              <sl-icon name="house" style="font-size: 1.2rem; transform: translateY(0.2rem);"></sl-icon>
            </sl-breadcrumb-item>
          `
              : ""
          }

          ${
            intermediateCrumbs.length > 0
              ? html`
            <sl-breadcrumb-item>
              <sl-dropdown @sl-show=${this.handleShow} @sl-hide=${this.handleHide}>
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
            <sl-breadcrumb-item>
              ${currentCrumb.text}
              ${
                this._tocItems.length > 0
                  ? html`
                  <sl-dropdown @sl-show=${this.handleShow} @sl-hide=${this.handleHide}>
                    <sl-icon-button name="chevron-double-down" slot="trigger" style="transform: translateY(0.2rem);"></sl-icon-button>
                    <sl-menu>
                      ${this._tocItems.map(
                        (item) => html`
                        <sl-menu-item @click=${() => this._handleTocItemClick(item.id)}>${item.text}</sl-menu-item>
                      `,
                      )}
                    </sl-menu>
                  </sl-dropdown>
                `
                  : ""
              }
            </sl-breadcrumb-item>
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
