import { Trophy, Calendar, Flame, Target, Award, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { mockUserProfile, mockBadges } from '../data/mockData';

export default function Profile() {
  const earnedBadges = mockBadges.slice(0, 2);
  const lockedBadges = mockBadges.slice(2);

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-xl p-8 text-white">
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-4xl font-bold text-emerald-600">
            {mockUserProfile.username[0].toUpperCase()}
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-2">{mockUserProfile.displayName || mockUserProfile.username}</h1>
            <p className="text-emerald-100 text-lg mb-4">@{mockUserProfile.username}</p>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                <span className="font-semibold">{mockUserProfile.totalXp} XP</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="h-5 w-5" />
                <span className="font-semibold">{mockUserProfile.currentStreak} Day Streak</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span className="font-semibold">Joined Oct 2025</span>
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-lg font-medium transition-colors">
            Edit Profile
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Stats Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Achievement Stats */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center">
              <Target className="h-5 w-5 mr-2 text-cyan-500" />
              Statistics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatBox icon={CheckCircle2} label="Total Solved" value="3" color="text-emerald-600" bgColor="bg-emerald-50" />
              <StatBox icon={Clock} label="In Progress" value="2" color="text-amber-600" bgColor="bg-amber-50" />
              <StatBox icon={AlertCircle} label="Need Revision" value="2" color="text-rose-600" bgColor="bg-rose-50" />
              <StatBox icon={Flame} label="Best Streak" value={mockUserProfile.longestStreak} color="text-orange-600" bgColor="bg-orange-50" />
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              <ActivityItem
                action="Solved"
                title="Two Sum"
                difficulty="Easy"
                time="2 hours ago"
                color="text-emerald-600"
              />
              <ActivityItem
                action="Solved"
                title="Best Time to Buy and Sell Stock"
                difficulty="Easy"
                time="1 day ago"
                color="text-emerald-600"
              />
              <ActivityItem
                action="Marked for revision"
                title="Maximum Subarray"
                difficulty="Medium"
                time="2 days ago"
                color="text-amber-600"
              />
              <ActivityItem
                action="Solved"
                title="Contains Duplicate"
                difficulty="Easy"
                time="3 days ago"
                color="text-emerald-600"
              />
            </div>
          </div>

          {/* Progress by Topic */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Progress by Topic</h2>
            <div className="space-y-4">
              <TopicProgress topic="Arrays" solved={2} total={50} />
              <TopicProgress topic="Dynamic Programming" solved={1} total={40} />
              <TopicProgress topic="Strings" solved={1} total={35} />
              <TopicProgress topic="Linked Lists" solved={0} total={25} />
              <TopicProgress topic="Trees" solved={0} total={30} />
            </div>
          </div>
        </div>

        {/* Badges Column */}
        <div className="space-y-6">
          {/* Earned Badges */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center justify-between">
              <span className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-amber-500" />
                Earned Badges
              </span>
              <span className="text-sm font-medium text-slate-500">{earnedBadges.length}/{mockBadges.length}</span>
            </h2>
            <div className="space-y-3">
              {earnedBadges.map((badge) => (
                <div
                  key={badge.id}
                  className="flex items-start gap-3 p-3 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg"
                >
                  <div className="bg-gradient-to-br from-amber-400 to-orange-500 p-2 rounded-lg">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-900">{badge.name}</p>
                    <p className="text-xs text-slate-600 mt-0.5">{badge.description}</p>
                    <p className="text-xs font-semibold text-amber-700 mt-1">+{badge.xpReward} XP</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Locked Badges */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">Locked Badges</h2>
            <div className="space-y-3">
              {lockedBadges.map((badge) => (
                <div
                  key={badge.id}
                  className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg opacity-60"
                >
                  <div className="bg-slate-300 p-2 rounded-lg">
                    <Award className="h-5 w-5 text-slate-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-700">{badge.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{badge.description}</p>
                    <p className="text-xs font-semibold text-slate-600 mt-1">+{badge.xpReward} XP</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatBox({ icon: Icon, label, value, color, bgColor }) {
  return (
    <div className="text-center">
      <div className={`${bgColor} p-3 rounded-lg inline-flex mb-2`}>
        <Icon className={`h-6 w-6 ${color}`} />
      </div>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
      <p className="text-xs text-slate-600 mt-1">{label}</p>
    </div>
  );
}

function ActivityItem({ action, title, difficulty, time, color }) {
  const difficultyColor = {
    Easy: 'text-emerald-600 bg-emerald-50',
    Medium: 'text-amber-600 bg-amber-50',
    Hard: 'text-rose-600 bg-rose-50',
  }[difficulty];

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors">
      <div className="mt-0.5">
        <div className={`w-2 h-2 rounded-full ${color === 'text-emerald-600' ? 'bg-emerald-500' : 'bg-amber-500'}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm text-slate-900">
          <span className={`font-semibold ${color}`}>{action}</span> <span className="font-medium">{title}</span>
        </p>
        <div className="flex items-center gap-2 mt-1">
          <span className={`text-xs font-medium px-2 py-0.5 rounded ${difficultyColor}`}>
            {difficulty}
          </span>
          <span className="text-xs text-slate-500">{time}</span>
        </div>
      </div>
    </div>
  );
}

function TopicProgress({ topic, solved, total }) {
  const percentage = Math.round((solved / total) * 100);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-700">{topic}</span>
        <span className="text-xs text-slate-600 font-semibold">
          {solved}/{total} ({percentage}%)
        </span>
      </div>
      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
