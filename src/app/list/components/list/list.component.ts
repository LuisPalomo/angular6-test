import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PostService, Post } from '../../../core/services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }
}
