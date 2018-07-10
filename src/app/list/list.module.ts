import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatButtonModule } from '@angular/material';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [CommonModule, ListRoutingModule, MatCardModule, MatButtonModule],
  declarations: [ListComponent, CardComponent]
})
export class ListModule {}
