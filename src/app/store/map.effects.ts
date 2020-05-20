import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  updateData,
  updateDataSuccess,
  updateDataFailure
} from "./map.actions";
import { switchMap, withLatestFrom, map, catchError } from "rxjs/operators";
import { MapFacadeService } from "./mapFacade.service";
import { of } from "rxjs";
import { MyGeoJSONApiService } from "../services/myGeoJSONApi.service";

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

  constructor(
    private actions$: Actions,
    private api: MyGeoJSONApiService,
    private mapFacade: MapFacadeService
  ) {}
}
