import { ArrowLeft, MapPin, Clock, Zap, CheckCircle } from 'lucide-react';
import type { Screen } from '../App';

interface AIDetectionProps {
  onNavigate: (screen: Screen) => void;
}

export function AIDetection({ onNavigate }: AIDetectionProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Header */}
      <div className="bg-gradient-to-br from-cyan-600 to-blue-700 px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        <button
          onClick={() => onNavigate('home')}
          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 hover:bg-white/30 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-white text-3xl mb-2">AI Detection</h1>
        <p className="text-cyan-100">Real-time CCTV analysis</p>
      </div>

      <div className="px-6 py-6">
        {/* CCTV Preview - Futuristic Frame */}
        <div className="relative mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur opacity-75"></div>
          <div className="relative bg-slate-900 rounded-3xl overflow-hidden border-2 border-cyan-400/50">
            {/* CCTV Frame */}
            <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900">
              {/* Simulated CCTV footage with blurred people */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/50 to-slate-900/80"></div>
              
              {/* Blurred human silhouettes */}
              <div className="absolute top-1/4 left-1/4 w-16 h-32 bg-slate-600/40 blur-md rounded-full"></div>
              <div className="absolute top-1/3 right-1/3 w-12 h-28 bg-slate-600/40 blur-md rounded-full"></div>
              
              {/* Detected Item - Red Bounding Box with Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-32">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-red-500/30 blur-xl rounded-lg animate-pulse"></div>
                {/* Bounding box */}
                <div className="absolute inset-0 border-3 border-red-500 rounded-lg shadow-lg shadow-red-500/50">
                  {/* Corner markers */}
                  <div className="absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 border-red-500"></div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-red-500"></div>
                  <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-red-500"></div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 border-red-500"></div>
                  
                  {/* Item representation */}
                  <div className="absolute inset-2 bg-gradient-to-br from-slate-700 to-slate-800 rounded"></div>
                </div>
                
                {/* Label */}
                <div className="absolute -top-8 left-0 bg-red-500 text-white px-3 py-1 rounded text-xs shadow-lg">
                  Backpack
                </div>
              </div>

              {/* CCTV Overlay Info */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg text-white text-xs space-y-0.5">
                <div>CAM-03 | South Exit</div>
                <div className="text-cyan-400">● REC 16:37:42</div>
              </div>

              {/* AI Processing Indicator */}
              <div className="absolute top-4 right-4 bg-cyan-500/90 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2">
                <Zap className="w-4 h-4 text-white animate-pulse" />
                <span className="text-white text-xs">AI Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detection Details */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-3xl border border-cyan-500/30 mb-6 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-cyan-400" />
            <h3 className="text-white">Detection Details</h3>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-400">Item Type</span>
              <span className="text-white bg-slate-700/50 px-4 py-2 rounded-xl">Backpack</span>
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
                Detected At
              </span>
              <span className="text-white">4:37 PM</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-slate-400">AI Confidence</span>
              <div className="flex items-center gap-2">
                <div className="w-32 h-2 bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" style={{ width: '92%' }}></div>
                </div>
                <span className="text-green-400">92%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/50 p-5 rounded-2xl mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-green-300 mb-1">Screenshot Sent to Admin</p>
              <p className="text-green-400/70 text-sm">Admin will retrieve and store the item</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => onNavigate('admin-alert')}
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            View Admin Panel
          </button>
          <button
            onClick={() => onNavigate('home')}
            className="w-full bg-slate-700 text-white py-4 rounded-2xl hover:bg-slate-600 transition-all"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
