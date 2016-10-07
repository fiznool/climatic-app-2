import { Component, OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { Post } from '../../posts/posts';
import { PostsService } from '../../posts/posts.service';

@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html'
})
export class FeedPage implements OnInit {
  private posts: Post[];

  constructor(
    public navCtrl: NavController,
    public postsService: PostsService
   ) {}

  ngOnInit(): void {
    this.postsService.getPosts()
      .then(posts => this.posts = posts.map(p => {
        p.imgSrc = `assets/images/${p.img}.JPG`;
        return p;
      }));
  }
}
