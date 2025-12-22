"use client";

import { useEffect, useState } from "react";
import profileData from "@/data/profile.json";
import Avatar from "../ui/Avatar";
import ImageComponent from "../ui/ImageComponent";
import Button from "../ui/Button";
import Skeleton from "../ui/Skeleton";
import { Profile } from "@/src/types/profile";
import { FaInfoCircle, FaHeart, FaFacebookMessenger } from "react-icons/fa";
import ProfileTabBar from "./ProfileTabBar";

const profile = profileData as Profile;

export default function ProfileHeader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white rounded-lg overflow-hidden shadow-sm">
      {/* Cover Image */}
      <div className="relative w-full rounded-md h-45 sm:h-60 md:h-86 bg-gray-300">
        {loading ? (
          <div className="w-full h-full bg-gray-300 animate-pulse rounded-md" />
        ) : (
          <ImageComponent
            src={profile.coverImage}
            alt="Cover"
            className="object-cover rounded-md"
            priority
            fill
          />
        )}
      </div>

      {/* Profile Info */}
      <div className="relative -mt-16 sm:-mt-20 md:-mt-16 px-4 md:px-6 z-10">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-4">

          {/* Avatar + Name */}
          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 text-center md:text-left">
            {loading ? (
              <div className="w-24 h-24 rounded-full bg-gray-300 animate-pulse border-4 border-white" />
            ) : (
              <Avatar src={profile.avatar} size="xl" />
            )}

            <div className="md:mt-12 w-full">
              {loading ? (
                <div className="space-y-2 w-40">
                  <Skeleton />
                  <Skeleton />
                </div>
              ) : (
                <>
                  <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
                    {profile.name}
                  </h1>
                  <p className="text-sm text-gray-600">
                    {profile.followers}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mb-6">
            {loading ? (
              <>
                <div className="w-28 h-9 bg-gray-200 animate-pulse rounded-md" />
                <div className="w-20 h-9 bg-gray-200 animate-pulse rounded-md" />
                <div className="w-24 h-9 bg-gray-200 animate-pulse rounded-md" />
              </>
            ) : (
              <>
                <Button className="bg-[#0866FF] text-white rounded-md font-semibold flex items-center px-4 py-2 text-sm">
                  <FaInfoCircle className="mr-2" /> Learn more
                </Button>

                <Button className="bg-gray-200 font-semibold rounded-md flex items-center px-4 py-2 text-sm">
                  <FaHeart className="mr-2" /> Liked
                </Button>

                <Button className="bg-gray-200 font-semibold rounded-md flex items-center px-4 py-2 text-sm">
                  <FaFacebookMessenger className="mr-2" /> Message
                </Button>
              </>
            )}
          </div>
        </div>

        <div className="border border-gray-300 mt-2" />
      </div>

      {/* Tabs */}
      {!loading && <ProfileTabBar />}
    </section>
  );
}
