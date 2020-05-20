import { Component } from "@angular/core";
import { MapHolderService } from "./services/mapHolder.service";
import { Map } from "mapbox-gl";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  initialCenter =  {
    lat: 45.464211,
    lng: 9.191383
  };
  initialZoom = 8;

  constructor(private mapHolder: MapHolderService) {}

  loadMap(map: Map) {
    this.mapHolder.setMapRef(map);
  }

}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
