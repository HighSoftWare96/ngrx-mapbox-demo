import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { MapState } from "./map.reducer";
import { LngLatLike, LngLatBounds } from "mapbox-gl";
import * as mapSelectors from "./map.selectors";
import { loadMapChanged } from "./map.actions";

@Injectable()
export class MapFacadeService {
  mapState$: Observable<MapState>;
  center$: Observable<LngLatLike>;
  zoom$: Observable<number>;
  bbox$: Observable<LngLatBounds>;

  constructor(private store: Store<any>) {
    this.mapState$ = this.store.select(mapSelectors.getMapState);
    this.center$ = this.store.select(mapSelectors.getCurrentCenter);
    this.zoom$ = this.store.select(mapSelectors.getCurrentZoom);
    this.bbox$ = this.store.select(mapSelectors.getCurrentBBox);
  }

  mapChanged(bbox: LngLatBounds, center: LngLatLike, zoom: number) {
    this.store.dispatch(
      loadMapChanged({
        bbox,
        center,
        zoom
      })
    );
  }
}
