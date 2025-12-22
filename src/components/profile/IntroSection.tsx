import {
  FaInfoCircle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaGlobe,
  FaClock,
  FaStar,
} from "react-icons/fa";

import profileData from "@/data/profile.json";

export default function IntroSection() {
  return (
    <section className="bg-white rounded-lg p-4 shadow-sm">
      {/* Title */}
      <h2 className="text-lg font-bold mb-3">Intro</h2>

      {/* Bio */}
      <p className="text-sm text-gray-700 mb-4 leading-relaxed">
        {profileData.bio}
      </p>

      {/* Info List */}
      <div className="space-y-3 text-sm text-gray-700">
        {/* Page type */}
        <div className="flex items-start gap-3">
          <FaInfoCircle className="text-gray-500 mt-1" />
          <span>Page · Advertising Agency</span>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3">
          <FaMapMarkerAlt className="text-gray-500 mt-1" />
          <span>{profileData.location}</span>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-3">
          <FaPhoneAlt className="text-gray-500 mt-1" />
          <span>{profileData.phone}</span>
        </div>

        {/* Email (static like Facebook demo) */}
        <div className="flex items-start gap-3">
          <FaGlobe className="text-gray-500 mt-1" />
          <a
            href={profileData.website}
            target="_blank"
            className="text-blue-600 hover:underline break-all"
          >
            {profileData.website.replace("https://", "")}
          </a>
        </div>

        {/* Working hours */}
        <div className="flex items-start gap-3">
          <FaClock className="text-gray-500 mt-1" />
          <span>{profileData.workingHours}</span>
        </div>

        {/* Rating */}
        <div className="flex items-start gap-3">
          <FaStar className="text-gray-500 mt-1" />
          <span>
            Rating · <strong>4.6</strong> (48 Reviews)
          </span>
        </div>
      </div>
    </section>
  );
}
