import { createSelector, createFeatureSelector } from "@ngrx/store";
import { MapState } from "./map.reducer";

export const getMapState = createFeatureSelector("map");

export const getCurrentCenter = createSelector(
  getMapState,
  (state: MapState) => state.center
);

export const getCurrentZoom = createSelector(
  getMapState,
  (state: MapState) => state.zoom
);

export const getCurrentBBox = createSelector(
  getMapState,
  (state: MapState) => state.bbox
);
