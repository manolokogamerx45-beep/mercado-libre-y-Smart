import { useState } from 'react';
import { ShoppingCart, Menu, Package, TrendingDown, Truck, CreditCard, Bell, ChevronRight, X, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function Notifications() {
  const [activeTab, setActiveTab] = useState<'todas' | 'compras' | 'ofertas'>('todas');
  const [selectedNotif, setSelectedNotif] = useState<any | null>(null);
  
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'compras',
      icon: <Package className="w-5 h-5 text-blue-600" />,
      title: '¡Tu pedido llegó!',
      message: 'El pedido #45821 de tu iPhone 14 Pro fue entregado a las 14:32 hs.',
      time: 'Hace 2 horas',
      unread: true,
      details: {
        orderId: '#45821',
        seller: 'Apple Store Oficial',
        address: 'Calle Falsa 123, Emmanuel',
        deliveryDate: '01 de Junio, 14:32 hs',
        status: 'Entregado en puerta'
      }
    },
    {
      id: 2,
      type: 'ofertas',
      icon: <TrendingDown className="w-5 h-5 text-green-600" />,
      title: 'Bajó de precio un favorito',
      message: 'iPhone 14 Pro que guardaste en tus Favoritos ahora tiene un 15% OFF de descuento.',
      time: 'Hace 5 horas',
      unread: true,
      details: {
        product: 'iPhone 14 Pro Max 256GB',
        prevPrice: '$1,499',
        currPrice: '$1,299',
        saving: '$200 USD',
        link: '/mockup/product/1'
      }
    },
    {
      id: 3,
      type: 'compras',
      icon: <Truck className="w-5 h-5 text-orange-600" />,
      title: 'En camino',
      message: 'Tu paquete #45820 con tus Zapatillas Nike Pegasus ya está en el centro de distribución local.',
      time: 'Ayer',
      unread: false,
      details: {
        orderId: '#45820',
        seller: 'Nike Argentina',
        carrier: 'Meli Envíos Express',
        status: 'En camino'
      }
    },
    {
      id: 4,
      type: 'compras',
      icon: <CreditCard className="w-5 h-5 text-purple-600" />,
      title: 'Pago aprobado',
      message: 'Aprobamos tu pago de $1,548.00 por el pedido #45819 en Apple Store.',
      time: 'Hace 2 días',
      unread: false,
      details: {
        orderId: '#45819',
        method: 'Mercado Pago (Mastercard **** 4321)',
        amount: '$1,548.00 USD',
        status: 'Aprobado'
      }
    },
    {
      id: 5,
      type: 'ofertas',
      icon: <TrendingDown className="w-5 h-5 text-green-600" />,
      title: 'Descuento exclusivo meli+',
      message: 'Cupón exclusivo de 20% en marcas de tecnología para miembros meli+. Código: TECH20.',
      time: 'Hace 3 días',
      unread: false,
      details: {
        promoName: 'Tecnología meli+',
        coupon: 'TECH20',
        discount: '20% de descuento',
        validUntil: '08 de Junio'
      }
    },
  ]);

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, unread: false })));
  };

  const handleNotifClick = (notif: any) => {
    setSelectedNotif(notif);
    // Mark as read when clicked
    setNotifications(prev => 
      prev.map(n => n.id === notif.id ? { ...n, unread: false } : n)
    );
  };

  const filteredNotifs = notifications.filter(notif => {
    if (activeTab === 'compras') return notif.type === 'compras';
    if (activeTab === 'ofertas') return notif.type === 'ofertas';
    return true;
  });

  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5] font-sans text-gray-900 pb-16 relative">
      
      {/* Header */}
      <div className="bg-[#FFE600] px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <Link to="/mockup/menu" className="p-1 hover:bg-[#FFE600]/80 rounded-full transition-colors">
          <Menu className="w-6 h-6 text-gray-800" />
        </Link>
        <h1 className="font-extrabold text-gray-800 text-base tracking-tight">Notificaciones</h1>
        <Link to="/mockup/cart" className="p-1 hover:bg-[#FFE600]/80 rounded-full transition-colors relative">
          <ShoppingCart className="w-6 h-6 text-gray-800" />
          <span className="absolute top-0 right-0 bg-[#3483FA] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-[#FFE600]">
            2
          </span>
        </Link>
      </div>

      {/* Tabs Menu & Quick Read Button */}
      <div className="bg-white px-4 border-b border-gray-100 flex items-center justify-between select-none">
        <div className="flex gap-4">
          <button 
            onClick={() => setActiveTab('todas')}
            className={`pb-2.5 pt-3.5 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'todas' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Todas
          </button>
          <button 
            onClick={() => setActiveTab('compras')}
            className={`pb-2.5 pt-3.5 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'compras' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Compras
          </button>
          <button 
            onClick={() => setActiveTab('ofertas')}
            className={`pb-2.5 pt-3.5 text-xs font-bold transition-all border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'ofertas' ? 'border-blue-600 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            Ofertas
          </button>
        </div>
        
        {notifications.some(n => n.unread) && (
          <button 
            onClick={markAllAsRead}
            className="text-[10px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-0.5 cursor-pointer"
          >
            <Check className="w-3.5 h-3.5" /> Marcar leído
          </button>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {filteredNotifs.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full px-6 py-12 text-center bg-white m-4 rounded-xl shadow-xs border">
            <Bell className="w-16 h-16 text-gray-200 mb-4" />
            <h2 className="text-lg font-bold text-gray-800 mb-1.5">No hay notificaciones</h2>
            <p className="text-gray-400 text-xs max-w-[240px]">
              Te avisaremos por acá cuando tus paquetes estén en camino, bajen de precio o recibas novedades.
            </p>
          </div>
        ) : (
          <div className="bg-white border-b border-gray-100 divide-y divide-gray-50">
            {filteredNotifs.map((notif) => (
              <button
                key={notif.id}
                onClick={() => handleNotifClick(notif)}
                className={`w-full flex gap-3.5 p-4 text-left transition-colors cursor-pointer ${
                  notif.unread ? 'bg-blue-50/30' : 'hover:bg-gray-50/40'
                }`}
              >
                {/* Icon wrapper */}
                <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center flex-shrink-0 shadow-xs border border-gray-100/50">
                  {notif.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-0.5">
                    <h3 className="font-bold text-xs text-gray-800 leading-snug">{notif.title}</h3>
                    {notif.unread && (
                      <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 ml-2 mt-1.5" />
                    )}
                  </div>
                  <p className="text-xs text-gray-500 leading-normal line-clamp-2">
                    {notif.message}
                  </p>
                  <span className="text-[9px] text-gray-400 font-semibold block mt-1.5">{notif.time}</span>
                </div>
                
                <ChevronRight className="w-4 h-4 text-gray-300 self-center flex-shrink-0" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Notification Detail Modal */}
      {selectedNotif && (
        <div className="absolute inset-0 bg-black/60 z-50 flex items-end justify-center">
          <div className="w-full max-w-[430px] bg-white rounded-t-2xl p-5 shadow-2xl animate-in slide-in-from-bottom duration-300">
            
            {/* Modal header */}
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="p-1.5 bg-blue-50 rounded-full">{selectedNotif.icon}</span>
                <h3 className="font-extrabold text-gray-800 text-sm">{selectedNotif.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedNotif(null)}
                className="text-gray-400 hover:text-gray-600 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Modal content */}
            <div className="space-y-4 text-xs text-gray-700">
              <p className="font-semibold text-gray-800 leading-relaxed bg-gray-50 p-3 rounded-xl border border-gray-100">
                {selectedNotif.message}
              </p>
              
              {/* Conditional rendering of details */}
              {selectedNotif.type === 'compras' && selectedNotif.details && (
                <div className="space-y-2 pt-2">
                  <h4 className="font-bold text-gray-800 uppercase tracking-wider text-[9px] text-gray-400">Detalles del envío</h4>
                  <div className="grid grid-cols-2 gap-2 border border-gray-100 rounded-xl p-3 bg-white">
                    <div>
                      <p className="text-gray-400 text-[9px]">Código de Envío</p>
                      <p className="font-bold">{selectedNotif.details.orderId}</p>
                    </div>
                    {selectedNotif.details.carrier && (
                      <div>
                        <p className="text-gray-400 text-[9px]">Transportista</p>
                        <p className="font-bold">{selectedNotif.details.carrier}</p>
                      </div>
                    )}
                    {selectedNotif.details.deliveryDate && (
                      <div>
                        <p className="text-gray-400 text-[9px]">Entregado el</p>
                        <p className="font-bold">{selectedNotif.details.deliveryDate}</p>
                      </div>
                    )}
                    {selectedNotif.details.address && (
                      <div>
                        <p className="text-gray-400 text-[9px]">Dirección</p>
                        <p className="font-bold truncate">{selectedNotif.details.address}</p>
                      </div>
                    )}
                    <div className="col-span-2">
                      <p className="text-gray-400 text-[9px]">Estado de envío</p>
                      <p className="font-bold text-green-600 flex items-center gap-1">
                        <Check className="w-4 h-4 bg-green-500 text-white rounded-full p-0.5" />
                        {selectedNotif.details.status}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {selectedNotif.type === 'ofertas' && selectedNotif.details && (
                <div className="space-y-2 pt-2">
                  <h4 className="font-bold text-gray-800 uppercase tracking-wider text-[9px] text-gray-400">Detalle de la oferta</h4>
                  <div className="border border-gray-100 rounded-xl p-3 bg-white flex items-center justify-between gap-4">
                    <div>
                      {selectedNotif.details.product && (
                        <>
                          <p className="text-gray-400 text-[9px]">Producto</p>
                          <p className="font-bold text-gray-800 leading-snug">{selectedNotif.details.product}</p>
                        </>
                      )}
                      {selectedNotif.details.promoName && (
                        <>
                          <p className="text-gray-400 text-[9px]">Promoción</p>
                          <p className="font-bold text-gray-800">{selectedNotif.details.promoName}</p>
                        </>
                      )}
                      <div className="flex gap-4 mt-2">
                        {selectedNotif.details.prevPrice && (
                          <div>
                            <p className="text-gray-400 text-[9px]">Precio anterior</p>
                            <p className="font-bold line-through">{selectedNotif.details.prevPrice}</p>
                          </div>
                        )}
                        {selectedNotif.details.currPrice && (
                          <div>
                            <p className="text-gray-400 text-[9px]">Precio de oferta</p>
                            <p className="font-bold text-green-600">{selectedNotif.details.currPrice}</p>
                          </div>
                        )}
                        {selectedNotif.details.coupon && (
                          <div>
                            <p className="text-gray-400 text-[9px]">Código Cupón</p>
                            <p className="font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">{selectedNotif.details.coupon}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {selectedNotif.details.link && (
                      <Link 
                        to={selectedNotif.details.link}
                        onClick={() => setSelectedNotif(null)}
                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors text-center whitespace-nowrap self-center"
                      >
                        Ver producto
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => setSelectedNotif(null)}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold text-xs transition-colors cursor-pointer"
            >
              Entendido
            </button>
          </div>
        </div>
      )}

      <BottomNav activeTab="notifications" />
    </div>
  );
}
