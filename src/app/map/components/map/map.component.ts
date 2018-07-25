import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MouseEvent } from '@agm/core';
import { MatSnackBar } from '@angular/material';

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
    private snackBar: MatSnackBar,
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

  onAddPoint($event: MouseEvent) {
    this.postDialogService.openCreateDialog({
      lat: $event.coords.lat.toString(),
      long: $event.coords.lng.toString(),
    }).subscribe(
      () => this.retrievePosts(),
    );
  }

  onDragEnd(post: Post, $event: MouseEvent) {
    this.postService.updatePost({
      ...post,
      lat: $event.coords.lat.toString(),
      long: $event.coords.lng.toString(),
    }).subscribe(
      (succes) => {
        this.snackBar.open('SUCCESS', 'Post moved successfully! :)');
        this.retrievePosts();
      },
      (error) => {
        this.snackBar.open('ERROR', 'Error moving post! :(');
        this.retrievePosts();
      }
    );
  }

  private retrievePosts() {
    this.posts$ = this.postService.listPosts();
  }
}
