import { Link } from 'react-router-dom';
import { Play, Search, User } from 'lucide-react';

export default function TvHome() {
  const apps = [
    { name: 'Mercado Play', isMeli: true, logoText: 'play', color: 'bg-meli-yellow border-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)] scale-105', link: '/mockup/tv/app' },
    { name: 'Netflix', logoText: 'N', color: 'bg-zinc-900 border border-zinc-800 text-red-600 font-black text-xl' },
    { name: 'Disney+', logoText: 'Disney', color: 'bg-slate-900 border border-zinc-850 text-blue-400 font-serif italic text-xs' },
    { name: 'Prime Video', logoText: 'prime', color: 'bg-sky-950 border border-zinc-850 text-sky-400 font-bold text-xs' },
    { name: 'YouTube', logoText: 'YouTube', color: 'bg-zinc-900 border border-zinc-800 text-white font-sans text-[10px]' }
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-zinc-950 via-slate-950 to-zinc-950 flex flex-col justify-between p-4 relative text-[10px] select-none">
      
      {/* Top Navbar */}
      <div className="flex items-center justify-between text-gray-400 font-bold border-b border-white/5 pb-2">
        <div className="flex items-center gap-3">
          <span className="text-white font-extrabold flex items-center gap-1">
            📺 Smart<span className="text-cyan-400">TV</span>
          </span>
          <span className="hover:text-white cursor-pointer border-b-2 border-cyan-400 text-white pb-0.5">Inicio</span>
          <span className="hover:text-white cursor-pointer">Apps</span>
          <span className="hover:text-white cursor-pointer">Ajustes</span>
        </div>
        <div className="flex items-center gap-2">
          <Search className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
          <User className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
        </div>
      </div>

      {/* Featured Giant Banner */}
      <div className="flex-1 my-3 bg-gradient-to-r from-cyan-950/40 via-zinc-900/60 to-zinc-900 flex items-center justify-between p-3.5 rounded-xl border border-white/5 relative overflow-hidden">
        <div className="max-w-[65%] space-y-1.5 z-10">
          <span className="bg-cyan-500/20 text-cyan-400 text-[8px] font-extrabold px-1.5 py-0.5 rounded uppercase tracking-wider">Beneficio Meli+</span>
          <h2 className="text-sm font-black text-white leading-tight">Mercado Play y Disney+ Premium incluidos</h2>
          <p className="text-[9px] text-gray-400 leading-snug">Disfruta de miles de películas, series y deportes en vivo desde la comodidad de tu hogar.</p>
        </div>
        
        {/* Mock Remote Select Indicator */}
        <Link 
          to="/mockup/tv/app"
          className="bg-cyan-400 hover:bg-cyan-500 text-black px-2.5 py-1.5 rounded-lg font-black text-[9px] shadow-lg flex items-center gap-1 z-10 transition-all hover:scale-105 active:scale-95"
        >
          <Play className="w-3 h-3 fill-current ml-0.5" /> Ver Catálogo
        </Link>

        {/* Decorative backdrop glow */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cyan-500/10 to-transparent blur-xl pointer-events-none" />
      </div>

      {/* Apps Row */}
      <div className="space-y-2">
        <h3 className="text-gray-400 font-extrabold uppercase tracking-widest text-[8px] px-0.5">Mis Aplicaciones</h3>
        
        <div className="flex items-center gap-3.5 py-1 overflow-x-auto scrollbar-hide">
          {apps.map((app, idx) => (
            app.isMeli ? (
              <Link 
                key={idx}
                to={app.link || '#'}
                className={`w-20 h-12 rounded-lg flex flex-col items-center justify-center text-gray-950 font-bold transition-all relative overflow-hidden group cursor-pointer ${app.color}`}
              >
                <div className="flex items-center gap-0.5 text-gray-900 leading-none">
                  <span className="text-[9px] font-black italic tracking-tighter">mercado</span>
                  <span className="text-[9px] font-black tracking-normal text-cyan-700">play</span>
                </div>
                {/* Focus indicator bar */}
                <span className="absolute bottom-1 w-2.5 h-0.5 bg-cyan-600 rounded-full group-hover:scale-x-150 transition-all" />
              </Link>
            ) : (
              <div 
                key={idx}
                className={`w-16 h-10 rounded-lg flex items-center justify-center text-center font-semibold transition-all hover:scale-105 select-none ${app.color}`}
              >
                <span>{app.logoText}</span>
              </div>
            )
          ))}
        </div>
      </div>
      
    </div>
  );
}
