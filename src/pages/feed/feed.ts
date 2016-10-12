import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Post, PostsResponse } from '../../posts/posts';
import { PostsService } from '../../posts/posts.service';

import { PostPage } from '../post/post';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage implements OnInit {
  private posts: Post[] = [];
  private hasMorePosts = false;

  constructor(
    private navCtrl: NavController,
    private postsService: PostsService
   ) {}

  public ngOnInit(): void {
    this.loadFirstPosts();
  }

  public trackByPost(index: number, post: Post): String {
    return post.objectId;
  }

  public postSelected(post: Post): void {
    this.navCtrl.push(PostPage, {
      id: post.objectId
    });
  }

  loadFirstPosts(): void {
    this.postsService.getPosts()
      .then(results => this.onLoadSuccess(results));
  }

  loadNextPosts(infiniteScoller): void {
    this.postsService
      .getNextPosts()
      .then(results => {
        this.onLoadSuccess(results);
        infiniteScoller.complete();
      });
  }

  private onLoadSuccess(results: PostsResponse): void {
    this.posts = results.posts;
    this.hasMorePosts = results.hasMore;
  }
}
