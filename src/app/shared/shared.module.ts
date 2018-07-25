import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule,
  MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatMenuModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { FabButtonComponent } from './components/fab-button/fab-button.component';
import { ToNumberPipe } from './pipes/to-number.pipe';
import { EditPostDialogComponent } from './components/edit-post-dialog/edit-post-dialog.component';
import { RemovePostDialogComponent } from './components/remove-post-dialog/remove-post-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatMenuModule,
  ],
  declarations: [
    FabButtonComponent,
    ToNumberPipe,
    EditPostDialogComponent,
    RemovePostDialogComponent,
  ],
  entryComponents: [
    EditPostDialogComponent,
    RemovePostDialogComponent,
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    LayoutModule,
    MatListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    FabButtonComponent,
    MatMenuModule,
    ToNumberPipe,
    EditPostDialogComponent,
    RemovePostDialogComponent,
  ],
})
export class SharedModule { }
