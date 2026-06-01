import { useState } from 'react';
import { ChevronLeft, Trash2, Plus, Minus, Menu, Sparkles, CheckCircle, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function Cart() {
  const [items, setItems] = useState([
    { id: 1, title: 'iPhone 14 Pro Max 256GB - Deep Purple', price: 1299, quantity: 1, img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200', seller: 'Apple Store Oficial', isFull: true },
    { id: 2, title: 'AirPods Pro 2da Gen con USB-C', price: 249, quantity: 2, img: 'https://images.unsplash.com/photo-1550029402-8ea9bfe19f04?w=200', seller: 'Apple Store Oficial', isFull: true },
    { id: 3, title: 'Zapatillas Running Nike Pegasus', price: 149, quantity: 1, img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200', seller: 'Nike Argentina', isFull: false }
  ]);
  const [couponCode, setCouponCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  const updateQuantity = (id: number, delta: number) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const applyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    setCouponError('');
    setCouponSuccess('');

    if (couponCode.toUpperCase() === 'MELIPLUS') {
      setDiscountAmount(150);
      setCouponSuccess('Cupón MELIPLUS aplicado: ¡$150 de descuento!');
    } else if (couponCode.toUpperCase() === 'HOT50') {
      const sub = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      setDiscountAmount(Math.round(sub * 0.2)); // 20% discount
      setCouponSuccess('Cupón HOT50 aplicado: ¡20% de descuento en tus compras!');
    } else {
      setCouponError('El cupón no es válido o ya expiró.');
      setDiscountAmount(0);
    }
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 0;
  const total = Math.max(0, subtotal + shipping - discountAmount);

  // Group items by seller
  const groupedItems = items.reduce((groups: Record<string, typeof items>, item) => {
    if (!groups[item.seller]) {
      groups[item.seller] = [];
    }
    groups[item.seller].push(item);
    return groups;
  }, {});

  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5] font-sans">
      
      {/* Header */}
      <div className="bg-[#FFE600] px-4 py-3 flex items-center justify-between shadow-sm sticky top-0 z-30">
        <Link to="/mockup/home" className="p-1 hover:bg-[#FFE600]/80 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </Link>
        <h1 className="font-extrabold flex-1 text-center text-gray-800 tracking-tight text-base">
          Mi Carrito ({items.reduce((sum, item) => sum + item.quantity, 0)})
        </h1>
        <Link to="/mockup/menu" className="p-1 hover:bg-[#FFE600]/80 rounded-full transition-colors">
          <Menu className="w-6 h-6 text-gray-800" />
        </Link>
      </div>

      {/* Cart Content Area */}
      <div className="flex-1 overflow-y-auto pb-6 scrollbar-hide">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full px-6 py-12 text-center bg-white m-4 rounded-xl shadow-xs border">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-lg font-bold text-gray-800 mb-1.5">Tu carrito está vacío</h2>
            <p className="text-gray-400 text-xs max-w-[240px] mb-6">
              ¡Explora ofertas increíbles y agrega productos a tu carrito!
            </p>
            <Link
              to="/mockup/home"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-xs shadow-sm transition-colors"
            >
              Explorar productos
            </Link>
          </div>
        ) : (
          <div className="p-4 space-y-4">
            
            {/* Group items by Seller */}
            {Object.entries(groupedItems).map(([seller, sellerItems]) => (
              <div key={seller} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Seller title */}
                <div className="bg-gray-50/50 px-4 py-2.5 border-b border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                    Compra a: <span className="text-gray-700 font-extrabold">{seller}</span>
                  </span>
                  <span className="text-[9px] text-[#00A650] font-bold bg-green-50 px-1.5 py-0.5 rounded">
                    Compra garantizada
                  </span>
                </div>

                {/* Seller items */}
                <div className="divide-y divide-gray-100">
                  {sellerItems.map((item) => (
                    <div key={item.id} className="p-4">
                      <div className="flex gap-3 mb-3">
                        <ImageWithFallback
                          src={item.img}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded-lg border flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-semibold text-gray-800 line-clamp-2 leading-snug mb-1">
                            {item.title}
                          </p>
                          <div className="flex items-baseline gap-1.5">
                            <span className="font-extrabold text-sm text-gray-900">${item.price.toLocaleString()}</span>
                            {item.isFull && (
                              <span className="bg-[#00A650] text-white text-[8px] font-black px-1 rounded inline-block italic">
                                ⚡ FULL
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] text-green-600 font-bold mt-0.5">Envío gratis</p>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 text-gray-400 hover:text-red-500 transition-colors h-fit"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Quantity & Item subtotal */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3.5 border border-gray-250 rounded-xl bg-gray-50/50">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-2.5 py-1.5 hover:bg-gray-100 rounded-l-xl transition-colors cursor-pointer"
                          >
                            <Minus className="w-3 h-3 text-gray-600" />
                          </button>
                          <span className="font-extrabold text-xs w-6 text-center text-gray-800">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-2.5 py-1.5 hover:bg-gray-100 rounded-r-xl transition-colors cursor-pointer"
                          >
                            <Plus className="w-3 h-3 text-gray-600" />
                          </button>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-[9px] text-gray-400">Subtotal de ítem</p>
                          <span className="font-extrabold text-sm text-gray-800">
                            ${(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Interactive Coupon Widget */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <h3 className="font-bold text-xs text-gray-800 mb-2 flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-blue-600" />
                ¿Tenés un cupón de descuento?
              </h3>
              
              <form onSubmit={applyCoupon} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Ej: MELIPLUS o HOT50"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="flex-1 outline-none border border-gray-250 rounded-xl px-3.5 py-2 text-xs text-gray-800 focus:border-blue-600 bg-white"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors cursor-pointer"
                >
                  Aplicar
                </button>
              </form>

              {couponSuccess && (
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-green-600 bg-green-50 p-2 rounded-lg">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{couponSuccess}</span>
                </div>
              )}
              {couponError && (
                <div className="mt-2.5 flex items-center gap-1.5 text-[11px] font-semibold text-red-600 bg-red-50 p-2 rounded-lg">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{couponError}</span>
                </div>
              )}
            </div>

          </div>
        )}
      </div>

      {/* Summary Checkout Footer */}
      {items.length > 0 && (
        <div className="bg-white border-t border-gray-150 px-4 py-4 sticky bottom-0 z-30 shadow-md">
          <div className="space-y-2 mb-4">
            <div className="flex justify-between text-xs text-gray-500">
              <span>Productos ({items.reduce((sum, item) => sum + item.quantity, 0)})</span>
              <span className="font-semibold text-gray-800">${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <span>Envío</span>
              <span className="text-[#00A650] font-extrabold bg-green-50 px-1 rounded">Gratis</span>
            </div>
            
            {discountAmount > 0 && (
              <div className="flex justify-between text-xs text-green-600 font-semibold bg-green-50/50 p-1.5 rounded">
                <span>Cupón descuento</span>
                <span>-${discountAmount.toLocaleString()}</span>
              </div>
            )}

            <div className="border-t border-gray-50 pt-2 flex justify-between items-baseline">
              <span className="font-extrabold text-sm text-gray-800">Total compra</span>
              <span className="font-black text-xl text-gray-900">${total.toLocaleString()}</span>
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold text-sm transition-colors shadow-sm cursor-pointer">
            Continuar compra
          </button>

          <p className="text-[10px] text-center text-gray-400 mt-2.5">
            En hasta 12x ${(total / 12).toFixed(1)} sin interés pagando con Mercado Pago.
          </p>
        </div>
      )}
    </div>
  );
}
