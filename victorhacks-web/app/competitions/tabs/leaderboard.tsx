import { Card, CardBody } from "@nextui-org/react";

export default function LeaderboardTab() {
  // You can add state and fetch logic here for the leaderboard data
  const leaderboardData = [
    { rank: 1, team: "Team Alpha", score: 95.5 },
    { rank: 2, team: "Team Beta", score: 92.3 },
    { rank: 3, team: "Team Gamma", score: 89.7 },
  ];

  return (
    <Card>
      <CardBody>
        <h2 className="text-xl font-semibold">Competition Leaderboard</h2>
        <div className="mt-4">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Rank</th>
                <th className="text-left py-2">Team</th>
                <th className="text-left py-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map((team) => (
                <tr key={team.rank} className="border-b">
                  <td className="py-2">{team.rank}</td>
                  <td className="py-2">{team.team}</td>
                  <td className="py-2">{team.score}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  );
}