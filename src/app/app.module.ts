import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { PostsService } from '../posts/posts.service';

import { FeedPage } from '../pages/feed/feed';

@NgModule({
  declarations: [
    MyApp,
    FeedPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FeedPage
  ],
  providers: [
    PostsService
  ]
})
export class AppModule {}
