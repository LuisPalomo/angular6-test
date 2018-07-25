import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../../../core/interfaces/post.interface';
import { PostService } from '../../../core/services/post.service';
import { PostDialogService } from '../../../core/services/post-dialog.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  posts$: Observable<Post[]>;

  lat = 41.3825;
  long = 2.176944;

  constructor(
    private postService: PostService,
    private postDialogService: PostDialogService,
  ) {}

  ngOnInit() {
    this.retrievePosts();
  }

  onEditPoint(post: Post) {
    this.postDialogService.openEditDialog(post).subscribe(
      () => this.retrievePosts(),
    );
  }

  onRemovePoint(post: Post) {
    this.postDialogService.openRemoveDialog(post).subscribe(
      () => this.retrievePosts(),
    );
  }

  onAddPoint() {
    this.postDialogService.openCreateDialog().subscribe(
      () => this.retrievePosts(),
    );
  }

  private retrievePosts() {
    this.posts$ = this.postService.listPosts();
  }
}
