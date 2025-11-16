import { useState } from 'react';
import { ArrowLeft, MapPin, Clock, Zap, AlertCircle, CheckCircle2, XCircle } from 'lucide-react';
import type { Screen } from '../App';

interface AdminAlertProps {
  onNavigate: (screen: Screen) => void;
}

export function AdminAlert({ onNavigate }: AdminAlertProps) {
  const [showStorageInput, setShowStorageInput] = useState(false);
  const [storageLocation, setStorageLocation] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const handleMarkRetrieved = () => {
    setShowStorageInput(true);
  };

  const handleConfirm = () => {
    setConfirmed(true);
    setTimeout(() => {
      onNavigate('user-notification');
    }, 2000);
  };

  if (confirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-white text-2xl mb-2">Owner Notified!</h2>
          <p className="text-slate-400">Pickup instructions sent successfully</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-indigo-700 px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        <button
          onClick={() => onNavigate('ai-detection')}
          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 hover:bg-white/30 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <div className="flex items-center gap-3 mb-2">
          <AlertCircle className="w-8 h-8 text-white" />
          <h1 className="text-white text-3xl">Admin Alert</h1>
        </div>
        <p className="text-purple-100">New item detected by AI</p>
      </div>

      <div className="px-6 py-6">
        {/* CCTV Screenshot */}
        <div className="relative mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur opacity-75"></div>
          <div className="relative bg-slate-900 rounded-3xl overflow-hidden border-2 border-purple-400/50">
            <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900">
              {/* Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/50 to-slate-900/80"></div>
              
              {/* Blurred humans */}
              <div className="absolute top-1/4 left-1/4 w-16 h-32 bg-slate-600/40 blur-md rounded-full"></div>
              <div className="absolute top-1/3 right-1/3 w-12 h-28 bg-slate-600/40 blur-md rounded-full"></div>
              
              {/* Detected Item with Bounding Box */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-32">
                <div className="absolute -inset-2 bg-red-500/30 blur-xl rounded-lg animate-pulse"></div>
                <div className="absolute inset-0 border-3 border-red-500 rounded-lg shadow-lg shadow-red-500/50">
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-red-500"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-red-500"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-red-500"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-red-500"></div>
                  <div className="absolute inset-2 bg-gradient-to-br from-slate-700 to-slate-800 rounded"></div>
                </div>
                <div className="absolute -top-8 left-0 bg-red-500 text-white px-3 py-1 rounded text-xs shadow-lg">
                  Backpack
                </div>
              </div>

              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg text-white text-xs">
                <div>CAM-03 | South Exit</div>
                <div className="text-purple-400">● 16:37:42</div>
              </div>
            </div>
          </div>
        </div>

        {/* Information Section */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl border border-purple-500/30 mb-6 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-purple-400" />
            <h3 className="text-white">Detection Information</h3>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Item Type</span>
              <span className="text-white bg-slate-700/50 px-4 py-2 rounded-xl">Black Backpack</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-400 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Location
              </span>
              <span className="text-white">South Exit Hallway</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-400 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Time
              </span>
              <span className="text-white">4:37 PM</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-400">AI Confidence</span>
              <span className="text-green-400">92%</span>
            </div>
          </div>
        </div>

        {/* Storage Input (Conditional) */}
        {showStorageInput && !confirmed && (
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/50 p-5 rounded-2xl mb-6 animate-in fade-in slide-in-from-top-4">
            <label className="text-blue-300 mb-2 block">Storage Location</label>
            <input
              type="text"
              value={storageLocation}
              onChange={(e) => setStorageLocation(e.target.value)}
              placeholder="e.g., Admin Office · Locker #3"
              className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-600 text-white placeholder-slate-500 focus:border-blue-400 focus:outline-none mb-4"
            />
            <button
              onClick={handleConfirm}
              disabled={!storageLocation}
              className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              Confirm & Notify Owner
            </button>
          </div>
        )}

        {/* Action Buttons */}
        {!showStorageInput && (
          <div className="space-y-3">
            <button
              onClick={handleMarkRetrieved}
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              Mark as Retrieved
            </button>
            <button
              onClick={() => onNavigate('home')}
              className="w-full bg-slate-700 text-white py-5 rounded-2xl hover:bg-slate-600 transition-all flex items-center justify-center gap-2"
            >
              <XCircle className="w-5 h-5" />
              False Alarm
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
