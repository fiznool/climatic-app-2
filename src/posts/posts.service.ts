import { Injectable } from '@angular/core';

import { Post } from './posts';

const POSTS: Post[] = [{
  id: 1,
  title: 'It\'s Sunny!',
  description: 'A lovely sunny day, as we look over the hills.',
  img: 'sunny-1'
}, {
  id: 2,
  title: 'It\'s Raining.',
  description: 'It\'s really quite murky here.',
  img: 'gloomy-1'
}, {
  id: 3,
  title: 'It\'s Windy!',
  description: 'Batten down the hatches!!!',
  img: 'windy-1'
}, {
  id: 4,
  title: 'It\'s a bit chilly.',
  description: 'Pack your hat and gloves, it\'s a chilly one today.',
  img: 'cloudy-1'
}, {
  id: 5,
  title: 'Storms a-coming!',
  description: 'The outlook is rain, wind, fire and brimstone.',
  img: 'stormy-1'
}, {
  id: 6,
  title: 'Tranquility.',
  description: 'Turn on, tune in, zone out.',
  img: 'tranquil-1'
}];

@Injectable()
export class PostsService {
  public getPosts(): Promise<Post[]> {
    return Promise.resolve(POSTS);
  }

  public getPostById(id: Number): Promise<Post> {
    const post = POSTS.find(p => p.id === id);
    return Promise.resolve(post);
  }
}
