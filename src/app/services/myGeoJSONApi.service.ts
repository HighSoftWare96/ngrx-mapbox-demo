import { Injectable } from "@angular/core";
import { Map, LngLatLike, LngLatBounds } from "mapbox-gl";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class MyGeoJSONApiService {

  constructor(
    private httpClient: HttpClient
  ) {}

  get(bbox: LngLatBounds) {
    return this.httpClient.get(
      'https://opendata.arcgis.com/datasets/c57777877aa041ecaef98ff2519aabf6_44.geojson'
    );
  }
}
