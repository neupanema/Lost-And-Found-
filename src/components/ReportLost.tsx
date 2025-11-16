import { useState } from 'react';
import { ArrowLeft, Upload, MapPin, Sparkles, Check } from 'lucide-react';
import type { Screen } from '../App';

interface ReportLostProps {
  onNavigate: (screen: Screen) => void;
}

export function ReportLost({ onNavigate }: ReportLostProps) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const categories = ['Backpack', 'Phone', 'Wallet', 'Keys', 'Water Bottle', 'Laptop', 'Headphones', 'Other'];
  const colors = [
    { name: 'Black', code: '#000000' },
    { name: 'Blue', code: '#3B82F6' },
    { name: 'Red', code: '#EF4444' },
    { name: 'Green', code: '#22C55E' },
    { name: 'Yellow', code: '#EAB308' },
    { name: 'White', code: '#F1F5F9' },
    { name: 'Brown', code: '#92400E' },
    { name: 'Gray', code: '#6B7280' }
  ];

  const handleSubmit = () => {
    setSubmitted(true);
    setTimeout(() => {
      onNavigate('ai-detection');
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center px-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Sparkles className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-slate-800 text-2xl mb-2">AI Search Started!</h2>
          <p className="text-slate-600">Scanning CCTV footage and found items...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 px-6 pt-12 pb-8 rounded-b-[32px] shadow-lg">
        <button
          onClick={() => onNavigate('home')}
          className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center mb-4 hover:bg-white/30 transition-all"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-white text-3xl mb-2">Report Lost Item</h1>
        <p className="text-blue-100">AI will scan and help find your item</p>
      </div>

      <div className="px-6 py-6">
        {/* Photo Upload */}
        <div className="mb-6">
          <label className="text-slate-700 mb-2 block">Photo of Item</label>
          <div className="border-2 border-dashed border-blue-300 rounded-3xl p-12 text-center bg-blue-50/50 hover:bg-blue-50 transition-all cursor-pointer">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-3">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-blue-600 mb-1">Upload Photo</p>
            <p className="text-slate-500 text-sm">Tap to add image</p>
          </div>
        </div>

        {/* Category */}
        <div className="mb-6">
          <label className="text-slate-700 mb-2 block">Category</label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === category
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:border-blue-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selector */}
        <div className="mb-6">
          <label className="text-slate-700 mb-2 block">Color</label>
          <div className="flex flex-wrap gap-3">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className="relative group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl border-2 transition-all ${
                    selectedColor === color.name
                      ? 'border-blue-500 scale-110 shadow-lg'
                      : 'border-slate-200 hover:border-blue-300'
                  }`}
                  style={{ backgroundColor: color.code }}
                >
                  {selectedColor === color.name && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Check className="w-5 h-5 text-white drop-shadow-lg" />
                    </div>
                  )}
                </div>
                <p className="text-xs text-slate-600 text-center mt-1">{color.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Brand */}
        <div className="mb-6">
          <label className="text-slate-700 mb-2 block">Brand (Optional)</label>
          <input
            type="text"
            placeholder="e.g., Nike, Apple"
            className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:border-blue-400 focus:outline-none bg-white"
          />
        </div>

        {/* Last Seen Location */}
        <div className="mb-6">
          <label className="text-slate-700 mb-2 block">Last Seen Location</label>
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="e.g., Library 2nd Floor"
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-slate-200 focus:border-blue-400 focus:outline-none bg-white"
            />
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="text-slate-700 mb-2 block">Description</label>
          <textarea
            placeholder="Add any additional details..."
            rows={4}
            className="w-full px-4 py-4 rounded-2xl border border-slate-200 focus:border-blue-400 focus:outline-none bg-white resize-none"
          />
        </div>

        {/* Hint */}
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-2xl mb-6 border border-blue-100">
          <div className="flex gap-3">
            <Sparkles className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-blue-900 mb-1">AI-Powered Search</p>
              <p className="text-blue-700 text-sm">Our AI will scan CCTV footage and found items database to locate your item</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 mb-8"
        >
          <Sparkles className="w-5 h-5" />
          <span>Submit & Start AI Search</span>
        </button>
      </div>
    </div>
  );
}
