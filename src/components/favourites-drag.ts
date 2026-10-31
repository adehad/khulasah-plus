/**
 * Drag-to-reorder for favourites tiles, on plain pointer events so mouse, touch and pen share one code path
 * without a drag-and-drop dependency (the HTML5 drag API does not fire for touch).
 *
 * Gaps are numbered as the user sees them before the move (0 = before the first tile, n = after the last),
 * which is what favourites.move() takes.
 */

import type { ReactiveController, ReactiveControllerHost } from "lit";

/** Within this distance of the scroll area's top or bottom edge, a drag scrolls the list, faster nearer the edge */
const EDGE_ZONE_PX = 48;
/** Short viewports get a proportionally smaller zone, so most of the screen still places the tile without scrolling */
const EDGE_ZONE_FRACTION = 0.12;
const MAX_SCROLL_STEP_PX = 20;

/**
 * Whichever element really scrolls the list, found when a drag starts rather than assumed: today that is
 * <main>, but the page may come to scroll the document instead. Shadow roots are crossed via their hosts.
 */
function scrollContainerOf(start: Element): Element {
  let node: Node | null = start;
  while (node) {
    if (node instanceof Element && node !== document.documentElement) {
      const { overflowY } = getComputedStyle(node);
      const scrollable = overflowY === "auto" || overflowY === "scroll";
      if (scrollable && node.scrollHeight > node.clientHeight) return node;
    }
    node = node.parentNode ?? (node instanceof ShadowRoot ? node.host : null);
  }
  return document.scrollingElement ?? document.documentElement;
}

/** The part of the scroll container on screen, which is where its edges are for the pointer */
function visibleBounds(scroller: Element): { top: number; bottom: number } {
  if (scroller === document.scrollingElement) {
    return { top: 0, bottom: window.innerHeight };
  }
  const { top, bottom } = scroller.getBoundingClientRect();
  return {
    top: Math.max(top, 0),
    bottom: Math.min(bottom, window.innerHeight),
  };
}

/** Pixels to scroll this frame: negative near the top, positive near the bottom, 0 elsewhere */
function edgeScrollStep(
  clientY: number,
  { top, bottom }: { top: number; bottom: number },
): number {
  const zone = Math.min(EDGE_ZONE_PX, (bottom - top) * EDGE_ZONE_FRACTION);
  const closeness = (distance: number) =>
    Math.min(1, Math.max(0, (zone - distance) / zone));
  const up = closeness(clientY - top);
  const down = closeness(bottom - clientY);
  const speed = down - up;
  if (speed === 0) return 0;
  // Whole pixels, at least one, since some engines round a fractional scrollTop away
  return (
    Math.sign(speed) *
    Math.max(1, Math.round(Math.abs(speed) * MAX_SCROLL_STEP_PX))
  );
}

export interface TileDragOptions {
  /** The tile elements of the level being edited, in order. */
  tiles: () => HTMLElement[];
  onDrop: (id: string, gap: number) => void;
}

export class TileDrag implements ReactiveController {
  draggingId: string | null = null;
  /** How far the dragged tile has followed the pointer, for the host to translate it by. */
  offsetY = 0;

  private _gap: number | null = null;
  private _startIndex = -1;
  private _startY = 0;
  private _pointerId: number | null = null;
  private _clientY = 0;
  private _scroller: Element | null = null;
  private _startScrollTop = 0;
  private _frame = 0;

  constructor(
    private readonly _host: ReactiveControllerHost,
    private readonly _options: TileDragOptions,
  ) {
    _host.addController(this);
  }

  hostDisconnected() {
    this._reset();
  }

  /** The gap to mark as the drop position; null when dropping would leave the tile where it is. */
  get dropGap(): number | null {
    if (this._gap === null) return null;
    const unchanged =
      this._gap === this._startIndex || this._gap === this._startIndex + 1;
    return unchanged ? null : this._gap;
  }

  start(event: PointerEvent, id: string, index: number) {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.preventDefault();
    (event.currentTarget as Element).setPointerCapture(event.pointerId);
    this._pointerId = event.pointerId;
    this.draggingId = id;
    this._startIndex = index;
    this._startY = event.clientY;
    this._clientY = event.clientY;
    this._scroller = scrollContainerOf(event.currentTarget as Element);
    this._startScrollTop = this._scroller.scrollTop;
    this.offsetY = 0;
    this._gap = index;
    this._frame = requestAnimationFrame(this._autoScroll);
    this._host.requestUpdate();
  }

  move(event: PointerEvent) {
    if (event.pointerId !== this._pointerId) return;
    this._clientY = event.clientY;
    this._track();
  }

  /**
   * The tile follows the pointer and the content scrolled under it, and the drop gap is re-read, so both stay
   * right while auto-scroll moves the list under a still pointer.
   */
  private _track() {
    const scrolled = (this._scroller?.scrollTop ?? 0) - this._startScrollTop;
    this.offsetY = this._clientY - this._startY + scrolled;
    this._gap = this._gapAt(this._clientY);
    this._host.requestUpdate();
  }

  private _autoScroll = () => {
    const scroller = this._scroller;
    if (!scroller) return;
    const step = edgeScrollStep(this._clientY, visibleBounds(scroller));
    if (step !== 0) {
      const before = scroller.scrollTop;
      scroller.scrollTop += step;
      if (scroller.scrollTop !== before) this._track();
    }
    this._frame = requestAnimationFrame(this._autoScroll);
  };

  end(event: PointerEvent) {
    if (event.pointerId !== this._pointerId) return;
    const id = this.draggingId;
    const gap = this.dropGap;
    this._reset();
    if (id !== null && gap !== null) this._options.onDrop(id, gap);
  }

  /** For pointercancel and lostpointercapture: the gesture ended without a drop. */
  cancel(event: PointerEvent) {
    if (event.pointerId === this._pointerId) this._reset();
  }

  get active(): boolean {
    return this._pointerId !== null;
  }

  /**
   * Abandons a drag in progress, e.g. on Escape or when the tree changed underneath it (another tab), where
   * the remembered start index may no longer match the tiles.
   */
  abort() {
    if (this.active) this._reset();
  }

  /**
   * The dragged tile is skipped because it is moving under the pointer; the others stay put, so their
   * midpoints are stable drop thresholds.
   */
  private _gapAt(clientY: number): number {
    let gap = 0;
    this._options.tiles().forEach((tile, index) => {
      if (index === this._startIndex) return;
      const { top, height } = tile.getBoundingClientRect();
      if (clientY > top + height / 2) gap = index + 1;
    });
    return gap;
  }

  private _reset() {
    cancelAnimationFrame(this._frame);
    this._scroller = null;
    this._pointerId = null;
    this.draggingId = null;
    this._gap = null;
    this._startIndex = -1;
    this.offsetY = 0;
    this._host.requestUpdate();
  }
}
