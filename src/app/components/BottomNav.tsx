import { Home, Heart, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BottomNavProps {
  activeTab: 'home' | 'favorites' | 'notifications' | 'account';
}

export default function BottomNav({ activeTab }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-gray-200 px-4 py-2 flex justify-around">
      <Link to="/mockup/home" className="flex flex-col items-center py-2">
        <Home className={`w-6 h-6 ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-600'}`} />
        <span className={`text-xs mt-1 ${activeTab === 'home' ? 'text-blue-600' : 'text-gray-600'}`}>Inicio</span>
      </Link>
      <Link to="/mockup/favorites" className="flex flex-col items-center py-2">
        <Heart className={`w-6 h-6 ${activeTab === 'favorites' ? 'text-blue-600' : 'text-gray-600'}`} />
        <span className={`text-xs mt-1 ${activeTab === 'favorites' ? 'text-blue-600' : 'text-gray-600'}`}>Favoritos</span>
      </Link>
      <Link to="/mockup/notifications" className="flex flex-col items-center py-2">
        <Bell className={`w-6 h-6 ${activeTab === 'notifications' ? 'text-blue-600' : 'text-gray-600'}`} />
        <span className={`text-xs mt-1 ${activeTab === 'notifications' ? 'text-blue-600' : 'text-gray-600'}`}>Notif.</span>
      </Link>
      <Link to="/mockup/account" className="flex flex-col items-center py-2">
        <User className={`w-6 h-6 ${activeTab === 'account' ? 'text-blue-600' : 'text-gray-600'}`} />
        <span className={`text-xs mt-1 ${activeTab === 'account' ? 'text-blue-600' : 'text-gray-600'}`}>Cuenta</span>
      </Link>
    </div>
  );
}
