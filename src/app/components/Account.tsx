import { useState } from 'react';
import { ShoppingCart, Menu, ChevronRight, User, Package, CreditCard, MapPin, Bell, Shield, HelpCircle, LogOut, Sparkles, CheckCircle, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function Account() {
  const [showCVU, setShowCVU] = useState(false);
  const [showAccountBal, setShowAccountBal] = useState(true);

  const orders = [
    { id: 1, status: 'Entregados', count: 12, color: 'text-green-600' },
    { id: 2, status: 'En camino', count: 2, color: 'text-blue-600' },
    { id: 3, status: 'Preparando', count: 1, color: 'text-orange-600' },
  ];

  const menuItems = [
    { icon: <Package className="w-5 h-5" />, label: 'Mis compras', badge: '3' },
    { icon: <CreditCard className="w-5 h-5" />, label: 'Tarjetas y pagos' },
    { icon: <MapPin className="w-5 h-5" />, label: 'Direcciones registradas' },
    { icon: <Bell className="w-5 h-5" />, label: 'Configuración de notificaciones' },
    { icon: <Shield className="w-5 h-5" />, label: 'Seguridad y contraseña' },
    { icon: <HelpCircle className="w-5 h-5" />, label: 'Ayuda / Soporte' },
  ];

  return (
    <div className="flex flex-col h-screen bg-meli-light font-sans text-gray-900 pb-16">
      
      {/* Header */}
      <div className="bg-meli-yellow px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <Link to="/mockup/menu" className="p-1 hover:bg-black/5 rounded-full transition-colors">
          <Menu className="w-6 h-6 text-gray-800" />
        </Link>
        <h1 className="font-extrabold text-gray-800 text-base tracking-tight">Mi cuenta</h1>
        <Link to="/mockup/cart" className="p-1 hover:bg-black/5 rounded-full transition-colors relative">
          <ShoppingCart className="w-6 h-6 text-gray-800" />
          <span className="absolute top-0 right-0 bg-meli-blue text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-meli-yellow">
            2
          </span>
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide space-y-3">
        
        {/* Profile Card & Level */}
        <div className="bg-white p-4 shadow-sm border-b border-gray-100">
          <div className="flex items-center gap-4 mb-4">
            {/* Avatar */}
            <div className="w-14 h-14 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
              <User className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="font-bold text-gray-800 text-base">Emmanuel</h2>
              <p className="text-xs text-gray-400 font-medium">emmanuel.test@mercadolibre.com</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </div>

          {/* Level 6 / meli+ Card */}
          <div className="bg-gradient-to-r from-[#0C1A30] to-[#1D2F4E] rounded-xl p-4 text-white shadow-sm border border-gray-800/10">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1.5">
                <span className="bg-meli-blue text-[10px] font-black px-1.5 py-0.5 rounded tracking-wide">meli+</span>
                <span className="text-xs font-semibold text-gray-300">Nivel 6 • Suscripto</span>
              </div>
              <span className="text-xs">🏆 Beneficios activos</span>
            </div>
            
            <div className="w-full bg-white/10 rounded-full h-1.5 mb-2 overflow-hidden">
              <div className="bg-meli-blue rounded-full h-1.5 w-4/5"></div>
            </div>
            <div className="flex justify-between items-center text-[10px] text-gray-300 font-medium">
              <span>800 / 1000 Puntos</span>
              <span className="text-meli-blue font-bold hover:underline">Ver mis beneficios</span>
            </div>
          </div>
        </div>

        {/* Mercado Pago Wallet Mini Card */}
        <div className="bg-white p-4 shadow-sm border-y border-gray-100">
          <div className="flex items-center justify-between border-b pb-2 mb-3">
            <span className="font-extrabold text-sm tracking-tight text-meli-blue italic">
              mercado <span className="text-gray-800">pago</span>
            </span>
            <button 
              onClick={() => setShowAccountBal(!showAccountBal)}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              {showAccountBal ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            </button>
          </div>
          
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Dinero disponible</p>
              <h2 className="text-lg font-bold text-gray-800">
                {showAccountBal ? '$ 12,450.00' : '••••••'}
              </h2>
            </div>
            
            <button 
              onClick={() => setShowCVU(!showCVU)}
              className="border border-meli-blue/20 hover:bg-blue-50 text-meli-blue text-[10px] font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              {showCVU ? 'CVU: 000000310000...' : 'Ver CVU y datos'}
            </button>
          </div>
        </div>

        {/* Quick Orders summary */}
        <div className="bg-white p-4 shadow-sm border-y border-gray-100">
          <h3 className="font-extrabold text-xs text-gray-800 uppercase tracking-wider mb-3">Resumen de envíos</h3>
          <div className="grid grid-cols-3 gap-2 text-center">
            {orders.map((order) => (
              <button
                key={order.id}
                className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-100 hover:bg-gray-50/50 transition-colors cursor-pointer"
              >
                <span className={`text-xl font-black ${order.color} mb-0.5`}>{order.count}</span>
                <span className="text-[10px] font-bold text-gray-500">{order.status}</span>
              </button>
            ))}
          </div>
        </div>

        {/* List Menu Items */}
        <div className="bg-white shadow-sm border-y border-gray-100 overflow-hidden divide-y divide-gray-100 select-none">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50/50 transition-colors text-left cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="text-gray-400 flex-shrink-0">{item.icon}</div>
                <span className="text-xs font-semibold text-gray-700">{item.label}</span>
              </div>
              <div className="flex items-center gap-2">
                {item.badge && (
                  <span className="bg-meli-blue text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
                <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
              </div>
            </button>
          ))}
        </div>

        {/* Logout button */}
        <div className="bg-white shadow-sm border-y border-gray-100">
          <button className="w-full flex items-center justify-center gap-2 p-4 text-red-500 hover:bg-red-50/30 transition-colors font-bold text-xs cursor-pointer">
            <LogOut className="w-4.5 h-4.5" />
            <span>Cerrar sesión</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="py-6 text-center text-[10px] text-gray-400">
          <p>Mercado Libre v12.458.0 - Mockup Preview</p>
          <p className="mt-0.5">© 2026 Mercado Libre S.R.L.</p>
        </div>

      </div>

      <BottomNav activeTab="account" />
    </div>
  );
}
