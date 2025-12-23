import Image from "next/image";
import { FaThumbsUp, FaComment, FaShare, FaEllipsisH, FaGlobeAmericas } from "react-icons/fa";

type SkeletonPostCardProps = {};

export default function SkeletonPostCard({}: SkeletonPostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-4 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-3 sm:p-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full overflow-hidden bg-gray-200 animate-pulse" />
          <div className="space-y-2">
            <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
            <div className="flex items-center gap-1">
              <div className="h-2 w-16 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-3 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
        <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
      </div>

      {/* Content */}
      <div className="px-3 sm:px-4 pb-2 space-y-2">
        <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
        <div className="h-3 w-3/4 bg-gray-200 rounded animate-pulse" />
      </div>

      {/* Image Placeholder */}
      <div className="relative w-full h-[180px] sm:h-[280px] md:h-[380px] bg-gray-200 animate-pulse" />

      {/* Reactions Summary */}
      <div className="flex justify-between px-3 sm:px-4 py-1 sm:py-2">
        <div className="flex items-center gap-1">
          <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse" />
          <div className="h-3 w-32 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex gap-2 sm:gap-4">
          <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
          <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Actions */}
      <div className="flex justify-around py-2">
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-3 w-12 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-3 w-16 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="h-4 w-4 bg-gray-200 rounded animate-pulse" />
          <div className="h-3 w-12 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      {/* Comment Input */}
      <div className="px-3 sm:px-4 py-2 border-t border-gray-200">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative h-6 w-6 sm:h-8 sm:w-8 rounded-full overflow-hidden bg-gray-200 animate-pulse" />
          <div className="flex-1 h-8 bg-gray-200 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Sample Comment */}
      <div className="px-3 sm:px-4 pb-3 sm:pb-4">
        <div className="flex gap-2 sm:gap-3">
          <div className="relative h-6 w-6 sm:h-8 sm:w-8 rounded-full overflow-hidden bg-gray-200 animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="bg-gray-100 rounded-lg px-3 sm:px-4 py-1 sm:py-2 space-y-1">
              <div className="h-3 w-24 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="flex gap-3 sm:gap-4">
              <div className="h-2 w-12 bg-gray-200 rounded animate-pulse" />
              <div className="h-2 w-12 bg-gray-200 rounded animate-pulse" />
              <div className="h-2 w-8 bg-gray-200 rounded animate-pulse" />
            </div>
          </div>
        </div>
        <div className="h-3 w-32 bg-gray-200 rounded animate-pulse mt-2" />
      </div>
    </div>
  );
}