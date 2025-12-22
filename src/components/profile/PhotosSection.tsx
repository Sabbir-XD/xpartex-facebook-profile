"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Skeleton from "../ui/Skeleton";

const photos = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7",
  "https://images.unsplash.com/photo-1519682337058-a94d519337bc",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
];

export default function PhotosSection() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white rounded-lg p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold">Photos</h2>
        <button className="text-sm text-blue-600 hover:underline">
          See all photos
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-2">
        {loading
          ? Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-md overflow-hidden"
              >
                <Skeleton />
              </div>
            ))
          : photos.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-md overflow-hidden bg-gray-200"
              >
                <Image
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
      </div>
    </section>
  );
}
