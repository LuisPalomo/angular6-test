import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './components/map/map.component';

@NgModule({
  imports: [CommonModule, MapRoutingModule, MatIconModule],
  declarations: [MapComponent]
})
export class MapModule {}
