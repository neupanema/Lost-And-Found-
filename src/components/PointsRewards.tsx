import { ArrowLeft, Award, TrendingUp, Star, Sparkles } from 'lucide-react';
import type { Screen } from '../App';

interface PointsRewardsProps {
  onNavigate: (screen: Screen) => void;
  userPoints: number;
}

export function PointsRewards({ onNavigate, userPoints }: PointsRewardsProps) {
  const badges = [
    { id: 1, name: 'Helper', icon: '🤝', earned: true, description: 'Report 5 found items' },
    { id: 2, name: 'Finder', icon: '🔍', earned: true, description: 'Find 3 lost items' },
    { id: 3, name: 'Top Contributor', icon: '⭐', earned: true, description: 'Earn 100 points' },
    { id: 4, name: 'Community Hero', icon: '🏆', earned: false, description: 'Earn 500 points' },
    { id: 5, name: 'AI Master', icon: '🤖', earned: false, description: 'Use AI detection 10 times' },
    { id: 6, name: 'Good Samaritan', icon: '💚', earned: false, description: 'Report 20 found items' }
  ];

  const activities = [
    { id: 1, action: 'Found item reported', points: 30, time: '2 hours ago', type: 'earn' },
    { id: 2, action: 'Item retrieved', points: 10, time: '5 hours ago', type: 'earn' },
    { id: 3, action: 'AI detection used', points: 5, time: '1 day ago', type: 'earn' },
    { id: 4, action: 'Found item reported', points: 30, time: '2 days ago', type: 'earn' }
  ];

  const progressPercentage = (userPoints / 500) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-500 to-orange-600 px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        <button
          onClick={() => onNavigate('home')}
          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 hover:bg-white/30 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-white text-3xl mb-2">Points & Rewards</h1>
        <p className="text-amber-100">Track your contributions</p>
      </div>

      <div className="px-6 py-6">
        {/* Points Display */}
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 rounded-3xl shadow-xl mb-6 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-amber-100 mb-2">Total Points</p>
              <p className="text-white text-5xl">{userPoints}</p>
              <p className="text-amber-100 text-sm mt-2 flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                Keep going!
              </p>
            </div>
            
            {/* Progress Ring */}
            <div className="relative w-28 h-28">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="8"
                />
                {/* Progress circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="white"
                  strokeWidth="8"
                  strokeDasharray={`${progressPercentage * 2.51} 251`}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Sparkles className="w-10 h-10 text-white animate-pulse" />
              </div>
            </div>
          </div>

          {/* Progress to next level */}
          <div className="mt-6 relative">
            <div className="flex items-center justify-between text-amber-100 text-sm mb-2">
              <span>Progress to Community Hero</span>
              <span>{userPoints}/500</span>
            </div>
            <div className="h-2 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="mb-6">
          <h2 className="text-slate-800 text-xl mb-4">Achievements</h2>
          <div className="grid grid-cols-3 gap-3">
            {badges.map((badge) => (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl text-center transition-all ${
                  badge.earned
                    ? 'bg-gradient-to-br from-amber-100 to-yellow-100 border-2 border-amber-300 shadow-md'
                    : 'bg-slate-100 border-2 border-slate-200 opacity-50'
                }`}
              >
                <div className="text-4xl mb-2">{badge.icon}</div>
                <p className={`text-xs ${badge.earned ? 'text-amber-900' : 'text-slate-500'}`}>
                  {badge.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How to Earn Points */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-5 rounded-2xl border border-blue-200 mb-6">
          <h3 className="text-blue-900 mb-3 flex items-center gap-2">
            <Star className="w-5 h-5" />
            How to Earn Points
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between text-blue-800">
              <span>Report a found item</span>
              <span className="bg-blue-200 px-3 py-1 rounded-full">+30</span>
            </div>
            <div className="flex items-center justify-between text-blue-800">
              <span>Successfully retrieve your item</span>
              <span className="bg-blue-200 px-3 py-1 rounded-full">+10</span>
            </div>
            <div className="flex items-center justify-between text-blue-800">
              <span>Use AI detection</span>
              <span className="bg-blue-200 px-3 py-1 rounded-full">+5</span>
            </div>
          </div>
        </div>

        {/* Leaderboard Button */}
        <button
          onClick={() => onNavigate('leaderboard')}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all mb-6 flex items-center justify-center gap-2"
        >
          <Award className="w-5 h-5" />
          <span>View Leaderboard</span>
        </button>

        {/* Recent Activity */}
        <div className="mb-8">
          <h2 className="text-slate-800 text-xl mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white p-4 rounded-2xl shadow-md border border-slate-100 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    activity.type === 'earn' ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    {activity.type === 'earn' ? (
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    ) : (
                      <Award className="w-5 h-5 text-red-600" />
                    )}
                  </div>
                  <div>
                    <p className="text-slate-800">{activity.action}</p>
                    <p className="text-slate-500 text-sm">{activity.time}</p>
                  </div>
                </div>
                <div className={`px-3 py-1.5 rounded-full ${
                  activity.type === 'earn' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {activity.type === 'earn' ? '+' : '-'}{activity.points}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
