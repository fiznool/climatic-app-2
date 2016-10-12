import { Component, OnInit } from '@angular/core';

import { NavParams } from 'ionic-angular';

import { Post } from '../../posts/posts';
import { PostsService } from '../../posts/posts.service';

@Component({
  selector: 'page-post',
  templateUrl: 'post.html'
})
export class PostPage implements OnInit {
  post: Post;

  constructor(
    private navParams: NavParams,
    private postsService: PostsService
   ) {}

  ngOnInit(): void {
    const id = this.navParams.get('id');
    this.postsService.getPostById(id)
      .then(post => this.post = post);
  }
}
