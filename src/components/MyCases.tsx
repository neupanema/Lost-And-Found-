import { ArrowLeft, Package, MapPin, Clock, Sparkles, CheckCircle2 } from 'lucide-react';
import type { Screen } from '../App';

interface MyCasesProps {
  onNavigate: (screen: Screen) => void;
}

export function MyCases({ onNavigate }: MyCasesProps) {
  const cases = [
    {
      id: 1,
      type: 'lost',
      item: 'Black Backpack',
      location: 'South Exit Hallway',
      date: 'Nov 13, 2025',
      status: 'retrieved',
      statusText: 'Ready for Pickup',
      pickup: 'Admin Office · Locker #3'
    },
    {
      id: 2,
      type: 'lost',
      item: 'Blue Water Bottle',
      location: 'Library 2nd Floor',
      date: 'Nov 12, 2025',
      status: 'scanning',
      statusText: 'AI Scanning'
    },
    {
      id: 3,
      type: 'found',
      item: 'Red iPhone Case',
      location: 'Cafeteria',
      date: 'Nov 11, 2025',
      status: 'matched',
      statusText: 'Owner Notified',
      points: 30
    },
    {
      id: 4,
      type: 'lost',
      item: 'Laptop Charger',
      location: 'Study Room B',
      date: 'Nov 10, 2025',
      status: 'scanning',
      statusText: 'Searching'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        <button
          onClick={() => onNavigate('home')}
          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 hover:bg-white/30 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-white text-3xl mb-2">My Cases</h1>
        <p className="text-indigo-100">Track your lost and found items</p>
      </div>

      <div className="px-6 py-6">
        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          <button className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 rounded-xl shadow-md">
            All Cases
          </button>
          <button className="flex-1 bg-white text-slate-700 py-3 rounded-xl border border-slate-200 hover:bg-slate-50">
            Lost Items
          </button>
          <button className="flex-1 bg-white text-slate-700 py-3 rounded-xl border border-slate-200 hover:bg-slate-50">
            Found Items
          </button>
        </div>

        {/* Cases List */}
        <div className="space-y-4">
          {cases.map((caseItem) => (
            <div
              key={caseItem.id}
              className="bg-white p-5 rounded-2xl shadow-md border border-slate-100 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  caseItem.type === 'lost'
                    ? 'bg-gradient-to-br from-blue-100 to-cyan-100'
                    : 'bg-gradient-to-br from-green-100 to-emerald-100'
                }`}>
                  {caseItem.type === 'lost' ? (
                    <Package className="w-7 h-7 text-blue-600" />
                  ) : (
                    <CheckCircle2 className="w-7 h-7 text-green-600" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-slate-800 mb-1">{caseItem.item}</h3>
                      <p className="text-slate-500 text-sm flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${
                          caseItem.type === 'lost' ? 'bg-blue-500' : 'bg-green-500'
                        }`}></span>
                        {caseItem.type === 'lost' ? 'Lost Item' : 'Found Item'}
                      </p>
                    </div>
                    <span className={`text-xs px-3 py-1.5 rounded-full whitespace-nowrap ${
                      caseItem.status === 'retrieved'
                        ? 'bg-green-100 text-green-700'
                        : caseItem.status === 'scanning'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-cyan-100 text-cyan-700'
                    }`}>
                      {caseItem.statusText}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-500 text-sm mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{caseItem.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{caseItem.date}</span>
                    </div>
                  </div>

                  {/* Pickup Info or Points */}
                  {caseItem.pickup && (
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-xl border border-green-200">
                      <p className="text-green-900 text-sm mb-1">Pickup Location:</p>
                      <p className="text-green-700">{caseItem.pickup}</p>
                    </div>
                  )}

                  {caseItem.points && (
                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-3 rounded-xl border border-amber-200 flex items-center gap-2">
                      <span className="text-xl">⭐</span>
                      <span className="text-amber-900">+{caseItem.points} points earned</span>
                    </div>
                  )}

                  {caseItem.status === 'scanning' && (
                    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-3 rounded-xl border border-blue-200 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
                      <span className="text-blue-900 text-sm">AI is actively searching for your item</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Alternative */}
        <div className="text-center py-12 hidden">
          <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="w-10 h-10 text-slate-400" />
          </div>
          <p className="text-slate-600 mb-1">No cases yet</p>
          <p className="text-slate-500 text-sm">Report lost or found items to get started</p>
        </div>
      </div>
    </div>
  );
}
