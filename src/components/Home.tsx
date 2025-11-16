import { Sparkles, MapPin, Clock, ChevronRight, Search, Package, Trophy, Shield } from 'lucide-react';
import type { Screen } from '../App';

interface HomeProps {
  onNavigate: (screen: Screen) => void;
  userPoints: number;
}

export function Home({ onNavigate, userPoints }: HomeProps) {
  const recentDetections = [
    {
      id: 1,
      item: 'Black Backpack',
      location: 'South Exit Hallway',
      time: '2 hours ago',
      status: 'Retrieved'
    },
    {
      id: 2,
      item: 'Blue Water Bottle',
      location: 'Library 2nd Floor',
      time: '5 hours ago',
      status: 'Scanning'
    },
    {
      id: 3,
      item: 'Red iPhone Case',
      location: 'Cafeteria',
      time: '1 day ago',
      status: 'Found Match'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-500 px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-white text-3xl">Detectify</h1>
          </div>
          <button 
            onClick={() => onNavigate('points-rewards')}
            className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition-all"
          >
            <span className="text-white">⭐ {userPoints}</span>
          </button>
        </div>
        <p className="text-blue-100 ml-12">Smart Lost & Found with AI</p>
      </div>

      <div className="px-6 -mt-6">
        {/* Primary Action Buttons */}
        <div className="space-y-3 mb-8">
          <button
            onClick={() => onNavigate('report-lost')}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Search className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Report Lost Item</div>
                <div className="text-blue-100 text-sm">AI will help find it</div>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('report-found')}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                <Package className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="font-semibold">Report Found Item</div>
                <div className="text-green-100 text-sm">Help someone & earn points</div>
              </div>
            </div>
            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Points Card */}
        <div className="bg-gradient-to-br from-cyan-500 to-blue-500 p-6 rounded-3xl shadow-lg mb-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cyan-100 text-sm mb-1">My Points</p>
              <p className="text-white text-4xl">{userPoints} ⭐</p>
            </div>
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Recent Detections */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-slate-800 text-xl">Recent Detections</h2>
            <button 
              onClick={() => onNavigate('my-cases')}
              className="text-blue-500 text-sm"
            >
              View All
            </button>
          </div>

          <div className="space-y-3">
            {recentDetections.map((detection) => (
              <div
                key={detection.id}
                onClick={() => {
                  if (detection.status === 'Found Match') {
                    onNavigate('user-notification');
                  } else if (detection.status === 'Scanning') {
                    onNavigate('ai-detection');
                  }
                }}
                className="bg-white p-4 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <div className="w-14 h-14 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package className="w-7 h-7 text-slate-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-slate-800">{detection.item}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        detection.status === 'Retrieved' ? 'bg-green-100 text-green-700' :
                        detection.status === 'Scanning' ? 'bg-blue-100 text-blue-700' :
                        'bg-cyan-100 text-cyan-700'
                      }`}>
                        {detection.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-500 text-sm">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{detection.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{detection.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <button
            onClick={() => onNavigate('my-cases')}
            className="bg-white p-4 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all"
          >
            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-2">
              <Package className="w-5 h-5 text-blue-600" />
            </div>
            <p className="text-slate-800 text-sm">My Cases</p>
          </button>
          <button
            onClick={() => onNavigate('leaderboard')}
            className="bg-white p-4 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all"
          >
            <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center mb-2">
              <Trophy className="w-5 h-5 text-purple-600" />
            </div>
            <p className="text-slate-800 text-sm">Leaderboard</p>
          </button>
        </div>

        {/* Admin Access (Demo Only) */}
        <button
          onClick={() => onNavigate('admin-dashboard')}
          className="w-full bg-gradient-to-r from-slate-700 to-slate-800 text-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <div className="text-left">
              <div>Admin Dashboard</div>
              <div className="text-slate-300 text-sm">Management & AI Detection</div>
            </div>
          </div>
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
