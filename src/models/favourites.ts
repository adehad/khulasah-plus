/**
 * Marks the favourites page. Favourites live in the visitor's browser, so the page has no build-time content:
 * the renderer swaps this marker for the client-side kp-favourites-page.
 */
export class FavouritesModel {
  readonly kind = "favourites";
}
