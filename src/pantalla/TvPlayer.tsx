import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Pause, Volume2, Maximize2, Settings, Subtitles } from 'lucide-react';
import { ImageWithFallback } from '../app/components/figma/ImageWithFallback';

export default function TvPlayer() {
  const { id } = useParams<{ id: string }>();
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(14); // Start at 14s elapsed

  const movies = [
    { id: 1, title: 'Del revés 2 (Inside Out 2)', poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400', duration: '1h 36m', seconds: 5760 },
    { id: 2, title: 'Deadpool & Wolverine', poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400', duration: '2h 7m', seconds: 7620 },
    { id: 3, title: 'Avatar: El Sentido del Agua', poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400', duration: '3h 12m', seconds: 11520 },
    { id: 4, title: 'El Rey León', poster: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400', duration: '1h 58m', seconds: 7080 }
  ];

  const movieId = parseInt(id || '2');
  const movie = movies.find(m => m.id === movieId) || movies[1];

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => (prev + 1) % movie.seconds);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, movie.seconds]);

  const formatSeconds = (totalSecs: number) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    
    const pad = (num: number) => String(num).padStart(2, '0');
    
    if (hrs > 0) {
      return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    }
    return `${pad(mins)}:${pad(secs)}`;
  };

  const percentage = (progress / movie.seconds) * 100;

  return (
    <div className="flex-1 bg-black flex flex-col justify-between p-6 text-sm relative text-white select-none overflow-hidden font-sans">
      {/* Background Poster Blurred */}
      <div className="absolute inset-0 bg-black z-0">
        <ImageWithFallback
          src={movie.poster}
          alt={movie.title}
          className="w-full h-full object-cover opacity-20 filter brightness-50"
        />
      </div>

      {/* Top HUD overlay: Back button & Title */}
      <div className="flex items-center justify-between relative z-10 bg-gradient-to-b from-black/85 to-transparent p-3 rounded-t-xl">
        <div className="flex items-center gap-3">
          <Link to="/mockup/tv/app" className="hover:bg-zinc-800 p-1 rounded-full text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="font-extrabold text-xs uppercase tracking-wider text-gray-300">Mercado Play</span>
        </div>
        <span className="font-bold text-xs text-gray-300">{movie.title}</span>
      </div>

      {/* Center overlay: Play/Pause indicator & Loading spinner */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3.5 z-10 pointer-events-none">
        {isPlaying ? (
          <div className="flex flex-col items-center gap-2.5">
            <div className="w-12 h-12 rounded-full border-4 border-cyan-400 border-t-transparent animate-spin" />
            <span className="text-[10px] text-cyan-400 font-extrabold tracking-widest uppercase bg-black/60 px-3.5 py-1 rounded-lg shadow-md animate-pulse">Reproduciendo</span>
          </div>
        ) : (
          <div className="bg-black/65 rounded-full p-6 border border-white/10 shadow-2xl">
            <Pause className="w-12 h-12 text-white fill-current animate-bounce" />
          </div>
        )}
      </div>

      {/* Bottom HUD overlay: Player controls & Time progress slider */}
      <div className="relative z-10 bg-gradient-to-t from-black/90 to-transparent p-4 rounded-b-xl space-y-4 mt-auto">
        
        {/* Timeline Slider Progress */}
        <div className="space-y-2">
          <div className="h-2 bg-zinc-850 rounded-full w-full overflow-hidden relative">
            <div 
              style={{ width: `${percentage}%` }}
              className="h-full bg-cyan-400 rounded-full shadow-[0_0_12px_#22d3ee]" 
            />
          </div>
          <div className="flex items-center justify-between text-xs text-gray-400 font-mono font-bold px-0.5">
            <span>{formatSeconds(progress)}</span>
            <span>-{formatSeconds(movie.seconds - progress)}</span>
          </div>
        </div>

        {/* Player Controls Buttons */}
        <div className="flex items-center justify-between pt-1">
          <div className="flex items-center gap-5">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="hover:bg-zinc-800 p-2 rounded-full text-white cursor-pointer transition-colors active:scale-95 bg-white/5 border border-white/10"
            >
              {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
            </button>
            <button className="hover:bg-zinc-800 p-2 rounded-full text-gray-300 hover:text-white transition-colors">
              <Volume2 className="w-6 h-6" />
            </button>
            <button className="hover:bg-zinc-800 p-2 rounded-full text-gray-300 hover:text-white transition-colors">
              <Subtitles className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex items-center gap-5">
            <button className="hover:bg-zinc-800 p-2 rounded-full text-gray-300 hover:text-white transition-colors">
              <Settings className="w-6 h-6" />
            </button>
            <button className="hover:bg-zinc-800 p-2 rounded-full text-gray-300 hover:text-white transition-colors">
              <Maximize2 className="w-6 h-6" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
