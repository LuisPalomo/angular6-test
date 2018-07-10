import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapRoutingModule } from './map-routing.module';
import { MapComponent } from './components/map/map.component';
import { MatIconModule } from '@angular/material';

@NgModule({
  imports: [CommonModule, MapRoutingModule, MatIconModule],
  declarations: [MapComponent]
})
export class MapModule {}
