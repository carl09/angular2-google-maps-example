import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';

import {ANGULAR2_GOOGLE_MAPS_PROVIDERS, LazyMapsAPILoaderConfig} from 'angular2-google-maps';

import {AppComponent} from './app.component';

bootstrap(AppComponent, [
  ANGULAR2_GOOGLE_MAPS_PROVIDERS,
  provide(LazyMapsAPILoaderConfig,
          {
            useFactory: () => {
              let config = new LazyMapsAPILoaderConfig();
              config.apiKey = 'XXXX';
              return config;
            }
          })
]);
