import { Component } from "@angular/core";
import { MapHolderService } from "./services/mapHolder.service";
import { Map } from "mapbox-gl";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private mapHolder: MapHolderService) {}

  loadMap(map: Map) {
    console.log(map);
    this.mapHolder.setMapRef(map);
  }

}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
