import { useEffect } from 'react';
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

  // Adjust iframe heights before print to render complete scrolling views
  useEffect(() => {
    const handleBeforePrint = () => {
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach((iframe) => {
        try {
          const doc = iframe.contentDocument || iframe.contentWindow?.document;
          if (doc) {
            const body = doc.body;
            const html = doc.documentElement;
            
            // Set styles inside iframe to show all contents in print layout
            body.style.height = 'auto';
            body.style.overflow = 'visible';
            html.style.height = 'auto';
            html.style.overflow = 'visible';
            
            const height = Math.max(
              body.scrollHeight,
              body.offsetHeight,
              html.clientHeight,
              html.scrollHeight,
              html.offsetHeight
            );

            // Apply calculated height to expand the iframe
            iframe.style.height = `${height}px`;
            iframe.style.maxHeight = 'none';
            
            const parentScreen = iframe.parentElement;
            if (parentScreen) {
              parentScreen.style.height = `${height}px`;
              parentScreen.style.maxHeight = 'none';
              parentScreen.style.overflow = 'visible';
            }
          }
        } catch (e) {
          console.error('Failed to expand iframe for print', e);
        }
      });
    };

    const handleAfterPrint = () => {
      // Revert size adjustments for screen viewing
      const iframes = document.querySelectorAll('iframe');
      iframes.forEach((iframe) => {
        iframe.style.height = '';
        iframe.style.maxHeight = '';
        const parentScreen = iframe.parentElement;
        if (parentScreen) {
          parentScreen.style.height = '';
          parentScreen.style.maxHeight = '';
          parentScreen.style.overflow = '';
        }
        try {
          const doc = iframe.contentDocument || iframe.contentWindow?.document;
          if (doc) {
            doc.body.style.height = '';
            doc.body.style.overflow = '';
            doc.documentElement.style.height = '';
            doc.documentElement.style.overflow = '';
          }
        } catch (e) {}
      });
    };

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-gray-900 pb-12 print:bg-white print:pb-0">
      
      {/* Mercado Libre Yellow Header Bar */}
      <header className="bg-[#FFE600] px-8 py-4 flex flex-col sm:flex-row items-center justify-between border-b border-yellow-400 gap-4 print:hidden">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-2xl tracking-tight text-gray-800 flex items-center gap-1 select-none">
            mercado <span className="text-[#3483FA] italic">libre</span>
          </span>
          <span className="text-xs font-bold bg-gray-800 text-[#FFE600] px-2 py-0.5 rounded uppercase tracking-wider">
            Simulador de Maquetas
          </span>
        </div>
        
        {/* PDF / Print button */}
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 bg-[#3483FA] hover:bg-blue-700 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer select-none"
        >
          <Printer className="w-4 h-4" />
          Descargar Maquetados (PDF)
        </button>
      </header>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <div className="text-center mb-8 print:hidden">
          <h2 className="text-2xl font-bold text-gray-800">Galería de Pantallas Móviles</h2>
          <p className="text-sm text-gray-500 mt-1">Navega e interactúa directamente en el simulador móvil</p>
        </div>

        {/* Mockups Gallery Grid */}
        <div className="overflow-x-auto pb-8 scrollbar-hide print:overflow-visible print:pb-0">
          <div className="flex gap-8 px-8 min-w-max justify-center items-center print:flex-col print:gap-20 print:px-0 print:min-w-full print:w-full">
            {mockups.map((mockup) => (
              <div
                key={mockup.id}
                className="group flex flex-col items-center print:[page-break-after:always] print:w-full print:justify-center"
              >
                
                {/* Phone Simulator Frame */}
                <Link
                  to={mockup.route}
                  className="relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 print:transform-none print:hover:scale-100 print:hover:-translate-y-0"
                >
                  {/* Phone Shadow - Hidden when printing */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity print:hidden" />

                  {/* Phone Container */}
                  <div className="relative bg-gradient-to-br from-gray-800 to-zinc-900 rounded-[3rem] p-3 shadow-2xl print:bg-none print:p-0 print:shadow-none print:rounded-none">
                    {/* Notch - Hidden when printing */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10 print:hidden" />

                    {/* Screen */}
                    <div className="relative w-[280px] h-[580px] bg-white rounded-[2.5rem] overflow-hidden print:w-[380px] print:h-auto print:max-h-none print:overflow-visible print:rounded-none print:border-2 print:border-gray-200">
                      {/* Live Preview Iframe */}
                      <iframe
                        src={mockup.route}
                        className="w-full h-full border-0 pointer-events-none print:h-auto print:max-h-none print:overflow-visible"
                        title={mockup.title}
                      />
                    </div>

                    {/* Home Button - Hidden when printing */}
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full print:hidden" />
                  </div>
                </Link>

                {/* Label */}
                <p className="mt-6 text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors print:mt-4 print:text-base print:text-gray-900">
                  {mockup.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Hint - Hidden when printing */}
      <div className="text-center mt-12 print:hidden">
        <p className="text-gray-400 text-xs">
          ← Desliza horizontalmente para ver todas las pantallas del simulador →
        </p>
        <p className="text-gray-400 text-[10px] mt-1.5 font-semibold">
          Haz clic en cualquier pantalla para interactuar con ella en detalle
        </p>
      </div>
    </div>
  );
}
