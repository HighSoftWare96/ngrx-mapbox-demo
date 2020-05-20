import { createAction, props } from "@ngrx/store";
import { LngLatLike, LngLatBounds } from "mapbox-gl";

export const loadMapChanged = createAction(
  "[Map] map has changed",
  props<{ center: LngLatLike; bbox: LngLatBounds; zoom: number }>()
);
