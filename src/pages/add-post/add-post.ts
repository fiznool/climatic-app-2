import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';

interface Post {
  title?: string,
  description?: string
}

@Component({
  templateUrl: 'add-post.html'
})
export class AddPostPage {
  private model: Post = {};

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
