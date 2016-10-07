import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { PostsService } from '../posts/posts.service';

import { FeedPage } from '../pages/feed/feed';
import { PostPage } from '../pages/post/post';

@NgModule({
  declarations: [
    MyApp,
    FeedPage,
    PostPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedPage,
    PostPage
  ],
  providers: [
    PostsService
  ]
})
export class AppModule {}
