import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule,
  MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSnackBarModule, MatMenuModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';

import { FabButtonComponent } from './components/fab-button/fab-button.component';

@NgModule({
  imports: [
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
  ],
})
export class SharedModule { }
