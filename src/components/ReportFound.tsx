import { useState } from 'react';
import { ArrowLeft, Upload, MapPin, CheckCircle2 } from 'lucide-react';
import type { Screen } from '../App';

interface ReportFoundProps {
  onNavigate: (screen: Screen) => void;
  onPointsEarned: () => void;
}

export function ReportFound({ onNavigate, onPointsEarned }: ReportFoundProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
    onPointsEarned();
    setTimeout(() => {
      onNavigate('home');
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-slate-800 text-2xl mb-2">Thanks for Helping!</h2>
          <p className="text-slate-600 mb-4">Your kindness makes a difference</p>
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full">
            <span className="text-2xl">⭐</span>
            <span>+30 Points Added</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-600 px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        <button
          onClick={() => onNavigate('home')}
          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 hover:bg-white/30 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-white text-3xl mb-2">Found Something?</h1>
        <p className="text-green-100">Upload a photo and help someone. You earn +30 points</p>
      </div>

      <div className="px-6 py-6">
        {/* Reward Banner */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-5 rounded-2xl mb-6 border border-amber-200">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">⭐</span>
            </div>
            <div>
              <p className="text-amber-900">Earn Rewards</p>
              <p className="text-amber-700 text-sm">Get +30 points for each found item you report</p>
            </div>
          </div>
        </div>

        {/* Photo Upload */}
        <div className="mb-6">
          <label className="text-slate-700 mb-2 block">Photo of Found Item</label>
          <div className="border-2 border-dashed border-green-300 rounded-3xl p-12 text-center bg-green-50/50 hover:bg-green-50 transition-all cursor-pointer">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Upload className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-green-600 mb-1">Upload Photo</p>
            <p className="text-slate-500 text-sm">Clear photo helps match with owner</p>
          </div>
        </div>

        {/* Location */}
        <div className="mb-6">
          <label className="text-slate-700 mb-2 block">Where Did You Find It?</label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="e.g., South Exit Hallway"
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-green-400 focus:outline-none bg-white"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="text-slate-700 mb-2 block">Short Description</label>
          <textarea
            placeholder="Describe the item briefly..."
            rows={4}
            className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:border-green-400 focus:outline-none bg-white resize-none"
          />
        </div>

        {/* Info Box */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-2xl mb-6 border border-green-100">
          <p className="text-green-900 mb-1">What happens next?</p>
          <ul className="text-green-700 text-sm space-y-1">
            <li>• AI will match with lost item reports</li>
            <li>• Owner will be notified if there's a match</li>
            <li>• You earn points for being helpful</li>
          </ul>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all mb-8"
        >
          Submit Found Item
        </button>
      </div>
    </div>
  );
}
