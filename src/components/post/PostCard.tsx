import { Post } from "@/src/types/post";
import Image from "next/image";
import { FaThumbsUp, FaComment, FaShare, FaEllipsisH, FaGlobeAmericas, FaHeart, FaLaughBeam } from "react-icons/fa";

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-3 sm:p-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden">
            <Image
              src={post.authorAvatar}
              alt={post.author}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-semibold text-sm sm:text-base">{post.author}</p>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <p>{post.createdAt}</p>
              <FaGlobeAmericas size={12} />
            </div>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <FaEllipsisH size={14} className="sm:text-[16px]" />
        </button>
      </div>

      {/* Content */}
      <div className="px-3 sm:px-4 pb-2">
        <p className="text-sm sm:text-base">{post.content}</p>
      </div>

      {/* Image */}
      {post.image && (
        <div className="relative w-full h-44 sm:h-70 md:h-95 bg-gray-500">
          <Image
            src={post.image}
            alt="Post image"
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Reactions Summary */}
      <div className="flex justify-between px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <div className="relative w-12 h-5"> {/* Container for overlapping icons */}
            <div className="absolute left-0 bottom-0 bg-blue-500 rounded-full p-0.5 z-10">
              <FaThumbsUp className="text-white" size={10} />
            </div>        
            <div className="absolute left-6 bottom-0 bg-yellow-500 rounded-full p-0.5 z-30">
              <FaLaughBeam className="text-white" size={10} />
            </div>
            <div className="absolute left-3 bottom-1 bg-red-500 rounded-full p-0.5 z-20">
              <FaHeart className="text-white" size={10} />
            </div>
          </div>
          <span>Jessica Walsh, David Carson and {post.likes - 2} others</span>
        </div>
        <div className="flex gap-2 sm:gap-4">
          <span>{post.comments} Comments</span>
          <span>2 Shares</span>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Actions */}
      <div className="flex justify-around py-2">
        <button className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-blue-500 text-xs sm:text-base">
          <FaThumbsUp size={16} className="sm:text-[18px]" />
          Like
        </button>
        <button className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-blue-500 text-xs sm:text-base">
          <FaComment size={16} className="sm:text-[18px]" />
          Comment
        </button>
        <button className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-blue-500 text-xs sm:text-base">
          <FaShare size={16} className="sm:text-[18px]" />
          Share
        </button>
      </div>

      {/* Comment Input */}
      <div className="px-3 sm:px-4 py-2 border-t border-gray-200">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative h-6 w-6 sm:h-8 sm:w-8 rounded-full overflow-hidden">
            <Image
              src="https://randomuser.me/api/portraits/men/1.jpg" // Placeholder for current user avatar
              alt="Your avatar"
              fill
              className="object-cover"
            />
          </div>
          <input
            className="flex-1 bg-gray-100 rounded-full px-3 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm focus:outline-none"
            placeholder="Write a comment..."
          />
        </div>
      </div>

      {/* Sample Comment (to match screenshot; can be made dynamic later) */}
      <div className="px-3 sm:px-4 pb-3 sm:pb-4">
        <div className="flex gap-2 sm:gap-3">
          <div className="relative h-6 w-6 sm:h-8 sm:w-8 rounded-full overflow-hidden">
            <Image
              src="https://randomuser.me/api/portraits/men/65.jpg" // Placeholder for commenter avatar
              alt="Commenter"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="bg-gray-100 rounded-lg px-3 sm:px-4 py-1 sm:py-2">
              <p className="font-semibold text-xs sm:text-sm">Stefan Sagmeister</p>
              <p className="text-xs sm:text-sm">Everybody who is honest is interesting.</p>
            </div>
            <div className="flex gap-3 sm:gap-4 text-xs text-gray-600 mt-1">
              <button>Like</button>
              <button>Reply</button>
              <span>7w</span>
            </div>
          </div>
        </div>
        <button className="text-xs sm:text-sm text-gray-600 mt-2">View more comments</button>
      </div>
    </div>
  );
}