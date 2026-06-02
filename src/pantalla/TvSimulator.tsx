import { ReactNode } from 'react';

interface TvSimulatorProps {
  children: ReactNode;
}

export default function TvSimulator({ children }: TvSimulatorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-meli-light p-4 print:bg-white print:p-0 select-none">
      {/* Smart TV Frame Wrapper */}
      <div className="relative flex flex-col items-center print:transform-none">
        
        {/* TV Screen Case (Grosor y Marco) */}
        <div className="relative w-[680px] h-[395px] bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-950 rounded-2xl p-3 shadow-2xl border border-zinc-600/80 flex items-center justify-center print:shadow-none print:bg-zinc-900 print:p-2 print:rounded-xl">
          
          {/* Status LED Indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee] animate-pulse print:hidden" />

          {/* Screen Display Area (16:9 Aspect Ratio) */}
          <div className="relative w-full h-full bg-black rounded-lg overflow-hidden flex flex-col text-white font-sans">
            {children}
          </div>

          {/* Screen Gloss Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/3 to-white/6 pointer-events-none rounded-2xl print:hidden" />
        </div>

        {/* TV Table Stand - Hidden when printing */}
        <div className="w-44 h-7 bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-b-xl border-t border-zinc-700 shadow-lg -mt-0.5 print:hidden" />
        <div className="w-64 h-3 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-900 rounded-full shadow-md print:hidden" />
      </div>
    </div>
  );
}
