import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ListRoutingModule,
    SharedModule,
  ],
  declarations: [
    ListComponent,
    CardComponent,
  ],
})
export class ListModule {}
