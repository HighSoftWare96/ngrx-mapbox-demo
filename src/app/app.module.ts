import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { StoreModule } from "@ngrx/store";
import { mapReducer } from "./store/map.reducer";
import { NgxMapboxGLModule } from 'ngx-mapbox-gl';
import { MapFacadeService } from "./store/mapFacade.service";
import { MapHolderService } from "./services/mapHolder.service";
import { MyGeoJSONApiService } from "./services/myGeoJSONApi.service";
import { EffectsModule } from "@ngrx/effects";
import { MapEffects } from "./store/map.effects";


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      map: mapReducer
    }),
    EffectsModule.forRoot([
      MapEffects
    ]),
    NgxMapboxGLModule
  ],
  providers: [
    MapFacadeService,
    MapHolderService,
    MyGeoJSONApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
