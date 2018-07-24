import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { EditCardDialogComponent } from './components/edit-card-dialog/edit-card-dialog.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ListRoutingModule,
    SharedModule,
  ],
  declarations: [
    ListComponent,
    CardComponent,
    EditCardDialogComponent,
  ],
  entryComponents: [
    EditCardDialogComponent,
  ]
})
export class ListModule {}
