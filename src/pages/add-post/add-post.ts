import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'add-post.html'
})
export class AddPostPage {
  constructor(
    private params: NavParams,
    private viewCtrl: ViewController
  ) {}

  save(): void {
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
