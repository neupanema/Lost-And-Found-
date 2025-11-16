import { ArrowLeft, Video, Package, Archive, AlertCircle, TrendingUp, CheckCircle2, Clock } from 'lucide-react';
import type { Screen } from '../App';

interface AdminDashboardProps {
  onNavigate: (screen: Screen) => void;
}

export function AdminDashboard({ onNavigate }: AdminDashboardProps) {
  const stats = [
    { label: "Today's Detections", value: 12, icon: Video, color: 'from-blue-500 to-cyan-500' },
    { label: 'Pending Retrieval', value: 3, icon: AlertCircle, color: 'from-orange-500 to-amber-500' },
    { label: 'Items in Storage', value: 8, icon: Archive, color: 'from-green-500 to-emerald-500' },
    { label: 'Returned Today', value: 5, icon: CheckCircle2, color: 'from-purple-500 to-pink-500' }
  ];

  const pendingDetections = [
    {
      id: 1,
      item: 'Black Backpack',
      location: 'South Exit Hallway',
      time: '2 min ago',
      confidence: 92,
      urgent: true
    },
    {
      id: 2,
      item: 'Blue Water Bottle',
      location: 'Library 2nd Floor',
      time: '15 min ago',
      confidence: 88,
      urgent: false
    },
    {
      id: 3,
      item: 'Red Laptop Case',
      location: 'Cafeteria',
      time: '1 hour ago',
      confidence: 95,
      urgent: false
    }
  ];

  const storedItems = [
    { id: 1, item: 'Gray Jacket', location: 'Locker #3', stored: '2 hours ago' },
    { id: 2, item: 'Phone Charger', location: 'Locker #5', stored: '4 hours ago' },
    { id: 3, item: 'Sunglasses', location: 'Drawer A', stored: '1 day ago' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        <button
          onClick={() => onNavigate('home')}
          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 hover:bg-white/30 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <Video className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-white text-3xl">Admin Dashboard</h1>
        </div>
        <p className="text-indigo-100">AI Detection & Inventory Management</p>
      </div>

      <div className="px-6 py-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800 to-slate-900 p-5 rounded-2xl border border-slate-700 shadow-lg"
            >
              <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
                <stat.icon className="w-5 h-5 text-white" />
              </div>
              <p className="text-slate-400 text-sm mb-1">{stat.label}</p>
              <p className="text-white text-3xl">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Primary Actions */}
        <div className="space-y-3 mb-6">
          <button
            onClick={() => onNavigate('ai-detection')}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Video className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-lg">CCTV AI Detection Feed</div>
                <div className="text-cyan-100 text-sm">View real-time detections</div>
              </div>
            </div>
            <div className="bg-red-500 w-6 h-6 rounded-full flex items-center justify-center text-xs animate-pulse">
              3
            </div>
          </button>

          <button
            onClick={() => onNavigate('admin-alert')}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                <Archive className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-lg">Storage Inventory</div>
                <div className="text-green-100 text-sm">Manage stored items</div>
              </div>
            </div>
          </button>
        </div>

        {/* Pending Detections */}
        <div className="mb-6">
          <h3 className="text-white mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-orange-400" />
            Pending Retrieval
          </h3>
          <div className="space-y-3">
            {pendingDetections.map((detection) => (
              <div
                key={detection.id}
                onClick={() => onNavigate('ai-detection')}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-white">{detection.item}</h4>
                      {detection.urgent && (
                        <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full animate-pulse">
                          URGENT
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-slate-400 text-sm">
                      <span className="flex items-center gap-1">
                        <Package className="w-3.5 h-3.5" />
                        {detection.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {detection.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full"
                        style={{ width: `${detection.confidence}%` }}
                      ></div>
                    </div>
                    <span className="text-green-400 text-sm">{detection.confidence}%</span>
                  </div>
                  <button className="bg-cyan-500 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-cyan-600 transition-colors">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Storage Inventory */}
        <div className="mb-6">
          <h3 className="text-white mb-3 flex items-center gap-2">
            <Archive className="w-5 h-5 text-green-400" />
            Items in Storage
          </h3>
          <div className="space-y-3">
            {storedItems.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-4 rounded-2xl border border-slate-700"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <Package className="w-5 h-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-white">{item.item}</p>
                      <p className="text-slate-400 text-sm">{item.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-slate-400 text-sm">{item.stored}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 p-5 rounded-2xl">
          <div className="flex items-center gap-3 mb-3">
            <TrendingUp className="w-5 h-5 text-purple-400" />
            <h3 className="text-white">Today's Performance</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-2xl text-white mb-1">12</p>
              <p className="text-purple-300 text-sm">AI Detections</p>
            </div>
            <div>
              <p className="text-2xl text-white mb-1">5</p>
              <p className="text-purple-300 text-sm">Items Returned</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
