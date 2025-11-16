import { useState } from 'react';
import { Home } from './components/Home';
import { ReportLost } from './components/ReportLost';
import { ReportFound } from './components/ReportFound';
import { AIDetection } from './components/AIDetection';
import { AdminAlert } from './components/AdminAlert';
import { UserNotification } from './components/UserNotification';
import { MyCases } from './components/MyCases';
import { PointsRewards } from './components/PointsRewards';
import { Leaderboard } from './components/Leaderboard';
import { AdminDashboard } from './components/AdminDashboard';

export type Screen = 'home' | 'report-lost' | 'report-found' | 'ai-detection' | 'admin-alert' | 'user-notification' | 'my-cases' | 'points-rewards' | 'leaderboard' | 'admin-dashboard';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [userPoints, setUserPoints] = useState(120);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <Home onNavigate={setCurrentScreen} userPoints={userPoints} />;
      case 'report-lost':
        return <ReportLost onNavigate={setCurrentScreen} />;
      case 'report-found':
        return <ReportFound onNavigate={setCurrentScreen} onPointsEarned={() => setUserPoints(prev => prev + 30)} />;
      case 'ai-detection':
        return <AIDetection onNavigate={setCurrentScreen} />;
      case 'admin-alert':
        return <AdminAlert onNavigate={setCurrentScreen} />;
      case 'user-notification':
        return <UserNotification onNavigate={setCurrentScreen} />;
      case 'my-cases':
        return <MyCases onNavigate={setCurrentScreen} />;
      case 'points-rewards':
        return <PointsRewards onNavigate={setCurrentScreen} userPoints={userPoints} />;
      case 'leaderboard':
        return <Leaderboard onNavigate={setCurrentScreen} />;
      case 'admin-dashboard':
        return <AdminDashboard onNavigate={setCurrentScreen} />;
      default:
        return <Home onNavigate={setCurrentScreen} userPoints={userPoints} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <div className="max-w-md mx-auto min-h-screen bg-white shadow-2xl">
        {renderScreen()}
      </div>
    </div>
  );
}
