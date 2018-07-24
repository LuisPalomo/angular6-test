import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Observable } from 'rxjs';

import { Post } from '../../../core/interfaces/post.interface';
import { PostService } from '../../../core/services/post.service';
import { EditPostDialogComponent } from '../edit-post-dialog/edit-post-dialog.component';
import { RemovePostDialogComponent } from '../remove-post-dialog/remove-post-dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(
    private postService: PostService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.retrievePosts();
  }

  onEditCard(post: Post) {
    const dialogRef = this.dialog.open(EditPostDialogComponent, {
      width: '300px',
      data: post,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updatePost(result);
      }
    });
  }

  onRemoveCard(post: Post) {
    const dialogRef = this.dialog.open(RemovePostDialogComponent, {
      width: '300px',
      data: post,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.removePost(post.id);
      }
    });
  }

  onAddButtonClicked() {

  }

  private updatePost(post: Post) {
    this.postService.updatePost(post).subscribe(
      (success) => {
        this.requestResult('SUCCESS', 'Post updated successfully! :)');
      }, (error) => {
        this.requestResult('ERROR', 'Error updating post! :(');
      }
    );
  }

  private removePost(postId: string) {
    this.postService.removePost(postId).subscribe(
      (success) => {
        this.requestResult('SUCCESS', 'Post removed successfully! :)');
      }, (error) => {
        this.requestResult('ERROR', 'Error removing post! :(');
      }
    );
  }

  private requestResult(status: string, message: string) {
    this.snackBar.open(status, message);
    this.retrievePosts();
  }

  private retrievePosts() {
    this.posts$ = this.postService.listPosts();
  }
}
