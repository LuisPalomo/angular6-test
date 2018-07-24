import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Post } from '../../../core/interfaces/post.interface';

@Component({
  selector: 'app-edit-card-dialog',
  templateUrl: './edit-card-dialog.component.html',
  styleUrls: ['./edit-card-dialog.component.css']
})
export class EditCardDialogComponent implements OnInit {

  post: Post;

  constructor(
    public dialogRef: MatDialogRef<EditCardDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Post,
  ) {}

  ngOnInit() {
    this.post = { ...this.data };
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
