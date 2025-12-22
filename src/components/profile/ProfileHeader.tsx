import profileData from "@/data/profile.json";
import Avatar from "../ui/Avatar";
import ImageComponent from "../ui/ImageComponent";
import Button from "../ui/Button";
import { Profile } from "@/src/types/profile";

const profile = profileData as Profile;

export default function ProfileHeader() {
  return (
    <section className="bg-white rounded-lg overflow-hidden">
      {/* Cover Image */}
      <div className="relative w-full h-80 bg-gray-300">
        <ImageComponent
          src={profile.coverImage}
          alt="Cover"
          className="object-cover"
          priority
          fill
        />

        {/* Profile Info */}
        <div className="absolute left-0 bottom-0 w-full px-6">
          {/* 👇 translate applied to whole row */}
          <div className="flex items-center justify-between translate-y-1/2">
            
            {/* Avatar + Name */}
            <div className="flex items-center gap-4">
              <Avatar src={profile.avatar} size="xl" />

              <div>
                <h1 className="text-2xl font-bold">{profile.name}</h1>
                <p className="text-sm text-gray-600">
                  {profile.followers}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <Button className="bg-[#0866FF] text-white rounded-md font-semibold">
                Learn more
              </Button>
              <Button className="bg-gray-200 font-semibold rounded-md">
                Liked
              </Button>
              <Button className="bg-gray-200 font-semibold rounded-md">
                Message
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-24" />
    </section>
  );
}
