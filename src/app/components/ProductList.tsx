import { useState } from 'react';
import { ChevronLeft, SlidersHorizontal, Heart, ShoppingCart, Star, Sparkles } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function ProductList() {
  const { category } = useParams();
  const [activeFilter, setActiveFilter] = useState<'todos' | 'envio' | 'ofertas' | 'valorados'>('todos');
  const [favorites, setFavorites] = useState<Record<number, boolean>>({});

  const productsByCategory: Record<string, any[]> = {
    'tecnología': [
      { id: 1, title: 'iPhone 14 Pro Max 256GB - Deep Purple', price: 1299, oldPrice: 1499, rating: 4.8, reviews: 1240, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', shipping: true, isFull: true, discount: 15 },
      { id: 2, title: 'MacBook Pro M2 M-Max 16GB RAM 512GB SSD', price: 2199, oldPrice: 2499, rating: 4.9, reviews: 856, img: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=400', shipping: true, isFull: true, discount: 12 },
      { id: 3, title: 'iPad Air 5ta Gen Wi-Fi 256GB - Space Gray', price: 799, oldPrice: 899, rating: 4.7, reviews: 645, img: 'https://images.unsplash.com/photo-1426024084828-5da21e13f5dc?w=400', shipping: true, isFull: false, discount: 11 },
      { id: 4, title: 'AirPods Pro 2da Gen Auriculares Inalámbricos', price: 249, oldPrice: 299, rating: 4.9, reviews: 2145, img: 'https://images.unsplash.com/photo-1550029402-8ea9bfe19f04?w=400', shipping: true, isFull: true, discount: 20 },
      { id: 5, title: 'Samsung Galaxy S23 Ultra Dual SIM 256GB', price: 1199, oldPrice: 1399, rating: 4.8, reviews: 932, img: 'https://images.unsplash.com/photo-1574144632346-0d82d0dead5a?w=400', shipping: true, isFull: false, discount: 14 },
      { id: 6, title: 'Laptop ASUS ROG Strix Gaming RTX 4060', price: 1599, oldPrice: 1899, rating: 4.6, reviews: 432, img: 'https://images.unsplash.com/photo-1584433305355-9cb73387fc61?w=400', shipping: false, isFull: false, discount: 15 },
    ],
    'hogar': [
      { id: 11, title: 'Sofá 3 Cuerpos Gris Nórdico Premium', price: 599, oldPrice: 799, rating: 4.5, reviews: 234, img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400', shipping: true, isFull: true, discount: 25 },
      { id: 12, title: 'Mesa de Comedor de Madera de Roble Macizo', price: 399, oldPrice: 499, rating: 4.7, reviews: 187, img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400', shipping: false, isFull: false, discount: 20 },
      { id: 13, title: 'Lámpara de Piso LED Minimalista Inteligente', price: 89, oldPrice: 120, rating: 4.6, reviews: 456, img: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400', shipping: true, isFull: true, discount: 25 },
      { id: 14, title: 'Alfombra Moderna de Pelo Corto 2x3m', price: 149, oldPrice: 199, rating: 4.4, reviews: 321, img: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=400', shipping: true, isFull: false, discount: 25 },
      { id: 15, title: 'Sillón Reclinable Ergonómico de Cuero Sintético', price: 449, oldPrice: 599, rating: 4.8, reviews: 198, img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400', shipping: false, isFull: false, discount: 25 },
    ],
    'deportes': [
      { id: 21, title: 'Bicicleta de Montaña MTB Rodado 29 de Aluminio', price: 599, oldPrice: 749, rating: 4.7, reviews: 543, img: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400', shipping: false, isFull: false, discount: 20 },
      { id: 22, title: 'Mancuernas y Pesas Ajustables Kit 20kg', price: 129, oldPrice: 169, rating: 4.6, reviews: 678, img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400', shipping: true, isFull: true, discount: 23 },
      { id: 23, title: 'Zapatillas de Running Nike Air Zoom Pegasus', price: 149, oldPrice: 189, rating: 4.8, reviews: 1234, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400', shipping: true, isFull: true, discount: 21 },
      { id: 24, title: 'Pelota de Fútbol Profesional FIFA Quality', price: 49, oldPrice: 69, rating: 4.5, reviews: 432, img: 'https://images.unsplash.com/photo-1614632537423-1e6c2e7e0aae?w=400', shipping: true, isFull: true, discount: 28 },
      { id: 25, title: 'Cinta de Correr Eléctrica Plegable Inteligente', price: 799, oldPrice: 999, rating: 4.7, reviews: 287, img: 'https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?w=400', shipping: false, isFull: false, discount: 20 },
    ],
    'moda': [
      { id: 31, title: 'Chaqueta de Cuero Auténtico para Hombre Slim Fit', price: 179, oldPrice: 249, rating: 4.6, reviews: 345, img: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400', shipping: true, isFull: true, discount: 28 },
      { id: 32, title: 'Vestido Elegante de Noche de Encaje Floral', price: 89, oldPrice: 129, rating: 4.7, reviews: 567, img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400', shipping: true, isFull: true, discount: 31 },
      { id: 33, title: 'Jeans de Mezclilla Slim Fit Clásico Hombre', price: 59, oldPrice: 79, rating: 4.5, reviews: 892, img: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400', shipping: true, isFull: true, discount: 25 },
      { id: 34, title: 'Camisa Formal de Vestir de Algodón Blanca', price: 49, oldPrice: 69, rating: 4.6, reviews: 456, img: 'https://images.unsplash.com/photo-1602810318660-d2c46b4d5bf1?w=400', shipping: true, isFull: false, discount: 28 },
      { id: 35, title: 'Reloj Inteligente Unisex Sport con Pulsómetro', price: 299, oldPrice: 399, rating: 4.8, reviews: 1023, img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400', shipping: true, isFull: true, discount: 25 },
    ],
  };

  const rawProducts = productsByCategory[category?.toLowerCase() || 'tecnología'] || productsByCategory['tecnología'];

  // Client-side filtering logic
  const filteredProducts = rawProducts.filter(product => {
    if (activeFilter === 'envio') {
      return product.shipping;
    }
    if (activeFilter === 'ofertas') {
      return product.discount > 15;
    }
    if (activeFilter === 'valorados') {
      return product.rating >= 4.8;
    }
    return true;
  });

  const toggleFavorite = (productId: number, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setFavorites(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5] font-sans">
      
      {/* Header */}
      <div className="bg-[#FFE600] px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <Link to="/mockup/home" className="p-1 hover:bg-[#FFE600]/80 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </Link>
        <h1 className="font-extrabold capitalize flex-1 text-center text-gray-800 tracking-tight text-base">
          {category}
        </h1>
        <div className="flex gap-2">
          <Link to="/mockup/cart" className="p-1 hover:bg-[#FFE600]/80 rounded-full transition-colors relative">
            <ShoppingCart className="w-6 h-6 text-gray-800" />
            <span className="absolute top-0 right-0 bg-[#3483FA] text-white text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border border-[#FFE600]">
              2
            </span>
          </Link>
          <button className="p-1 hover:bg-[#FFE600]/80 rounded-full transition-colors">
            <SlidersHorizontal className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="bg-white px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide border-b border-gray-100 select-none">
        <button 
          onClick={() => setActiveFilter('todos')}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
            activeFilter === 'todos' 
              ? 'bg-blue-50 text-blue-600 border border-blue-200' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent'
          }`}
        >
          Todos
        </button>
        <button 
          onClick={() => setActiveFilter('envio')}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
            activeFilter === 'envio' 
              ? 'bg-blue-50 text-blue-600 border border-blue-200' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent'
          }`}
        >
          Envío gratis
        </button>
        <button 
          onClick={() => setActiveFilter('ofertas')}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
            activeFilter === 'ofertas' 
              ? 'bg-blue-50 text-blue-600 border border-blue-200' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent'
          }`}
        >
          Super Ofertas (+15% OFF)
        </button>
        <button 
          onClick={() => setActiveFilter('valorados')}
          className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
            activeFilter === 'valorados' 
              ? 'bg-blue-50 text-blue-600 border border-blue-200' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border border-transparent'
          }`}
        >
          Mejor valorados (★4.8+)
        </button>
      </div>

      {/* Product List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 scrollbar-hide">
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center border border-gray-100 shadow-xs">
            <span className="text-4xl">🔍</span>
            <h3 className="font-bold text-gray-800 mt-3 text-base">No hay productos que coincidan</h3>
            <p className="text-gray-500 text-xs mt-1">Prueba seleccionando otro filtro de arriba.</p>
            <button 
              onClick={() => setActiveFilter('todos')}
              className="mt-4 bg-[#3483FA] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-700 transition-colors"
            >
              Mostrar todos
            </button>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/mockup/product/${product.id}`}
              className="bg-white rounded-xl overflow-hidden flex shadow-sm hover:shadow-md border border-gray-100/60 transition-all duration-300 relative group"
            >
              {/* Product Image Section */}
              <div className="w-32 h-32 flex-shrink-0 relative bg-gray-50 overflow-hidden">
                <ImageWithFallback
                  src={product.img}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {product.isFull && (
                  <span className="absolute bottom-2 left-2 bg-[#00A650] text-white text-[8px] font-black px-1 rounded flex items-center gap-0.5 italic shadow-xs">
                    ⚡ FULL
                  </span>
                )}
              </div>

              {/* Product Info Section */}
              <div className="flex-1 p-3.5 flex flex-col justify-between min-w-0">
                <div>
                  <h3 className="text-xs font-semibold text-gray-800 line-clamp-2 leading-tight mb-1 group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  
                  {/* Rating block */}
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    <span className="text-[10px] font-bold text-gray-700">{product.rating}</span>
                    <span className="text-[9px] text-gray-400">({product.reviews})</span>
                  </div>
                </div>

                <div>
                  {/* Prices */}
                  <div className="flex items-baseline gap-1.5 flex-wrap mt-1">
                    <span className="font-extrabold text-base text-gray-900">${product.price.toLocaleString()}</span>
                    
                    {product.discount && (
                      <span className="text-[9px] text-green-600 font-extrabold bg-green-50 px-1 rounded">
                        {product.discount}% OFF
                      </span>
                    )}
                  </div>
                  
                  {product.oldPrice && (
                    <p className="text-[10px] text-gray-400 line-through leading-none">
                      ${product.oldPrice.toLocaleString()}
                    </p>
                  )}

                  {/* Installments & Free shipping */}
                  <div className="mt-1.5 flex flex-col gap-0.5 border-t border-gray-50 pt-1.5">
                    {product.shipping && (
                      <span className="text-[10px] text-[#00A650] font-extrabold flex items-center gap-0.5">
                        Envío gratis
                      </span>
                    )}
                    <p className="text-[9px] text-gray-400">
                      Mismo precio en 12x ${(product.price / 12).toFixed(1)} sin interés
                    </p>
                  </div>
                </div>
              </div>

              {/* Heart Button */}
              <button 
                onClick={(e) => toggleFavorite(product.id, e)}
                className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-400 hover:text-red-500 transition-all border border-gray-550/10 shadow-xs z-10"
              >
                <Heart 
                  className={`w-4 h-4 transition-all ${
                    favorites[product.id] 
                      ? 'fill-red-500 text-red-500 scale-110' 
                      : 'text-gray-400'
                  }`} 
                />
              </button>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
