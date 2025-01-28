'use client';

import { FlickeringGrid } from "./ui/flickering-grid";
import { JSX } from "react";

const Tracks = (): JSX.Element => {
  const tracks = [
    {
      title: "AI & Machine Learning",
      description: "Explore the latest advancements in AI and machine learning to solve real-world problems.",
    },
    {
      title: "Web Development",
      description: "Dive into modern web technologies to build responsive and dynamic web applications.",
    },
    {
      title: "Cybersecurity",
      description: "Learn about securing digital systems and protecting against cyber threats.",
    },
    {
      title: "Blockchain & FinTech",
      description: "Discover the world of blockchain technology and its impact on financial ecosystems.",
    },
  ];

  return (
    <div className="relative w-full h-full py-20 overflow-hidden">
      {/* Flickering Horizontal Background */}
      <div className="absolute inset-0 flex justify-center">
        <FlickeringGrid
                  className="relative w-full h-64 z-0"
                  squareSize={4}
                  gridGap={6}
                  color="#60A5FA"
                  maxOpacity={0.5}
                  flickerChance={0.1}
                  height={1000} // Keep grid height small for horizontal focus
                  width={2000} // Ensure it spans the entire width
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-6">
        <h1 className="text-5xl font-extrabold text-black mb-10">TRACKS</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl w-full">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="bg-card bg-opacity-80 rounded-lg shadow-md p-6 text-left transition-transform transform hover:scale-105"
            >
              <h2 className="text-2xl font-bold text-black mb-2">{track.title}</h2>
              <p className="text-sm text-black">{track.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tracks;
