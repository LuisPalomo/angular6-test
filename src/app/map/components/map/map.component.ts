import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Post } from '../../../core/interfaces/post.interface';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  posts$: Observable<Post[]>;

  lat = 41.3825;
  long = 2.176944;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts$ = this.postService.listPosts();
  }
}
