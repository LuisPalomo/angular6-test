import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Post } from '../../../core/interfaces/post.interface';

@Component({
  selector: 'app-edit-post-dialog',
  templateUrl: './edit-post-dialog.component.html',
  styleUrls: ['./edit-post-dialog.component.css']
})
export class EditPostDialogComponent implements OnInit {

  post: Post;

  constructor(
    public dialogRef: MatDialogRef<EditPostDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: Post,
  ) {}

  ngOnInit() {
    if (this.data) {
      this.post = { ...this.data };
    } else {
      this.post = {};
    }
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
