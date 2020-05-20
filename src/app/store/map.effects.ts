import { createAction, props } from "@ngrx/store";
import { LngLatLike } from "mapbox-gl";

export const loadMapChanged = createAction(
  "[Map] Load map changed",
  props<{ center: LngLatLike; zoom: number; bbox: number[] }>()
);
