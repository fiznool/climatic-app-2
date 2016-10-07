import { Injectable } from '@angular/core';

import { Post } from './posts';

const POSTS: Post[] = [{
  title: 'It\'s Sunny!',
  description: 'A lovely sunny day, as we look over the hills.',
  img: 'sunny-1'
}, {
  title: 'It\'s Raining.',
  description: 'It\'s really quite murky here.',
  img: 'gloomy-1'
}, {
  title: 'It\'s Windy!',
  description: 'Batten down the hatches!!!',
  img: 'windy-1'
}, {
  title: 'It\'s a bit chilly.',
  description: 'Pack your hat and gloves, it\'s a chilly one today.',
  img: 'cloudy-1'
}, {
  title: 'Storms a-coming!',
  description: 'The outlook is rain, wind, fire and brimstone.',
  img: 'stormy-1'
}, {
  title: 'Tranquility.',
  description: 'Turn on, tune in, zone out.',
  img: 'tranquil-1'
}];

@Injectable()
export class PostsService {
  public getPosts(): Promise<Post[]> {
    return Promise.resolve(POSTS);
  }
}
