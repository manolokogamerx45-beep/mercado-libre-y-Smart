import { useState } from 'react';
import { Heart, ShoppingCart, Menu, ChevronLeft, Trash2, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import BottomNav from './BottomNav';

export default function Favorites() {
  const [favorites, setFavorites] = useState([
    { id: 1, title: 'iPhone 14 Pro Max 256GB - Deep Purple', price: '$1,299', oldPrice: '$1,499', rating: 4.8, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', stock: true, seller: 'Apple Store Oficial' },
    { id: 2, title: 'MacBook Pro M2 M-Max 16GB RAM 512GB SSD', price: '$2,199', oldPrice: '$2,499', rating: 4.9, img: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=400', stock: true, seller: 'Apple Store Oficial' },
    { id: 3, title: 'iPad Air 5ta Gen Wi-Fi 256GB - Space Gray', price: '$799', oldPrice: '$899', rating: 4.7, img: 'https://images.unsplash.com/photo-1426024084828-5da21e13f5dc?w=400', stock: false, seller: 'Apple Store Oficial' },
    { id: 4, title: 'AirPods Pro 2da Gen Auriculares Inalámbricos', price: '$249', oldPrice: '$299', rating: 4.9, img: 'https://images.unsplash.com/photo-1550029402-8ea9bfe19f04?w=400', stock: true, seller: 'Digital Store' },
  ]);
  const [toastMsg, setToastMsg] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [cartBadge, setCartBadge] = useState(2);

  const triggerToast = (msg: string) => {
    setToastMsg(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  const removeFavorite = (id: number, title: string) => {
    setFavorites(favorites.filter(item => item.id !== id));
    triggerToast(`Eliminado de favoritos: ${title.split(' - ')[0]}`);
  };

  const handleAddToCart = (title: string) => {
    setCartBadge(prev => prev + 1);
    triggerToast(`Agregado al carrito: ${title.split(' - ')[0]} 🛒`);
  };

  return (
    <div className="flex flex-col h-screen bg-meli-light font-sans text-gray-900 pb-16 relative">
      
      {/* Toast Alert */}
      {showToast && (
        <div className="absolute top-16 left-4 right-4 z-50 bg-gray-900 text-white py-3 px-4 rounded-xl flex items-center gap-2 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
          <span className="text-xs font-semibold">{toastMsg}</span>
        </div>
      )}

      {/* Header */}
      <div className="bg-meli-yellow px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <Link to="/mockup/menu" className="p-1 hover:bg-black/5 rounded-full transition-colors">
          <Menu className="w-6 h-6 text-gray-800" />
        </Link>
        <h1 className="font-extrabold text-gray-800 text-base tracking-tight">Favoritos ({favorites.length})</h1>
        <Link to="/mockup/cart" className="p-1 hover:bg-black/5 rounded-full transition-colors relative">
          <ShoppingCart className="w-6 h-6 text-gray-800" />
          {cartBadge > 0 && (
            <span className="absolute top-0 right-0 bg-meli-blue text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-meli-yellow">
              {cartBadge}
            </span>
          )}
        </Link>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full px-6 py-12 text-center bg-white m-4 rounded-xl shadow-xs border">
            <Heart className="w-16 h-16 text-gray-200 mb-4 animate-pulse" />
            <h2 className="text-lg font-bold text-gray-800 mb-1.5">No tenés favoritos aún</h2>
            <p className="text-gray-400 text-xs max-w-[240px] mb-6">
              Guardá los productos que te interesan para hacerles seguimiento y ver si bajan de precio.
            </p>
            <Link
              to="/mockup/home"
              className="bg-meli-blue hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-xs shadow-sm transition-colors"
            >
              Explorar productos
            </Link>
          </div>
        ) : (
          <div className="p-4 space-y-4">
            {favorites.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100/60 relative group">
                <Link to={`/mockup/product/${item.id}`} className="flex p-3 gap-3">
                  <ImageWithFallback
                    src={item.img}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg border flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider text-[8px] mb-0.5">
                        {item.seller}
                      </p>
                      <h3 className="text-xs font-semibold text-gray-800 line-clamp-2 leading-snug">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <span className="text-yellow-500 text-xs">★</span>
                        <span className="text-[10px] font-bold text-gray-700">{item.rating}</span>
                      </div>
                    </div>
                    
                    <div className="mt-2">
                      <div className="flex items-baseline gap-1.5 flex-wrap">
                        <span className="font-extrabold text-sm text-gray-900">{item.price}</span>
                        {item.oldPrice && (
                          <span className="text-[10px] text-gray-400 line-through">
                            {item.oldPrice}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-meli-green font-bold">Envío gratis ⚡ FULL</p>
                      {!item.stock && (
                        <p className="text-[9px] text-red-500 font-extrabold uppercase mt-0.5">Sin stock por el momento</p>
                      )}
                    </div>
                  </div>
                </Link>
                
                {/* Actions */}
                <div className="border-t border-gray-50 px-3 py-2 bg-gray-50/20 flex gap-2">
                  <button
                    onClick={() => removeFavorite(item.id, item.title)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 border border-gray-200 hover:bg-gray-100 hover:border-gray-300 rounded-xl text-xs font-semibold text-gray-600 transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4 text-gray-400" />
                    Eliminar
                  </button>
                  <button 
                    disabled={!item.stock}
                    onClick={() => handleAddToCart(item.title)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                      item.stock 
                        ? 'bg-meli-blue hover:bg-blue-700 text-white' 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed border'
                    }`}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNav activeTab="favorites" />
    </div>
  );
}
