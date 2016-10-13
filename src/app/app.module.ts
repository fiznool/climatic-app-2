import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { Elastic } from '../vendor/elastic/elastic';

import { MyApp } from './app.component';

import { PostsService } from '../posts/posts.service';

import { FeedPage } from '../pages/feed/feed';
import { PostPage } from '../pages/post/post';
import { AddPostPage } from '../pages/add-post/add-post';

@NgModule({
  declarations: [
    MyApp,
    FeedPage,
    PostPage,
    AddPostPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    Elastic
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedPage,
    PostPage,
    AddPostPage
  ],
  providers: [
    PostsService
  ]
})
export class AppModule {}
