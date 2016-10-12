export interface Post {
  objectId: String,
  title: String,
  description: String,
  picture: {
    url: String
  }
};

export interface PostsResponse {
  hasMore: Boolean,
  posts: Post[]
}
