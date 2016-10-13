export interface Post {
  objectId?: string,
  title?: string,
  description?: string,
  picture?: {
    url: string
  }
};

export interface PostsResponse {
  hasMore: boolean,
  posts: Post[]
}
