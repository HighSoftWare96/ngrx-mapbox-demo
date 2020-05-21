import { Component } from "@angular/core";
import { MapHolderService } from "./services/mapHolder.service";
import { Map } from "mapbox-gl";
import { MapFacadeService } from "./store/mapFacade.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  initialCenter = {
    lat: 40.785091,
    lng: -73.968285
  };
  initialZoom = 8;
  geoJSON$: Observable<any>;

  constructor(
    private mapHolder: MapHolderService,
    private mapFacade: MapFacadeService
  ) {
    this.geoJSON$ = mapFacade.geoJSON$;
  }

  loadMap(map: Map) {
    this.mapHolder.setMapRef(map);
  }

  updateMap(event: { target: Map }) {
    const { target } = event;
    this.mapFacade.mapChanged(
      target.getBounds(),
      target.getCenter(),
      target.getZoom()
    );
  }

  markerClick(marker: any) {
    this.markerClick(marker.geometry.coordinates);
  }
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
