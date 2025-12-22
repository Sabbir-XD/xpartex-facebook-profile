import { Post } from "@/src/types/post";

type PostCardProps = {
  post: Post;
};

export default function PostCard ({ post }: PostCardProps ) {
  return (
    <div className="bg-white rounded-lg p-4">
      <p className="font-semibold">{post.author}</p>
      <p className="text-sm text-gray-600">{post.createdAt}</p>

      <p className="mt-2">{post.content}</p>
    </div>
  );
};

