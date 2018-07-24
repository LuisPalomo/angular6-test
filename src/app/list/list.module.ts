import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { EditPostDialogComponent } from './components/edit-post-dialog/edit-post-dialog.component';
import { SharedModule } from '../shared/shared.module';
import { RemovePostDialogComponent } from './components/remove-post-dialog/remove-post-dialog.component';

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
    EditPostDialogComponent,
    RemovePostDialogComponent,
  ],
  entryComponents: [
    EditPostDialogComponent,
    RemovePostDialogComponent,
  ]
})
export class ListModule {}
