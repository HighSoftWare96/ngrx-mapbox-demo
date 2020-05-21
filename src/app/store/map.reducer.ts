import { createReducer, on } from "@ngrx/store";
import * as mapActions from "./map.actions";
import { LngLatLike, LngLatBounds } from "mapbox-gl";

export interface MapState {
  center: LngLatLike;
  zoom: number;
  bbox: LngLatBounds;
  geoJSON: any;
}

export const initialState: MapState = {
  center: {
    lat: 45.464211,
    lng: 9.191383
  },
  zoom: 13,
  bbox: undefined,
  geoJSON: {}
};

const _mapReducer = createReducer(
  initialState,
  on(mapActions.loadMapChanged, (state, { center, zoom, bbox }) => ({
    center,
    zoom,
    bbox
  })),
  on(mapActions.updateDataSuccess, (state, { geoJSON }) => ({
    ...state,
    geoJSON
  }))
);

export function mapReducer(state, action) {
  return _mapReducer(state, action);
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
