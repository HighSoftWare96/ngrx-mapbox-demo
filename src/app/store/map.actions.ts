import { createAction, props } from "@ngrx/store";
import { LngLatLike, LngLatBounds } from "mapbox-gl";

export const loadMapChanged = createAction(
  "[Map] map has changed",
  props<{ center: LngLatLike; bbox: LngLatBounds; zoom: number }>()
);

export const updateData = createAction("[Map.data] update data");

export const updateDataSuccess = createAction(
  "[Map.data] update data success",
  props<{ geoJSON: any }>()
);

export const updateDataFailure = createAction("[Map.data] update data failure");

export const markerClick = createAction(
  "[Map.user] Marker click",
  props<{ coords: LngLatLike }>()
);
