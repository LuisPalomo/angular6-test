import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../../../core/interfaces/post.interface';
import { PostService } from '../../../core/services/post.service';
import { PostDialogService } from '../../../core/services/post-dialog.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  posts$: Observable<Post[]>;

  constructor(
    private postService: PostService,
    private postDialogService: PostDialogService,
  ) {}

  ngOnInit() {
    this.retrievePosts();
  }

  onEditCard(post: Post) {
    this.postDialogService.openEditDialog(post).subscribe(
      (success) => this.retrievePosts(),
      (error) => this.retrievePosts(),
    );
  }

  onRemoveCard(post: Post) {
    this.postDialogService.openRemoveDialog(post).subscribe(
      (success) => this.retrievePosts(),
      (error) => this.retrievePosts(),
    );
  }

  onAddButtonClicked() {
    this.postDialogService.openCreateDialog().subscribe(
      (success) => this.retrievePosts(),
      (error) => this.retrievePosts(),
    );
  }

  private retrievePosts() {
    this.posts$ = this.postService.listPosts();
  }
}
