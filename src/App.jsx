import { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SheetsView from './components/SheetsView';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';
import { mockUserProfile, mockUserProgress, mockQuestions, mockTopics } from './data/mockData';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');

  const stats = {
    totalSolved: mockUserProgress.filter(p => p.status === 'solved').length,
    easySolved: mockUserProgress.filter(p => {
      const q = mockQuestions.find(q => q.id === p.questionId);
      return p.status === 'solved' && q?.difficulty === 'Easy';
    }).length,
    mediumSolved: mockUserProgress.filter(p => {
      const q = mockQuestions.find(q => q.id === p.questionId);
      return p.status === 'solved' && q?.difficulty === 'Medium';
    }).length,
    hardSolved: mockUserProgress.filter(p => {
      const q = mockQuestions.find(q => q.id === p.questionId);
      return p.status === 'solved' && q?.difficulty === 'Hard';
    }).length,
    topicProgress: mockTopics.reduce((acc, topic) => {
      const topicQuestions = mockQuestions.filter(q => q.topicId === topic.id);
      const solvedInTopic = mockUserProgress.filter(p => {
        const q = mockQuestions.find(q => q.id === p.questionId);
        return p.status === 'solved' && q?.topicId === topic.id;
      });

      if (topicQuestions.length > 0) {
        acc[topic.name] = {
          solved: solvedInTopic.length,
          total: topicQuestions.length,
        };
      }
      return acc;
    }, {}),
    currentStreak: mockUserProfile.currentStreak,
    longestStreak: mockUserProfile.longestStreak,
    totalXp: mockUserProfile.totalXp,
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard stats={stats} />;
      case 'sheets':
        return <SheetsView />;
      case 'leaderboard':
        return <Leaderboard />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard stats={stats} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar
        currentView={currentView}
        onViewChange={setCurrentView}
        userProfile={{
          username: mockUserProfile.username,
          totalXp: mockUserProfile.totalXp,
          currentStreak: mockUserProfile.currentStreak,
        }}
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderView()}
      </main>
    </div>
  );
}

export default App;
