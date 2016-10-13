import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';

import { Post } from '../../posts/posts';

@Component({
  templateUrl: 'add-post.html'
})
export class AddPostPage {
  model: Post = {};

  constructor(
    private params: NavParams,
    private viewCtrl: ViewController
  ) {}

  submit(): void {
    this.viewCtrl.dismiss({
      saved: true
    });
  }

  cancel(): void {
    this.viewCtrl.dismiss({
      saved: false
    });
  }
}
