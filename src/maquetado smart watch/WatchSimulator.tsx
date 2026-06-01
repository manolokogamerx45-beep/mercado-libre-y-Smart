import { ReactNode } from 'react';

interface WatchSimulatorProps {
  children: ReactNode;
}

export default function WatchSimulator({ children }: WatchSimulatorProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-meli-light p-4 print:bg-white print:p-0 select-none">
      
      {/* Outer Watch Case Wrapper */}
      <div className="relative flex items-center justify-center print:transform-none select-none">
        
        {/* Watch Straps (Correa) - Hidden when printing */}
        <div className="absolute -top-[90px] w-24 h-28 bg-zinc-800 rounded-t-3xl -z-10 shadow-inner border-t border-zinc-700/50 print:hidden" />
        <div className="absolute -bottom-[90px] w-24 h-28 bg-zinc-800 rounded-b-3xl -z-10 shadow-inner border-b border-zinc-700/50 print:hidden" />

        {/* Watch Case (Cuerpo del reloj) */}
        <div className="relative w-[280px] h-[320px] bg-gradient-to-br from-zinc-700 via-zinc-800 to-zinc-950 rounded-[48px] p-3.5 shadow-2xl border border-zinc-600/60 flex items-center justify-center print:bg-zinc-900 print:shadow-none print:rounded-[36px] print:p-1.5">
          
          {/* Digital Crown (Corona derecha) */}
          <div className="absolute -right-2 top-20 w-3 h-11 bg-gradient-to-b from-zinc-600 via-zinc-700 to-zinc-800 rounded-r-md border-y border-r border-zinc-500 shadow-md print:hidden" />
          {/* Side Button (Botón lateral derecho) */}
          <div className="absolute -right-1 top-36 w-1.5 h-14 bg-zinc-800 rounded-r-sm border-r border-zinc-700 shadow-sm print:hidden" />

          {/* Screen Bezel (Borde interior de la pantalla) */}
          <div className="relative w-full h-full bg-black rounded-[36px] p-1.5 overflow-hidden flex items-center justify-center border border-black/90 print:rounded-[32px]">
            
            {/* Screen Inner Display Area */}
            <div className="relative w-[236px] h-[276px] bg-black rounded-[28px] overflow-hidden flex flex-col text-white font-sans print:rounded-[26px]">
              {children}
            </div>

            {/* Glass Screen Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none rounded-[36px] print:hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}
