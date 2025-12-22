export interface Post {
  id: string;

  author: string;
  authorAvatar: string;

  content: string;
  image?: string;

  createdAt: string;

  likes: number;
  comments: number;
}
