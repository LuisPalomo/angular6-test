import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

import { Post } from '../../../core/interfaces/post.interface';

@Component({
  selector: 'app-remove-post-dialog',
  templateUrl: './remove-post-dialog.component.html',
  styleUrls: ['./remove-post-dialog.component.css']
})
export class RemovePostDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public post: Post) { }

}
