"use client";

import { CompetitionCard } from "@/components/CompetitionCard";

export default function Dashboard() {
  const competitions = [
    { title: "AI Mathematical Olympiad", href: "/competitions" },
    { title: "Deep Learning Challenge", href: "/competitions/deep-learning" },
    { title: "Computer Vision Hackathon", href: "/competitions/vision-hackathon" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {competitions.map((comp, index) => (
        <CompetitionCard key={index} title={comp.title} href={comp.href} />
      ))}
    </div>
  );
}
