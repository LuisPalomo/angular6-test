import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { EditCardDialogComponent } from './components/edit-card-dialog/edit-card-dialog.component';

@NgModule({
  imports: [CommonModule, FormsModule, ListRoutingModule, MatCardModule,
    MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule],
  declarations: [ListComponent, CardComponent, EditCardDialogComponent],
  entryComponents: [EditCardDialogComponent]
})
export class ListModule {}
