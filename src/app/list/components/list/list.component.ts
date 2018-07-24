import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

import { Post } from '../../../core/interfaces/post.interface';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(
    private postService: PostService,
    private snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.retrievePosts();
  }

  onEditCard(post: Post) {
    this.postService.updatePost(post).subscribe(
      (success) => {
        this.snackBar.open('SUCCESS', 'Post updated successfully! :)');
        this.retrievePosts();
      },
      (error) => {
        this.snackBar.open('ERROR', 'Error updating post! :(');
        this.retrievePosts();
      }
    );
  }

  onAddButtonClicked() {

  }

  private retrievePosts() {
    this.posts$ = this.postService.listPosts();
  }
}
