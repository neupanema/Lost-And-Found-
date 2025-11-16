import { useState } from 'react';
import { ArrowLeft, Trophy, Medal, Award, TrendingUp } from 'lucide-react';
import type { Screen } from '../App';

interface LeaderboardProps {
  onNavigate: (screen: Screen) => void;
}

export function Leaderboard({ onNavigate }: LeaderboardProps) {
  const [activeTab, setActiveTab] = useState<'all-time' | 'this-month' | 'campus'>('all-time');

  const topUsers = [
    { rank: 1, name: 'Saugat Dahal', points: 850, badge: 'Gold Helper', avatar: 'SC', color: 'from-amber-400 to-yellow-500' },
    { rank: 2, name: 'Arjun Chaulagain', points: 720, badge: 'Silver Helper', avatar: 'JW', color: 'from-slate-300 to-slate-400' },
    { rank: 3, name: 'Joey Patel', points: 680, badge: 'Finder Pro', avatar: 'MP', color: 'from-orange-400 to-amber-500' },
    { rank: 4, name: 'Alex Johnson', points: 540, badge: 'Top Finder', avatar: 'AJ', color: 'from-blue-400 to-cyan-500' },
    { rank: 5, name: 'Aasirwad Basnet', points: 490, badge: 'Helper Star', avatar: 'ED', color: 'from-purple-400 to-pink-500' },
    { rank: 6, name: 'Srijan Dahal', points: 450, badge: 'Good Soul', avatar: 'CL', color: 'from-green-400 to-emerald-500' },
    { rank: 7, name: 'Taylor Brown', points: 420, badge: 'Helper', avatar: 'TB', color: 'from-indigo-400 to-blue-500' },
    { rank: 8, name: 'Bibek Devkota', points: 380, badge: 'Finder', avatar: 'JK', color: 'from-rose-400 to-pink-500' },
    { rank: 9, name: 'Morgan Garcia', points: 350, badge: 'Helper', avatar: 'MG', color: 'from-teal-400 to-cyan-500' },
    { rank: 10, name: 'Riley Martinez', points: 320, badge: 'Contributor', avatar: 'RM', color: 'from-violet-400 to-purple-500' }
  ];

  const getMedalEmoji = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return null;
  };

  const getMedalColor = (rank: number) => {
    if (rank === 1) return 'from-amber-400 via-yellow-500 to-amber-600';
    if (rank === 2) return 'from-slate-300 via-slate-400 to-slate-500';
    if (rank === 3) return 'from-orange-400 via-amber-500 to-orange-600';
    return 'from-blue-50 to-cyan-50';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        <button
          onClick={() => onNavigate('home')}
          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 hover:bg-white/30 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="w-8 h-8 text-white" />
          <h1 className="text-white text-3xl">Top Helpers</h1>
        </div>
        <p className="text-pink-100">Community heroes making a difference</p>
      </div>

      <div className="px-6 py-6">
        {/* Tabs */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          <button
            onClick={() => setActiveTab('all-time')}
            className={`py-3 rounded-xl transition-all ${
              activeTab === 'all-time'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200'
            }`}
          >
            All-Time
          </button>
          <button
            onClick={() => setActiveTab('this-month')}
            className={`py-3 rounded-xl transition-all ${
              activeTab === 'this-month'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200'
            }`}
          >
            This Month
          </button>
          <button
            onClick={() => setActiveTab('campus')}
            className={`py-3 rounded-xl transition-all ${
              activeTab === 'campus'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                : 'bg-white text-slate-700 border border-slate-200'
            }`}
          >
            Campus
          </button>
        </div>

        {/* Top 3 Podium */}
        <div className="mb-8">
          <h3 className="text-slate-800 mb-4">🏆 Top Champions</h3>
          <div className="flex items-end justify-center gap-3 mb-6">
            {/* 2nd Place */}
            <div className="flex-1 text-center">
              <div className={`bg-gradient-to-br ${getMedalColor(2)} p-1 rounded-2xl mb-3 shadow-lg`}>
                <div className="bg-white rounded-xl p-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full flex items-center justify-center mx-auto mb-2 text-white text-xl">
                    {topUsers[1].avatar}
                  </div>
                  <p className="text-slate-800 text-sm mb-1">{topUsers[1].name.split(' ')[0]}</p>
                  <div className="text-3xl mb-1">🥈</div>
                  <p className="text-slate-600">{topUsers[1].points}</p>
                </div>
              </div>
            </div>

            {/* 1st Place */}
            <div className="flex-1 text-center -mt-6">
              <div className={`bg-gradient-to-br ${getMedalColor(1)} p-1 rounded-2xl mb-3 shadow-2xl`}>
                <div className="bg-white rounded-xl p-5">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white text-2xl shadow-lg">
                    {topUsers[0].avatar}
                  </div>
                  <p className="text-slate-800 mb-1">{topUsers[0].name.split(' ')[0]}</p>
                  <div className="text-4xl mb-1">🥇</div>
                  <p className="text-amber-600">{topUsers[0].points}</p>
                </div>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="flex-1 text-center">
              <div className={`bg-gradient-to-br ${getMedalColor(3)} p-1 rounded-2xl mb-3 shadow-lg`}>
                <div className="bg-white rounded-xl p-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white text-xl">
                    {topUsers[2].avatar}
                  </div>
                  <p className="text-slate-800 text-sm mb-1">{topUsers[2].name.split(' ')[0]}</p>
                  <div className="text-3xl mb-1">🥉</div>
                  <p className="text-slate-600">{topUsers[2].points}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rankings 4-10 */}
        <div className="mb-6">
          <h3 className="text-slate-800 mb-4">Rankings</h3>
          <div className="space-y-3">
            {topUsers.slice(3).map((user) => (
              <div
                key={user.rank}
                className="bg-white p-4 rounded-2xl shadow-md border border-slate-100 flex items-center gap-4 hover:shadow-lg transition-all"
              >
                {/* Rank */}
                <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-slate-700">#{user.rank}</span>
                </div>

                {/* Avatar */}
                <div className={`w-12 h-12 bg-gradient-to-br ${user.color} rounded-xl flex items-center justify-center text-white flex-shrink-0 shadow-md`}>
                  {user.avatar}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-slate-800 mb-0.5">{user.name}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-700">
                      {user.badge}
                    </span>
                  </div>
                </div>

                {/* Points */}
                <div className="text-right flex-shrink-0">
                  <div className="flex items-center gap-1 text-amber-600">
                    <Trophy className="w-4 h-4" />
                    <span className="text-lg">{user.points}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-2xl border border-purple-200">
          <div className="flex items-start gap-3">
            <Award className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-purple-900 mb-1">Climb the Leaderboard</p>
              <p className="text-purple-700 text-sm">Report found items, help others, and earn points to reach the top!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
