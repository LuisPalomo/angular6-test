import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule,
  MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { FabButtonComponent } from './components/fab-button/fab-button.component';

@NgModule({
  imports: [
    CommonModule,
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
  ],
  declarations: [
    FabButtonComponent,
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
  ],
})
export class SharedModule { }
