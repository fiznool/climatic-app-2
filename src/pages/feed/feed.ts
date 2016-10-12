import { Component, OnInit } from '@angular/core';

import { ModalController, NavController, LoadingController } from 'ionic-angular';

import { Post, PostsResponse } from '../../posts/posts';
import { PostsService } from '../../posts/posts.service';

import { PostPage } from '../post/post';
import { AddPostPage } from '../add-post/add-post';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage implements OnInit {
  posts: Post[] = [];
  hasMorePosts = false;

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private loadingCtrl: LoadingController,
    private postsService: PostsService
   ) {}

  ngOnInit(): void {
    const loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.loadFirstPosts(loading);
  }

  trackByPost(index: number, post: Post): String {
    return post.objectId;
  }

  postSelected(post: Post): void {
    this.navCtrl.push(PostPage, {
      id: post.objectId
    });
  }

  loadFirstPosts(loading): void {
    this.postsService
      .getPosts()
      .finally(() => loading.dismiss())
      .subscribe({
        next: results => this.onLoadSuccess(results),
        error: err => this.onLoadError(err)
      });
  }

  loadNextPosts(infiniteScoller): void {
    this.postsService
      .getNextPosts()
      .finally(() => infiniteScoller.complete())
      .subscribe({
        next: results => this.onLoadSuccess(results),
        error: err => this.onLoadError(err)
      });
  }

  onLoadSuccess(results: PostsResponse): PostsResponse {
    this.posts = results.posts;
    this.hasMorePosts = results.hasMore;
    return results;
  }

  onLoadError(err): void {
    // TODO display error to user
    console.error(err);
  }

  openAddPostModal(): void {
    const modal = this.modalCtrl.create(AddPostPage);
    modal.onDidDismiss(data => {
      console.log(`Dismissed...`, data);
    });
    modal.present();
  }
}
