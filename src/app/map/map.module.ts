import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { AgmCoreModule } from '@agm/core';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './components/map/map.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    MapRoutingModule,
    MatIconModule,
    AgmCoreModule,
    SharedModule,
  ],
  declarations: [MapComponent]
})
export class MapModule {}
