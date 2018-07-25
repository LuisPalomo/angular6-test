import { Injectable, EventEmitter } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { share } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Post } from '../interfaces/post.interface';
import { EditPostDialogComponent } from '../../shared/components/edit-post-dialog/edit-post-dialog.component';
import { PostService } from './post.service';
import { RemovePostDialogComponent } from '../../shared/components/remove-post-dialog/remove-post-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class PostDialogService {

  constructor(
    private postService: PostService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  openEditDialog(post: Post): EventEmitter<boolean> {
    const dialogRef = this.dialog.open(EditPostDialogComponent, {
      width: '300px',
      data: post,
    });
    const isSuccessEmitter = new EventEmitter<boolean>();

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.postService.updatePost(result).subscribe(
          (success) => {
            this.snackBar.open('SUCCESS', 'Post updated successfully! :)');
            isSuccessEmitter.emit(true);
          },
          (error) => {
            this.snackBar.open('ERROR', 'Error updating post! :(');
            isSuccessEmitter.emit(false);
          },
          () => isSuccessEmitter.complete(),
        );
      }
    });

    return isSuccessEmitter;
  }

  openRemoveDialog(post: Post): EventEmitter<boolean> {
    const dialogRef = this.dialog.open(RemovePostDialogComponent, {
      width: '300px',
      data: post,
    });
    const isSuccessEmitter = new EventEmitter<boolean>();

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.postService.removePost(post.id).subscribe(
          (success) => {
            this.snackBar.open('SUCCESS', 'Post removed successfully! :)');
            isSuccessEmitter.emit(true);
          }, (error) => {
            this.snackBar.open('ERROR', 'Error removing post! :(');
            isSuccessEmitter.emit(false);
          },
          () => isSuccessEmitter.complete(),
        );
      }
    });

    return isSuccessEmitter;
  }

  openCreateDialog(post?: Post): EventEmitter<boolean> {
    const dialogRef = this.dialog.open(EditPostDialogComponent, {
      width: '300px',
      data: post
    });
    const isSuccessEmitter = new EventEmitter<boolean>();

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.postService.createPost(result).subscribe(
          (success) => {
            this.snackBar.open('SUCCESS', 'Post created successfully! :)');
            isSuccessEmitter.emit(true);
          },
          (error) => {
            this.snackBar.open('ERROR', 'Error creating post! :(');
            isSuccessEmitter.emit(false);
          },
          () => isSuccessEmitter.complete(),
        );
      }
    });

    return isSuccessEmitter;
  }
}
