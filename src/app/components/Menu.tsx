import { X, User, Heart, Package, CreditCard, MapPin, HelpCircle, Settings, Tag, TrendingUp, Gift, Bell, Shield, FileText, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Menu() {
  const sections = [
    {
      title: 'Mi cuenta',
      items: [
        { icon: <User className="w-5 h-5 text-blue-600" />, label: 'Ver perfil completo', link: '/mockup/account' },
        { icon: <Heart className="w-5 h-5 text-red-500" />, label: 'Mis favoritos', link: '/mockup/favorites', badge: '4' },
        { icon: <Package className="w-5 h-5 text-orange-500" />, label: 'Mis compras', badge: '3' },
        { icon: <Bell className="w-5 h-5 text-purple-600" />, label: 'Notificaciones', link: '/mockup/notifications', badge: '2' },
      ],
    },
    {
      title: 'Finanzas & Compras',
      items: [
        { icon: <CreditCard className="w-5 h-5 text-green-600" />, label: 'Tarjetas y pagos con MP' },
        { icon: <MapPin className="w-5 h-5 text-emerald-600" />, label: 'Direcciones y envío' },
        { icon: <Tag className="w-5 h-5 text-red-400" />, label: 'Cupones de descuento' },
      ],
    },
    {
      title: 'Beneficios meli+',
      items: [
        { icon: <TrendingUp className="w-5 h-5 text-[#3483FA]" />, label: 'Mercado Puntos / Nivel 6', highlight: '800 pts' },
        { icon: <Gift className="w-5 h-5 text-pink-500" />, label: 'Disney+ y envíos FULL gratis' },
      ],
    },
    {
      title: 'Configuración',
      items: [
        { icon: <Settings className="w-5 h-5 text-gray-500" />, label: 'Preferencias generales' },
        { icon: <Shield className="w-5 h-5 text-sky-600" />, label: 'Seguridad de la cuenta' },
        { icon: <FileText className="w-5 h-5 text-gray-400" />, label: 'Términos y condiciones legales' },
        { icon: <HelpCircle className="w-5 h-5 text-gray-400" />, label: 'Ayuda y soporte' },
      ],
    },
  ];

  return (
    <div className="flex flex-col h-screen bg-meli-light font-sans text-gray-900 select-none">
      
      {/* Header */}
      <div className="bg-meli-yellow px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <h1 className="font-extrabold text-gray-800 text-base tracking-tight">Navegación</h1>
        <Link to="/mockup/home" className="p-1 hover:bg-black/5 rounded-full transition-colors">
          <X className="w-6 h-6 text-gray-800" />
        </Link>
      </div>

      {/* Profile Header Preview */}
      <Link 
        to="/mockup/account" 
        className="bg-gradient-to-r from-[#0C1A30] via-[#1A2C49] to-[#2B4673] p-4 flex items-center gap-4 text-white hover:brightness-105 transition-all shadow-sm"
      >
        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/10 shadow-inner">
          <User className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="font-extrabold text-sm tracking-tight text-white leading-tight">Emmanuel</h2>
          <p className="text-[10px] text-gray-300 font-bold mt-0.5">
            Miembro <span className="text-meli-blue">meli+</span> • Nivel 6
          </p>
        </div>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </Link>

      {/* Menu Categories list */}
      <div className="flex-1 overflow-y-auto scrollbar-hide py-3 space-y-3">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white border-y border-gray-100 shadow-xs">
            <h3 className="px-4 py-2 text-[10px] font-black text-gray-400 uppercase tracking-wider">
              {section.title}
            </h3>
            
            <div className="divide-y divide-gray-50">
              {section.items.map((item, itemIndex) => (
                <Link
                  key={itemIndex}
                  to={item.link || '#'}
                  className="flex items-center justify-between px-4 py-3.5 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <span className="text-xs font-semibold text-gray-700">{item.label}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    {item.badge && (
                      <span className="bg-meli-blue text-white text-[9px] font-bold px-2 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                    {item.highlight && (
                      <span className="text-meli-blue font-bold text-xs">
                        {item.highlight}
                      </span>
                    )}
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Meli signature app description */}
        <div className="px-4 py-6 text-center text-[10px] text-gray-400">
          <p className="font-semibold">Mercado Libre Android v12.458.0</p>
          <p className="mt-0.5">Hecho con amor • Maquetado Premium</p>
        </div>
      </div>
    </div>
  );
}
