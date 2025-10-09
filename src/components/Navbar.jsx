import { Code2, User, Trophy, BookOpen } from 'lucide-react';

export default function Navbar({ currentView, onViewChange, userProfile }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BookOpen },
    { id: 'sheets', label: 'Sheets', icon: Code2 },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-emerald-400" />
              <span className="text-xl font-bold">DSA Fusion Hub</span>
            </div>

            <div className="hidden md:flex space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onViewChange(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                      currentView === item.id
                        ? 'bg-emerald-600 text-white'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="hidden sm:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 bg-slate-800 px-3 py-1.5 rounded-lg">
                <Trophy className="h-4 w-4 text-amber-400" />
                <span className="text-slate-300">{userProfile.totalXp} XP</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-800 px-3 py-1.5 rounded-lg">
                <span className="text-2xl">🔥</span>
                <span className="text-slate-300">{userProfile.currentStreak} Day Streak</span>
              </div>
            </div>

            <div className="flex items-center space-x-2 bg-slate-800 px-3 py-2 rounded-lg">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-full flex items-center justify-center text-sm font-bold">
                {userProfile.username[0].toUpperCase()}
              </div>
              <span className="hidden sm:inline text-sm text-slate-300">{userProfile.username}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
