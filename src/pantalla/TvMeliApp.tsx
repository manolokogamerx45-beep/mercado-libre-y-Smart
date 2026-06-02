import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Info, Star } from 'lucide-react';
import { ImageWithFallback } from '../app/components/figma/ImageWithFallback';

export default function TvMeliApp() {
  const [focusedMovie, setFocusedMovie] = useState(2); // Default to Deadpool & Wolverine

  const movies = [
    { 
      id: 1, 
      title: 'Del revés 2 (Inside Out 2)', 
      genre: 'Animación • Familiar', 
      poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400', 
      year: '2024',
      rating: '4.8',
      desc: 'Riley es ahora una adolescente y su cuartel general sufre una repentina reforma para hacer espacio a algo inesperado: ¡nuevas emociones!'
    },
    { 
      id: 2, 
      title: 'Deadpool & Wolverine', 
      genre: 'Acción • Comedia', 
      poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400', 
      year: '2024',
      rating: '4.7',
      desc: 'Wolverine se une al carismático y desvergonzado Deadpool en una misión multiversal para salvar su línea de tiempo de la destrucción.'
    },
    { 
      id: 3, 
      title: 'Avatar: El Sentido del Agua', 
      genre: 'Ciencia Ficción • Aventura', 
      poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400', 
      year: '2022',
      rating: '4.6',
      desc: 'Más de una década después de los acontecimientos de la primera película, la familia Sully lucha por sobrevivir en los océanos de Pandora.'
    },
    { 
      id: 4, 
      title: 'El Rey León', 
      genre: 'Familiar • Drama', 
      poster: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400', 
      year: '2019',
      rating: '4.9',
      desc: 'Tras el asesinato de su padre Mufasa, el pequeño león Simba huye al exilio. Con ayuda de nuevos amigos, aprenderá a reclamar su trono.'
    }
  ];

  const currentMovie = movies.find(m => m.id === focusedMovie) || movies[1];

  return (
    <div className="flex-1 bg-gradient-to-b from-zinc-950 via-slate-950 to-zinc-950 flex flex-col justify-between p-6 text-sm relative text-white overflow-hidden select-none">
      
      {/* Background Hero blur movie art */}
      <div className="absolute inset-0 bg-black/60 z-0">
        <ImageWithFallback
          src={currentMovie.poster}
          alt={currentMovie.title}
          className="w-full h-full object-cover opacity-15 blur-xs"
        />
      </div>

      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-white/5 pb-3 relative z-10">
        <div className="flex items-center gap-5">
          <Link to="/mockup/tv/home" className="hover:bg-zinc-800 p-1 rounded-full text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex items-center gap-1 leading-none">
            <span className="font-extrabold text-base tracking-tight italic">mercado</span>
            <span className="font-extrabold text-base text-cyan-400">play</span>
          </div>
          <span className="text-gray-400 font-bold border-b-2 border-cyan-400 text-white pb-1">Inicio</span>
          <span className="text-gray-400 font-semibold hover:text-white cursor-pointer">Películas</span>
          <span className="text-gray-400 font-semibold hover:text-white cursor-pointer">Series</span>
        </div>
        <span className="bg-cyan-500/20 text-cyan-400 font-bold px-2.5 py-1 rounded text-[10px] uppercase tracking-wider">
          TV Mode
        </span>
      </div>

      {/* Hero Display details area */}
      <div className="flex-1 my-4 flex flex-col justify-center max-w-[75%] space-y-3 relative z-10">
        <h1 className="text-2xl font-black text-white leading-tight drop-shadow-md">{currentMovie.title}</h1>
        
        <div className="flex items-center gap-4 text-xs text-gray-400 font-bold">
          <span className="text-cyan-400 font-extrabold bg-cyan-500/10 px-2 py-0.5 rounded">{currentMovie.genre}</span>
          <span>{currentMovie.year}</span>
          <span className="flex items-center gap-1 text-yellow-500">
            <Star className="w-3.5 h-3.5 fill-current" /> {currentMovie.rating}
          </span>
        </div>
        
        <p className="text-xs text-gray-300 leading-relaxed line-clamp-3 drop-shadow-sm max-w-xl">
          {currentMovie.desc}
        </p>

        <div className="flex gap-3 pt-2">
          <Link
            to={`/mockup/tv/play/${focusedMovie}`}
            className="bg-cyan-400 hover:bg-cyan-500 text-black px-6 py-2.5 rounded-xl font-black text-xs flex items-center gap-1.5 shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <Play className="w-4 h-4 fill-current ml-0.5" /> Reproducir
          </Link>
          <button className="bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-800 text-white px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5">
            <Info className="w-4 h-4" /> Más info
          </button>
        </div>
      </div>

      {/* Carousel Catalog */}
      <div className="space-y-2.5 relative z-10">
        <h3 className="text-gray-400 font-bold uppercase tracking-widest text-[10px] px-0.5">Catálogo destacado</h3>
        
        <div className="flex items-center gap-5 py-1 overflow-x-auto scrollbar-hide">
          {movies.map((movie) => (
            <button
              key={movie.id}
              onMouseEnter={() => setFocusedMovie(movie.id)}
              onClick={() => setFocusedMovie(movie.id)}
              className={`w-44 text-left flex-shrink-0 flex gap-3.5 p-2 rounded-xl transition-all focus:outline-none cursor-pointer ${
                movie.id === focusedMovie 
                  ? 'bg-white/10 border border-cyan-400/60 scale-[1.03] shadow-md' 
                  : 'bg-zinc-950/40 border border-white/5 hover:bg-white/5'
              }`}
            >
              <ImageWithFallback
                src={movie.poster}
                alt={movie.title}
                className="w-14 h-20 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex flex-col justify-center min-w-0">
                <h4 className="font-extrabold text-xs text-white line-clamp-1">{movie.title}</h4>
                <p className="text-[10px] text-gray-400 truncate mt-0.5">{movie.genre.split(' • ')[0]}</p>
                <span className="text-[9px] text-yellow-500 font-bold mt-1.5">★ {movie.rating}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
      
    </div>
  );
}
