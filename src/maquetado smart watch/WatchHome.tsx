import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, Battery, Bell } from 'lucide-react';

export default function WatchHome() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const hh = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', day: 'numeric', month: 'short' };
    // Format to e.g. "LUN 1 JUN"
    return date.toLocaleDateString('es-ES', options).toUpperCase();
  };

  return (
    <Link 
      to="/mockup/smartwatch/apps" 
      className="flex-1 flex flex-col justify-between p-4 bg-gradient-to-b from-zinc-950 via-slate-900 to-black select-none text-white text-center cursor-pointer relative"
    >
      
      {/* Top Bar: Battery & Status */}
      <div className="flex items-center justify-between text-[9px] text-gray-400 font-bold px-1 relative z-10">
        <div className="flex items-center gap-0.5">
          <Battery className="w-3.5 h-3.5 text-green-500 fill-green-500" />
          <span>84%</span>
        </div>
        <div className="flex items-center gap-1 text-meli-yellow">
          <Bell className="w-2.5 h-2.5 fill-current animate-bounce" />
          <span className="text-[8px] bg-meli-yellow text-black font-extrabold px-1 rounded-full">1</span>
        </div>
      </div>

      {/* Floating Mercado Libre Watch Icon on face */}
      <div className="absolute top-1/2 left-3 -translate-y-1/2 flex flex-col items-center gap-1 animate-pulse">
        <div className="w-6 h-6 bg-meli-yellow rounded-full flex items-center justify-center border border-yellow-400/50 shadow-lg">
          <span className="text-[8px] font-black text-gray-800 italic tracking-tighter">m</span>
        </div>
      </div>

      {/* Center: Large Digital Clock & Date */}
      <div className="my-auto flex flex-col items-center relative z-10">
        <span className="text-[10px] tracking-widest text-meli-blue font-bold">
          {formatDate(time)}
        </span>
        <h1 className="text-4.5xl font-black tracking-tight text-white leading-none my-1 font-mono">
          {formatTime(time)}
        </h1>
        <span className="text-[8px] bg-white/10 px-2 py-0.5 rounded-full text-gray-300 font-bold tracking-wide mt-1 uppercase">
          Menú de Apps
        </span>
      </div>

      {/* Bottom stats widgets */}
      <div className="flex items-center justify-around text-[10px] text-gray-400 bg-white/5 rounded-2xl py-2 px-1 border border-white/5 relative z-10">
        <div className="flex items-center gap-1">
          <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 animate-pulse" />
          <span className="font-mono text-white font-bold">72</span>
        </div>
        <div className="w-[1px] h-3 bg-white/10" />
        <div className="flex items-center gap-1">
          <Activity className="w-3.5 h-3.5 text-blue-400" />
          <span className="font-mono text-white font-bold">5,842</span>
        </div>
      </div>
      
    </Link>
  );
}
