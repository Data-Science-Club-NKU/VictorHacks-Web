'use client';

import { FlickeringGrid } from "./ui/flickering-grid";
import { OrbitingCircles } from "./ui/orbiting-circles";
import { JSX } from "react";
import { SiPytorch, SiTensorflow, SiPython, SiJavascript, SiNextdotjs, SiReact, SiDocker, SiKubernetes, SiPostgresql, SiMongodb, SiGraphql, SiTypescript, SiFigma } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaAws } from "react-icons/fa";

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

const Tracks = (): JSX.Element => {
  return (
    <div className="relative w-full h-full py-20 overflow-hidden">
      {/* Flickering Horizontal Background */}
      <div className="absolute inset-0 flex justify-center">
        <FlickeringGrid
          className="relative w-full h-64 z-0"
          squareSize={4}
          gridGap={6}
          color="#60A5FA"
          maxOpacity={0.3}
          flickerChance={0.1}
          height={1000} // Keep grid height small for horizontal focus
          width={2000} // Ensure it spans the entire width
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-2">
        <h1 className="text-5xl font-light font-Tomorrow bg-gradient-to-b from-black to-gray-400 bg-clip-text text-transparent dark:from-white dark:to-black mb-10">TRACKS</h1>
        <div className="flex flex-row justify-between items-center max-w-7xl w-full px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 flex-grow">
            {tracks.map((track, index) => (
              <div
                key={index}
                className="relative bg-white bg-opacity-80 rounded-lg shadow-lg p-8 text-left transition-transform transform hover:scale-105"
              >
                <h2 className="text-2xl font-bold text-black mb-3">{track.title}</h2>
                <p className="text-md text-gray-700">{track.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center w-[400px] h-[400px] relative px-16 ml-32">
            <div className="absolute w-[280px] h-[280px]  border-gray-600 rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold bg-gradient-to-b from-black to-gray-400 bg-clip-text text-transparent dark:from-white dark:to-black">Build & Innovate</span>
            </div>
            <OrbitingCircles iconSize={50} radius={160} speed={1.2}>
              <VscAzure size={50} className="text-blue-500" />
              <FaAws size={50} className="text-yellow-500" />
              <SiPytorch size={50} className="text-orange-500" />
              <SiTensorflow size={50} className="text-red-500" />
              <SiPython size={50} className="text-blue-400" />
              <SiJavascript size={50} className="text-yellow-300" />
              <SiNextdotjs size={50} className="text-black" />
            </OrbitingCircles>
            <OrbitingCircles iconSize={40} radius={210} speed={1.5} reverse>
              <SiDocker size={40} className="text-blue-500" />
              <SiKubernetes size={40} className="text-blue-600" />
              <SiPostgresql size={40} className="text-blue-700" />
              <SiMongodb size={40} className="text-green-500" />
              <SiGraphql size={40} className="text-pink-500" />
              <SiTypescript size={40} className="text-blue-400" />
              <SiFigma size={40} className="text-purple-500" />
              <SiReact size={50} className="text-blue-400" />
            </OrbitingCircles>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
