import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { Post, PostsResponse } from './posts';

declare const Parse: any;

@Injectable()
export class PostsService {
  private PostProxy = Parse.Object.extend('Post');
  private page = 0;
  private pageSize = 10;

  private posts: Post[] = [];

  public getPosts(): Observable<PostsResponse> {
    this.page = 0;
    return this.fetchPosts(true);
  }

  public getNextPosts(): Observable<PostsResponse> {
    this.page++;
    return this.fetchPosts();
  }

  private fetchPosts(overwrite?: Boolean): Observable<PostsResponse> {
    return Observable.create(observer => {
      const postQuery: any = new Parse.Query(this.PostProxy);

      // Sort newest first
      postQuery.descending('createdAt');

      // Start at the current page
      postQuery.skip(this.page * this.pageSize);

      // Limit the returned items
      postQuery.limit(this.pageSize);

      // Send query to Parse Server
      postQuery.find({
        success: results => {
          if(overwrite) {
            // Overwrite the in-memory posts.
            this.posts = [];
          }

          // `results` is array of Parse objects,
          // convert them to plain JSON for Angular
          results.forEach(r => {
            this.posts.push(r.toJSON());
          });

          // Resolve the promise with the posts
          observer.next({
            posts: this.posts,
            hasMore: results.length === this.pageSize
          });
          observer.complete();
        },
        error: err => {
          console.log('There was an error fetching data: ', err);

          // Reject the promise with the error
          observer.error(err);
          observer.complete();
        }
      });
    });
  }

  public getPostById(id: String): Promise<Post> {
    const post = this.posts.find(p => p.objectId === id);
    return Promise.resolve(post);
  }
}
