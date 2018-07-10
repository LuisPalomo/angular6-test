import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  lat: string;
  long: string;
  image_url: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly apiUrl = 'https://wf-challenge-ceanyth.herokuapp.com/posts';

  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl);
  }
}
