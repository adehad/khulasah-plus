/**
 * Open state for an sl-dialog rendered with `?open=${state.open}`.
 *
 * sl-dialog loses an open request made while its hide animation runs (the animation ends by hiding the panel
 * again), so a show() during a hide is deferred until sl-after-hide. Nested Shoelace controls (selects, colour
 * pickers) emit their own sl-hide/sl-after-hide, which bubble up to the dialog and are ignored here.
 */

import type { ReactiveController, ReactiveControllerHost } from "lit";

export class DialogOpenState implements ReactiveController {
  open = false;

  private _hiding = false;
  private _reopenAfterHide = false;

  constructor(
    private readonly _host: ReactiveControllerHost,
    /** Runs once the dialog has fully closed and no reopen is pending. */
    private readonly _onClosed?: () => void,
  ) {
    _host.addController(this);
  }

  // Every ReactiveController hook is optional, so TypeScript's weak-type check needs one to accept this class.
  hostConnected() {}

  show() {
    if (this._hiding) {
      this._reopenAfterHide = true;
      return;
    }
    this.open = true;
    this._host.requestUpdate();
  }

  hide() {
    this.open = false;
    this._reopenAfterHide = false;
    this._host.requestUpdate();
  }

  onHide = (event: Event) => {
    if (event.target !== event.currentTarget) return;
    this.open = false;
    this._hiding = true;
    this._host.requestUpdate();
  };

  onAfterHide = (event: Event) => {
    if (event.target !== event.currentTarget) return;
    this._hiding = false;
    if (this._reopenAfterHide) {
      this._reopenAfterHide = false;
      this.open = true;
      this._host.requestUpdate();
      return;
    }
    this._onClosed?.();
  };
}
