import { Link } from 'react-router-dom';
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Settings, 
  Music, 
  MessageCircle, 
  Phone, 
  ArrowLeft,
  Sun
} from 'lucide-react';

export default function WatchApps() {
  return (
    <div className="flex-1 bg-black flex flex-col justify-between p-3 select-none text-white text-center relative">
      
      {/* Top Header with Back button */}
      <div className="flex items-center gap-1.5 border-b border-zinc-900 pb-1 px-1">
        <Link to="/mockup/smartwatch/home" className="hover:bg-zinc-800 p-0.5 rounded-full text-gray-400 transition-colors">
          <ArrowLeft className="w-4 h-4 text-white" />
        </Link>
        <span className="text-[9px] font-extrabold tracking-wider uppercase text-gray-300">Aplicaciones</span>
      </div>

      {/* Bubble Grid of Apps */}
      <div className="flex-1 grid grid-cols-3 gap-y-3 gap-x-2 items-center justify-center py-2.5 px-0.5">
        
        {/* Health App */}
        <div className="w-9 h-9 mx-auto rounded-full bg-red-500 flex items-center justify-center shadow-md">
          <Heart className="w-4 h-4 text-white" />
        </div>
        
        {/* Maps App */}
        <div className="w-9 h-9 mx-auto rounded-full bg-green-500 flex items-center justify-center shadow-md">
          <MapPin className="w-4 h-4 text-white" />
        </div>
        
        {/* Calendar App */}
        <div className="w-9 h-9 mx-auto rounded-full bg-orange-500 flex items-center justify-center shadow-md">
          <Calendar className="w-4 h-4 text-white" />
        </div>
        
        {/* Weather App */}
        <div className="w-9 h-9 mx-auto rounded-full bg-sky-400 flex items-center justify-center shadow-md">
          <Sun className="w-4 h-4 text-white" />
        </div>
        
        {/* MERCADO LIBRE APP - PROMINENT CENTER POSITION */}
        <Link 
          to="/mockup/smartwatch/meli-app" 
          className="relative w-11 h-11 mx-auto rounded-full bg-meli-yellow flex items-center justify-center shadow-lg border border-yellow-400/40 transform hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          {/* App Logo */}
          <span className="text-gray-900 font-black italic tracking-tighter text-[11px]">meli</span>
          
          {/* Animated Red Notification Badge */}
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border border-black rounded-full animate-ping" />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 border border-black rounded-full" />
        </Link>

        {/* Music App */}
        <div className="w-9 h-9 mx-auto rounded-full bg-pink-500 flex items-center justify-center shadow-md">
          <Music className="w-4 h-4 text-white" />
        </div>
        
        {/* Message App */}
        <div className="w-9 h-9 mx-auto rounded-full bg-emerald-500 flex items-center justify-center shadow-md">
          <MessageCircle className="w-4 h-4 text-white" />
        </div>
        
        {/* Phone App */}
        <div className="w-9 h-9 mx-auto rounded-full bg-blue-500 flex items-center justify-center shadow-md">
          <Phone className="w-4 h-4 text-white" />
        </div>
        
        {/* Settings App */}
        <div className="w-9 h-9 mx-auto rounded-full bg-zinc-700 flex items-center justify-center shadow-md">
          <Settings className="w-4 h-4 text-white" />
        </div>
      </div>

      {/* Screen Footer Hint */}
      <span className="text-[8px] text-gray-500 uppercase tracking-widest font-semibold">
        Toca el icono amarillo
      </span>
    </div>
  );
}
