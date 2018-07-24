import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Post } from '../../../core/interfaces/post.interface';
import { EditCardDialogComponent } from '../edit-card-dialog/edit-card-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() post: Post;

  constructor(public dialog: MatDialog) {}

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditCardDialogComponent, {
      width: '300px',
      data: this.post,
    });
  }
}
