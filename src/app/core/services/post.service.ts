import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Post, PostPayload } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly apiUrl = 'https://wf-challenge-ceanyth.herokuapp.com/posts';

  constructor(private httpClient: HttpClient) {}

  listPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl);
  }

  updatePost(post: Post): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${post.id}`, { post: this.toPayload(post) });
  }

  removePost(postId: string): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${postId}`);
  }

  createPost(post: Post): Observable<any> {
    return this.httpClient.post(this.apiUrl, { post: this.toPayload(post) });
  }

  private toPayload({ id, created_at, updated_at, ...payload }: Post): PostPayload {
    return payload;
  }
}
