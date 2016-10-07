import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Post } from '../../posts/posts';
import { PostsService } from '../../posts/posts.service';

import { PostPage } from '../post/post';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage implements OnInit {
  private posts: Post[];

  constructor(
    private navCtrl: NavController,
    private postsService: PostsService
   ) {}

  public ngOnInit(): void {
    this.postsService.getPosts()
      .then(posts => this.posts = posts.map(p => {
        p.imgSrc = `assets/images/${p.img}.JPG`;
        return p;
      }));
  }

  public postSelected(post: Post): void {
    this.navCtrl.push(PostPage, {
      id: post.id
    });
  }


}
