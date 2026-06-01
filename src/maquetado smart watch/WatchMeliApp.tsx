import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Truck, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WatchMeliApp() {
  const [received, setReceived] = useState(false);

  const handleMarkReceived = () => {
    setReceived(true);
    // Fire confetti for premium feedback
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  return (
    <div className="flex-1 bg-zinc-950 flex flex-col select-none text-white text-left relative overflow-hidden">
      
      {/* Top Header */}
      <div className="bg-meli-yellow text-gray-800 px-3 py-1.5 flex items-center justify-between sticky top-0 z-20 shadow-sm border-b border-yellow-500/20">
        <Link to="/mockup/smartwatch/apps" className="hover:bg-black/10 p-0.5 rounded-full text-gray-800 transition-colors">
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <span className="text-[10px] font-black italic tracking-tighter uppercase">mercado libre</span>
        <div className="w-4 h-4" /> {/* Spacer */}
      </div>

      {/* Scrollable Notification Details */}
      <div className="flex-1 overflow-y-auto p-2.5 space-y-2.5 scrollbar-hide text-[11px]">
        
        {received ? (
          <div className="flex flex-col items-center justify-center py-6 text-center space-y-2 bg-zinc-900 rounded-xl border border-zinc-800 p-3.5">
            <CheckCircle className="w-8 h-8 text-meli-green" />
            <h2 className="font-extrabold text-xs">¡Pedido Entregado!</h2>
            <p className="text-[9px] text-gray-400 mt-1">Gracias por confirmar la recepción del iPhone 14 Pro Max.</p>
            <button 
              onClick={() => setReceived(false)}
              className="text-[9px] text-meli-blue font-bold hover:underline mt-2 cursor-pointer"
            >
              Ver detalles de nuevo
            </button>
          </div>
        ) : (
          <>
            {/* Delivery Warning Banner */}
            <div className="bg-meli-blue/15 border border-meli-blue/20 rounded-xl p-2 flex items-start gap-2 shadow-xs">
              <Truck className="w-5 h-5 text-meli-blue flex-shrink-0 mt-0.5 animate-bounce" />
              <div>
                <h3 className="font-extrabold text-white text-[10px] leading-tight">Prepárate para recibir</h3>
                <p className="text-[8px] text-gray-300 mt-0.5 leading-snug">El repartidor está cerca de tu domicilio.</p>
              </div>
            </div>

            {/* Stepper Progress Bar */}
            <div className="bg-zinc-900 rounded-xl p-2 border border-zinc-800 flex flex-col gap-1.5">
              <span className="text-[8px] font-bold text-gray-400 uppercase tracking-wider">Estado de Envío</span>
              <div className="flex items-center gap-1 my-0.5">
                <div className="h-1 bg-meli-blue rounded-full flex-1" />
                <div className="h-1 bg-meli-blue rounded-full flex-1 animate-pulse" />
                <div className="h-1 bg-zinc-800 rounded-full flex-1" />
              </div>
              <p className="text-[8px] text-meli-green font-bold">
                ⚡ Llega hoy antes de las 18:00 hs
              </p>
            </div>

            {/* Delivery Details Card */}
            <div className="bg-zinc-900 rounded-xl p-2 border border-zinc-800 space-y-1.5">
              <div>
                <span className="text-[8px] text-gray-400 block font-semibold">PRODUCTO</span>
                <p className="font-bold truncate text-[10px]">iPhone 14 Pro Max 256GB</p>
              </div>
              <div>
                <span className="text-[8px] text-gray-400 block font-semibold">REPARTIDOR</span>
                <p className="font-bold flex items-center gap-1 text-[10px]">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-500" />
                  Carlos Gómez (En moto)
                </p>
              </div>
              <div>
                <span className="text-[8px] text-gray-400 block font-semibold">CÓDIGO DE ENTREGA</span>
                <p className="font-extrabold text-meli-yellow font-mono text-xs">8 2 1</p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-2 pt-1">
              <button 
                onClick={handleMarkReceived}
                className="w-full bg-meli-green hover:bg-green-700 text-white font-bold py-2 rounded-xl transition-colors cursor-pointer text-center text-[10px] shadow-sm"
              >
                Confirmar Recepción
              </button>
              <button 
                onClick={() => alert('Mostrando mapa de entrega en tiempo real... 🗺️')}
                className="w-full bg-zinc-850 hover:bg-zinc-700 text-white font-bold py-2 rounded-xl transition-colors cursor-pointer text-center text-[10px]"
              >
                Ver Mapa de Entrega
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
