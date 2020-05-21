import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  updateData,
  updateDataSuccess,
  updateDataFailure,
  loadMapChanged,
  markerClick
} from "./map.actions";
import {
  switchMap,
  withLatestFrom,
  map,
  catchError,
  debounceTime,
  tap
} from "rxjs/operators";
import { MapFacadeService } from "./mapFacade.service";
import { of } from "rxjs";
import { MyGeoJSONApiService } from "../services/myGeoJSONApi.service";
import { MapHolderService } from "../services/mapHolder.service";

@Injectable()
export class MapEffects {
  @Effect()
  loadDataEffect$ = this.actions$.pipe(
    ofType(updateData),
    withLatestFrom(this.mapFacade.mapState$),
    switchMap(([_, mapState]) => {
      const { bbox, zoom, center } = mapState;
      return this.api.get(bbox).pipe(
        map(data => updateDataSuccess({ geoJson: data })),
        catchError(err => of(updateDataFailure()))
      );
    })
  );

  @Effect()
  triggerUpdateEffect$ = this.actions$.pipe(
    ofType(loadMapChanged),
    debounceTime(200),
    map(() => updateData())
  );

  @Effect({
    dispatch: false
  })
  clickMarkerEffect$ = this.actions$.pipe(
    ofType(markerClick),
    tap(({ coords }) => {
      this.mapRef.flyTo(coords, 13);
    })
  );

  constructor(
    private actions$: Actions,
    private api: MyGeoJSONApiService,
    private mapFacade: MapFacadeService,
    private mapRef: MapHolderService
  ) {}
}
