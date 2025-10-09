import { Trophy, Medal, Crown, TrendingUp } from 'lucide-react';

const mockLeaderboard = [
  { rank: 1, username: 'code_master_99', displayName: 'Code Master', totalXp: 15420, solvedCount: 342, streak: 45 },
  { rank: 2, username: 'algo_wizard', displayName: 'Algo Wizard', totalXp: 14230, solvedCount: 318, streak: 38 },
  { rank: 3, username: 'dsa_ninja', displayName: 'DSA Ninja', totalXp: 12850, solvedCount: 285, streak: 42 },
  { rank: 4, username: 'problem_solver', displayName: 'Problem Solver', totalXp: 11940, solvedCount: 267, streak: 28 },
  { rank: 5, username: 'coding_enthusiast', displayName: 'Coding Enthusiast', totalXp: 10825, solvedCount: 241, streak: 31 },
  { rank: 6, username: 'tech_guru_21', displayName: 'Tech Guru', totalXp: 9730, solvedCount: 217, streak: 25 },
  { rank: 7, username: 'binary_beast', displayName: 'Binary Beast', totalXp: 8945, solvedCount: 199, streak: 22 },
  { rank: 8, username: 'graph_geek', displayName: 'Graph Geek', totalXp: 8320, solvedCount: 185, streak: 19 },
  { rank: 9, username: 'dp_master', displayName: 'DP Master', totalXp: 7810, solvedCount: 174, streak: 27 },
  { rank: 10, username: 'tree_traverser', displayName: 'Tree Traverser', totalXp: 7245, solvedCount: 162, streak: 15 },
];

export default function Leaderboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Trophy className="h-7 w-7 text-amber-500" />
          Leaderboard
        </h1>
        <p className="text-slate-600 mt-1">Compete with fellow problem solvers</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 flex-wrap">
        {['All Time', 'This Month', 'This Week', 'Friends'].map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              filter === 'All Time'
                ? 'bg-emerald-600 text-white'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Top 3 Podium */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {/* 2nd Place */}
        <div className="flex flex-col items-center pt-12">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full flex items-center justify-center mb-3 border-4 border-white shadow-lg">
              <span className="text-2xl font-bold text-white">
                {mockLeaderboard[1].username[0].toUpperCase()}
              </span>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-400 rounded-full p-2 border-2 border-white">
              <Medal className="h-5 w-5 text-white" />
            </div>
          </div>
          <h3 className="font-bold text-slate-900 mt-4 text-center">{mockLeaderboard[1].displayName}</h3>
          <p className="text-sm text-slate-600">@{mockLeaderboard[1].username}</p>
          <div className="mt-2 bg-slate-100 px-3 py-1 rounded-full">
            <span className="text-sm font-bold text-slate-700">{mockLeaderboard[1].totalXp} XP</span>
          </div>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-3 border-4 border-white shadow-xl ring-4 ring-amber-200">
              <span className="text-3xl font-bold text-white">
                {mockLeaderboard[0].username[0].toUpperCase()}
              </span>
            </div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 rounded-full p-2 border-2 border-white shadow-lg">
              <Crown className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="font-bold text-slate-900 mt-4 text-center text-lg">{mockLeaderboard[0].displayName}</h3>
          <p className="text-sm text-slate-600">@{mockLeaderboard[0].username}</p>
          <div className="mt-2 bg-gradient-to-r from-amber-400 to-amber-600 px-4 py-1.5 rounded-full">
            <span className="text-sm font-bold text-white">{mockLeaderboard[0].totalXp} XP</span>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center pt-12">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-3 border-4 border-white shadow-lg">
              <span className="text-2xl font-bold text-white">
                {mockLeaderboard[2].username[0].toUpperCase()}
              </span>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-orange-500 rounded-full p-2 border-2 border-white">
              <Medal className="h-5 w-5 text-white" />
            </div>
          </div>
          <h3 className="font-bold text-slate-900 mt-4 text-center">{mockLeaderboard[2].displayName}</h3>
          <p className="text-sm text-slate-600">@{mockLeaderboard[2].username}</p>
          <div className="mt-2 bg-orange-100 px-3 py-1 rounded-full">
            <span className="text-sm font-bold text-orange-700">{mockLeaderboard[2].totalXp} XP</span>
          </div>
        </div>
      </div>

      {/* Rest of Leaderboard */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-600">
          <div className="col-span-1">Rank</div>
          <div className="col-span-4">User</div>
          <div className="col-span-2 text-right">XP</div>
          <div className="col-span-2 text-right">Solved</div>
          <div className="col-span-2 text-right">Streak</div>
          <div className="col-span-1"></div>
        </div>

        <div className="divide-y divide-slate-100">
          {mockLeaderboard.slice(3).map((user) => (
            <div
              key={user.rank}
              className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-slate-50 transition-colors items-center"
            >
              <div className="col-span-1">
                <span className="text-lg font-bold text-slate-700">#{user.rank}</span>
              </div>
              <div className="col-span-4 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  {user.username[0].toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{user.displayName}</p>
                  <p className="text-xs text-slate-500">@{user.username}</p>
                </div>
              </div>
              <div className="col-span-2 text-right">
                <span className="font-bold text-slate-900">{user.totalXp.toLocaleString()}</span>
              </div>
              <div className="col-span-2 text-right">
                <span className="font-semibold text-emerald-600">{user.solvedCount}</span>
              </div>
              <div className="col-span-2 text-right">
                <div className="inline-flex items-center gap-1 bg-orange-50 px-2 py-1 rounded-full">
                  <span className="text-lg">🔥</span>
                  <span className="font-semibold text-orange-700">{user.streak}</span>
                </div>
              </div>
              <div className="col-span-1 flex justify-end">
                <button className="text-slate-400 hover:text-cyan-600 transition-colors">
                  <TrendingUp className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Your Rank Card */}
      <div className="bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-emerald-100 mb-1">Your Rank</p>
            <p className="text-3xl font-bold">#3</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-emerald-100 mb-1">Keep going!</p>
            <p className="text-lg font-semibold">2,380 XP to rank #2</p>
          </div>
        </div>
      </div>
    </div>
  );
}
