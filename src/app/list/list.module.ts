import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [CommonModule, ListRoutingModule],
  declarations: [ListComponent, CardComponent]
})
export class ListModule {}
