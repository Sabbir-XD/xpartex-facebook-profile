"use client";

import { useState } from "react";
import { FaChevronDown, FaEllipsisH } from "react-icons/fa";
import Button from "../ui/Button";

const tabs = [
  "Posts",
  "About",
  "Friends",
  "Photos",
  "Reels",
  "Check-ins",
  "More",
];

export default function ProfileTabBar() {
  const [activeTab, setActiveTab] = useState("Posts");

  return (
    <section className="bg-white border-t border-gray-200 ">
      <div className="flex items-center justify-between px-3 md:px-6">

        {/* Tabs */}
        <div className="flex items-center gap-4">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  relative items-center gap-4 py-5 ml-3 text-sm font-semibold
                  whitespace-nowrap transition-colors
                  ${isActive ? "text-blue-600" : "text-gray-600 hover:text-gray-800"}

                  /* Mobile hide logic */
                  ${
                    index > 2 && tab !== "More"
                      ? "hidden md:flex"
                      : "flex"
                  }
                `}
              >
                {tab}

                {tab === "More" && (
                  <FaChevronDown className="text-xs mt-1" />
                )}

                {isActive && (
                  <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-600 rounded-t-md" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right menu */}
        <Button className="rounded-md bg-gray-200 transition">
          <FaEllipsisH className="text-gray-600 text-lg" />
        </Button>
      </div>
    </section>
  );
}
