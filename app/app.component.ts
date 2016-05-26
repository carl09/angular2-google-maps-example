import {Component} from '@angular/core';

import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES, MapTypeId, MapTypeControlOptions, ImageMapTypeOptions, ImageMapTypeCoord} from 'angular2-google-maps';

export var google: any;

@Component({
  moduleId: module.id,
  selector: 'my-app',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  lat: number = -40.748635;//51.678418;
  lng: number = 175.437114;//7.809007;
  zoom: number = 6;
  maptype: string = 'linz';
  
  imageMapOptions : ImageMapTypeOptions;
  
  constructor(){
    this.imageMapOptions = {
      getTileUrl: (coord: ImageMapTypeCoord, zoom: number) => {
        return `https://a.tile.openstreetmap.org/${zoom}/${coord.x}/${coord.y}.png`
      },
      tileSize: { height: 256, width: 256 },
      maxZoom: 16,
      minZoom: 6,
      radius: 1738000,
      name: 'linZ',
      alt: 'LINZ Topo Maps'
    };
  }
  mapTypeControlOptions: MapTypeControlOptions = {
    mapTypeIds: [MapTypeId.HYBRID, MapTypeId.ROADMAP, MapTypeId.SATELLITE, 'linz']
  };
 
 setMapHybrid(){
   console.log("HYBRID");
   this.maptype = MapTypeId.HYBRID;
 }
 
 setMapRoadmap(){
   console.log("ROADMAP");
   this.maptype = MapTypeId.ROADMAP;
 }
 setMapSatellite(){
   console.log("SATELLITE");
   this.maptype = MapTypeId.SATELLITE;
 }
 setMapTerrain(){
   console.log("TERRAIN");
   this.maptype = MapTypeId.TERRAIN;
 }
 setMapMoon(){
   console.log("linz");
   this.maptype = 'linz';
 }
}
