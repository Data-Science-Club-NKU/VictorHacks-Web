import { Card, CardBody } from "@nextui-org/react";
import { useState } from "react";

export default function LeaderboardTab() {
  // You can add state and fetch logic here for the leaderboard data
  const [leaderboardData] = useState([
    { rank: 1, team: "Team Alpha", score: 95.5, avatar: "🏆" },
    { rank: 2, team: "Team Beta", score: 92.3, avatar: "🥈" },
    { rank: 3, team: "Team Gamma", score: 89.7, avatar: "🥉" },
    { rank: 4, team: "Team Delta", score: 85.2, avatar: "⭐" },
    { rank: 5, team: "Team Epsilon", score: 82.9, avatar: "⭐" },
  ]);

  return (
    <Card className="shadow-lg border-none bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl">
      <CardBody>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Competition Leaderboard
          </h2>
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-xs font-medium">
            Live Rankings
          </div>
        </div>
        
        <div className="mt-4 overflow-hidden rounded-xl">
          {leaderboardData.map((team, index) => (
            <div 
              key={team.rank} 
              className={`flex items-center p-4 ${
                index % 2 === 0 
                  ? "bg-white dark:bg-gray-800" 
                  : "bg-gray-50 dark:bg-gray-850"
              } ${
                team.rank === 1 
                  ? "bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/10 border-l-4 border-yellow-400" 
                  : ""
              } transition-all hover:bg-gray-100 dark:hover:bg-gray-750`}
            >
              <div className="flex items-center">
                <div className={`
                  w-10 h-10 flex items-center justify-center rounded-full mr-4
                  ${team.rank === 1 ? "bg-yellow-400 text-white" : 
                    team.rank === 2 ? "bg-gray-300 text-gray-800" : 
                    team.rank === 3 ? "bg-amber-600 text-white" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"}
                `}>
                  {team.avatar}
                </div>
                <div className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {team.team}
                </div>
              </div>
              
              <div className="ml-auto flex items-center">
                <div className="px-3 py-1 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 font-mono text-sm mr-2">
                  {team.score.toFixed(1)}
                </div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 w-8 text-center">
                  #{team.rank}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors">
            View Complete Rankings
          </button>
          <p className="mt-3 text-xs text-gray-500 dark:text-gray-400">
            Last updated: Today at 2:45 PM • Rankings refresh every 5 minutes
          </p>
        </div>
      </CardBody>
    </Card>
  );
}