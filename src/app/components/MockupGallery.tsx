import { Link } from 'react-router-dom';

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
      title: 'Detalle',
      route: '/mockup/product/1',
      image: 'detail'
    },
    {
      id: 4,
      title: 'Carrito',
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
      title: 'Cuenta',
      route: '/mockup/account',
      image: 'account'
    },
    {
      id: 8,
      title: 'Menú',
      route: '/mockup/menu',
      image: 'menu'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-50 to-blue-50 py-12 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-3">
          Mercado Libre
        </h1>
        <p className="text-xl text-gray-600">
          Maquetados para Android
        </p>
      </div>

      {/* Mockups Gallery */}
      <div className="overflow-x-auto pb-8 scrollbar-hide">
        <div className="flex gap-8 px-8 min-w-max justify-center">
          {mockups.map((mockup) => (
            <Link
              key={mockup.id}
              to={mockup.route}
              className="group flex flex-col items-center"
            >
              {/* Phone Frame */}
              <div className="relative transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
                {/* Phone Shadow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-400 to-gray-600 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />

                {/* Phone Container */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-3xl z-10" />

                  {/* Screen */}
                  <div className="relative w-[280px] h-[580px] bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Preview Frame */}
                    <iframe
                      src={mockup.route}
                      className="w-full h-full border-0 pointer-events-none"
                      title={mockup.title}
                    />
                  </div>

                  {/* Home Button */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full" />
                </div>
              </div>

              {/* Label */}
              <p className="mt-6 text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                {mockup.title}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Hint */}
      <div className="text-center mt-12">
        <p className="text-gray-500 text-sm">
          ← Desliza horizontalmente para ver todos los maquetados →
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Haz clic en cualquier pantalla para verla en detalle
        </p>
      </div>
    </div>
  );
}
