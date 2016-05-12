import {Component} from '@angular/core';

import {ANGULAR2_GOOGLE_MAPS_DIRECTIVES} from 'angular2-google-maps';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  directives: [ANGULAR2_GOOGLE_MAPS_DIRECTIVES],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  lat: number = 51.678418;
  lng: number = 7.809007;
}
