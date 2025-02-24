"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import { MagicCard } from "@/components/ui/magic-card";

export function CompetitionCard({ title, href }: { title: string; href: string }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const router = useRouter(); // Initialize router

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
  }, []);

  return (
    <div className="relative h-[250px] w-full cursor-pointer transition-all duration-300 ease-in-out">
      {/* Card Component */}
      <MagicCard
        className="flex flex-col items-center justify-center text-2xl font-semibold p-6 rounded-lg transition-all duration-300 ease-in-out"
        gradientColor={isDarkMode ? "#262626" : "#D9D9D955"}
      >
        {/* Competition Title */}
        <span className="text-center mb-4">{title}</span>

        <div>
          <button
            onClick={() => router.push(href)}
            className="text-sm rounded-full px-8 py-2 text-center bg-gray-300 hover:bg-gray-400 transition-all duration-200"
          >
            View
          </button>
        </div>
      </MagicCard>
    </div>
  );
}
