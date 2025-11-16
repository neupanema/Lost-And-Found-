import { ArrowLeft, MapPin, Clock, Package, CheckCircle2, X } from 'lucide-react';
import type { Screen } from '../App';

interface UserNotificationProps {
  onNavigate: (screen: Screen) => void;
}

export function UserNotification({ onNavigate }: UserNotificationProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        <button
          onClick={() => onNavigate('home')}
          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 hover:bg-white/30 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-white text-3xl">Great News!</h1>
        </div>
        <p className="text-cyan-100">We found something that might be yours</p>
      </div>

      <div className="px-6 py-6">
        {/* CCTV Screenshot - The Most Important Part */}
        <div className="relative mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-3xl blur opacity-50"></div>
          <div className="relative bg-white rounded-3xl overflow-hidden border-2 border-cyan-300 shadow-2xl">
            <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900">
              {/* CCTV Background */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/50 to-slate-900/80"></div>
              
              {/* Blurred humans */}
              <div className="absolute top-1/4 left-1/4 w-16 h-32 bg-slate-600/40 blur-md rounded-full"></div>
              <div className="absolute top-1/3 right-1/3 w-12 h-28 bg-slate-600/40 blur-md rounded-full"></div>
              
              {/* Detected Item with Bounding Box */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-32">
                <div className="absolute -inset-2 bg-cyan-500/30 blur-xl rounded-lg animate-pulse"></div>
                <div className="absolute inset-0 border-3 border-cyan-400 rounded-lg shadow-lg shadow-cyan-400/50">
                  {/* Corner markers */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-cyan-400"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-cyan-400"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-cyan-400"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-cyan-400"></div>
                  
                  {/* Item */}
                  <div className="absolute inset-2 bg-gradient-to-br from-slate-700 to-slate-800 rounded"></div>
                </div>
                
                {/* Your Item Label */}
                <div className="absolute -top-8 left-0 bg-cyan-500 text-white px-3 py-1 rounded text-xs shadow-lg">
                  Your Backpack
                </div>
              </div>

              {/* CCTV Info */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg text-white text-xs">
                <div>AI Detection Screenshot</div>
                <div className="text-cyan-400">South Exit Hallway</div>
              </div>

              {/* Match Badge */}
              <div className="absolute top-4 right-4 bg-green-500 px-3 py-2 rounded-lg flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span className="text-white text-xs">92% Match</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detection Details */}
        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-3xl border border-blue-200 mb-6 shadow-lg">
          <h3 className="text-slate-800 mb-4 flex items-center gap-2">
            <Package className="w-5 h-5 text-blue-600" />
            Detection Details
          </h3>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-slate-600 text-sm">Detected At</p>
                <p className="text-slate-800">South Exit Hallway</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-slate-600 text-sm">Time</p>
                <p className="text-slate-800">Today at 4:37 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-slate-600 text-sm">Status</p>
                <p className="text-green-700">Retrieved by Admin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pickup Information - THE MOST IMPORTANT */}
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-3xl shadow-xl mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-white text-xl">Pickup Location</h3>
          </div>

          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
            <p className="text-green-50 text-sm mb-1">Your item is ready for pickup at:</p>
            <p className="text-white text-xl">Admin Office</p>
            <p className="text-white">Locker #3</p>
          </div>

          <div className="mt-4 bg-white/10 backdrop-blur-sm p-3 rounded-xl">
            <p className="text-green-50 text-sm">
              Please bring your ID for verification
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-8">
          <button
            onClick={() => onNavigate('home')}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <CheckCircle2 className="w-5 h-5" />
            This Looks Like My Item
          </button>
          <button
            onClick={() => onNavigate('home')}
            className="w-full bg-white text-slate-700 py-5 rounded-2xl border-2 border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
          >
            <X className="w-5 h-5" />
            Not Mine
          </button>
        </div>
      </div>
    </div>
  );
}
