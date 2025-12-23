"use client";

import { useState, useEffect } from "react";
import PostCard from "./PostCard";
import SkeletonPostCard from "@/src/components/ui/Skeleton";
import postsData from "@/data/posts.json"; 
import { Post } from "@/src/types/post";
import { FaFilter } from "react-icons/fa";

const posts: Post[] = postsData;

export default function PostFeed() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-4 bg-white px-4 py-2 rounded-t-lg shadow-sm">
        <h2 className="text-lg font-semibold text-gray-800">Posts</h2>
        <button className="text-gray-500 hover:text-gray-700 flex items-center gap-1">
          <FaFilter size={16} />
          <span className="text-sm">Filters</span>
        </button>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        {isLoading ? (
          <>
            <SkeletonPostCard />
            <SkeletonPostCard />
            <SkeletonPostCard />
            {/* Add more skeletons as needed for better UX */}
          </>
        ) : (
          posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))
        )}
      </div>
    </div>
  );
}