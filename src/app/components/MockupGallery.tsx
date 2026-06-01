import { Link } from 'react-router-dom';
import { Printer } from 'lucide-react';

export default function MockupGallery() {
  const mockups = [
    {
      id: 1,
      title: 'Inicio',
      route: '/mockup/home',
      image: 'home'
    },
    {
      id: 2,
      title: 'Productos',
      route: '/mockup/products/tecnología',
      image: 'products'
    },
    {
      id: 3,
      title: 'Detalle de Producto',
      route: '/mockup/product/1',
      image: 'detail'
    },
    {
      id: 4,
      title: 'Carrito de Compras',
      route: '/mockup/cart',
      image: 'cart'
    },
    {
      id: 5,
      title: 'Favoritos',
      route: '/mockup/favorites',
      image: 'favorites'
    },
    {
      id: 6,
      title: 'Notificaciones',
      route: '/mockup/notifications',
      image: 'notifications'
    },
    {
      id: 7,
      title: 'Mi Cuenta',
      route: '/mockup/account',
      image: 'account'
    },
    {
      id: 8,
      title: 'Menú Lateral',
      route: '/mockup/menu',
      image: 'menu'
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 py-12 px-6 print:bg-white print:py-0 print:px-0">
      
      {/* Header - Hidden when printing */}
      <div className="text-center mb-12 print:hidden flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Mercado Libre & Smart
        </h1>
        <p className="text-lg text-gray-600 font-medium max-w-md">
          Maquetados interactivos para Android & Smartwatch
        </p>
        
        {/* PDF / Print button */}
        <button
          onClick={handlePrint}
          className="mt-6 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer select-none"
        >
          <Printer className="w-4 h-4" />
          Exportar Maquetados (PDF)
        </button>
      </div>

      {/* Mockups Gallery Grid / List for printing */}
      <div className="overflow-x-auto pb-8 scrollbar-hide print:overflow-visible print:pb-0">
        <div className="flex gap-8 px-8 min-w-max justify-center print:flex-col print:items-center print:gap-20 print:px-0 print:min-w-full print:w-full">
          {mockups.map((mockup) => (
            <div
              key={mockup.id}
              className="group flex flex-col items-center print:[page-break-after:always] print:w-full print:justify-center"
            >
              {/* Phone Frame */}
              <div className="relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 print:transform-none print:hover:scale-100 print:hover:-translate-y-0">
                {/* Phone Shadow - Hidden when printing */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity print:hidden" />

                {/* Phone Container */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl print:bg-none print:p-0 print:shadow-none print:rounded-none">
                  {/* Notch - Hidden when printing */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10 print:hidden" />

                  {/* Screen */}
                  <div className="relative w-[280px] h-[580px] bg-white rounded-[2.5rem] overflow-hidden print:w-[380px] print:h-[780px] print:rounded-none print:border-2 print:border-gray-200">
                    
                    {/* Live Preview Iframe */}
                    <iframe
                      src={mockup.route}
                      className="w-full h-full border-0 pointer-events-none"
                      title={mockup.title}
                    />
                  </div>

                  {/* Home Button - Hidden when printing */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full print:hidden" />
                </div>
              </div>

              {/* Label */}
              <p className="mt-6 text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors print:mt-4 print:text-base print:text-gray-900">
                {mockup.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Hint - Hidden when printing */}
      <div className="text-center mt-12 print:hidden">
        <p className="text-gray-400 text-xs">
          ← Desliza horizontalmente para ver todas las pantallas del simulador →
        </p>
        <p className="text-gray-400 text-[10px] mt-1.5 font-semibold">
          Haz clic en cualquier pantalla o botón para interactuar con ella en detalle
        </p>
      </div>
    </div>
  );
}
