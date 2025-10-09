import { Trophy, Target, Flame, TrendingUp, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import QuestionList from './QuestionList';

export default function Dashboard({ stats }) {
  const difficultyProgress = [
    {
      label: 'Easy',
      solved: stats.easySolved,
      total: 150,
      color: 'bg-emerald-500',
      textColor: 'text-emerald-600'
    },
    {
      label: 'Medium',
      solved: stats.mediumSolved,
      total: 200,
      color: 'bg-amber-500',
      textColor: 'text-amber-600'
    },
    {
      label: 'Hard',
      solved: stats.hardSolved,
      total: 100,
      color: 'bg-rose-500',
      textColor: 'text-rose-600'
    },
  ];

  const topTopics = Object.entries(stats.topicProgress)
    .map(([topic, progress]) => ({
      name: topic,
      ...progress,
      percentage: Math.round((progress.solved / progress.total) * 100),
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 5);

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={CheckCircle2}
          label="Total Solved"
          value={stats.totalSolved}
          subtext={`of ${difficultyProgress.reduce((acc, d) => acc + d.total, 0)} questions`}
          iconColor="text-emerald-500"
          bgColor="bg-emerald-50"
        />
        <StatCard
          icon={Flame}
          label="Current Streak"
          value={`${stats.currentStreak} days`}
          subtext={`Longest: ${stats.longestStreak} days`}
          iconColor="text-orange-500"
          bgColor="bg-orange-50"
        />
        <StatCard
          icon={Trophy}
          label="Total XP"
          value={stats.totalXp}
          subtext="Keep grinding!"
          iconColor="text-amber-500"
          bgColor="bg-amber-50"
        />
        <StatCard
          icon={Target}
          label="Completion Rate"
          value={`${Math.round((stats.totalSolved / difficultyProgress.reduce((acc, d) => acc + d.total, 0)) * 100)}%`}
          subtext="Overall progress"
          iconColor="text-cyan-500"
          bgColor="bg-cyan-50"
        />
      </div>

      {/* Difficulty Progress */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-6">Progress by Difficulty</h2>
        <div className="space-y-6">
          {difficultyProgress.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-slate-700">{item.label}</span>
                <span className={`text-sm font-semibold ${item.textColor}`}>
                  {item.solved} / {item.total}
                </span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                <div
                  className={`h-full ${item.color} rounded-full transition-all duration-500 ease-out`}
                  style={{ width: `${(item.solved / item.total) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Topic Progress */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-6 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-cyan-500" />
            Top Topics Progress
          </h2>
          <div className="space-y-4">
            {topTopics.map((topic) => (
              <div key={topic.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-700">{topic.name}</span>
                  <span className="text-xs font-semibold text-slate-500">
                    {topic.solved}/{topic.total} ({topic.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${topic.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-6">Quick Actions</h2>
          <div className="space-y-3">
            <ActionButton
              icon={Clock}
              label="Continue Learning"
              description="Resume from where you left off"
              color="bg-emerald-500 hover:bg-emerald-600"
            />
            <ActionButton
              icon={AlertCircle}
              label="Review Mistakes"
              description="Practice questions marked for revision"
              color="bg-amber-500 hover:bg-amber-600"
            />
            <ActionButton
              icon={Target}
              label="Random Practice"
              description="Get a random unsolved question"
              color="bg-cyan-500 hover:bg-cyan-600"
            />
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <h2 className="text-lg font-semibold text-slate-900 mb-6">Recent Questions</h2>
        <QuestionList filter="recent" limit={5} />
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, subtext, iconColor, bgColor }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`${bgColor} p-3 rounded-lg`}>
          <Icon className={`h-6 w-6 ${iconColor}`} />
        </div>
      </div>
      <div>
        <p className="text-2xl font-bold text-slate-900">{value}</p>
        <p className="text-sm font-medium text-slate-600 mt-1">{label}</p>
        <p className="text-xs text-slate-500 mt-1">{subtext}</p>
      </div>
    </div>
  );
}

function ActionButton({ icon: Icon, label, description, color }) {
  return (
    <button className="w-full flex items-start space-x-3 p-4 rounded-lg border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all text-left group">
      <div className={`${color} p-2 rounded-lg transition-colors`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-slate-900 group-hover:text-slate-700">{label}</p>
        <p className="text-xs text-slate-500 mt-0.5">{description}</p>
      </div>
    </button>
  );
}
