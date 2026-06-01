import { useState } from 'react';
import { 
  ChevronLeft, 
  Share2, 
  Heart, 
  ShoppingCart, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw,
  CheckCircle,
  MessageSquare,
  ChevronRight,
  Info,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductDetail() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Deep Purple');
  const [cartCount, setCartCount] = useState(2);
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState([
    { id: 1, text: '¿Tiene garantía oficial de Apple?', reply: 'Hola, sí, tiene 1 año de garantía oficial con Apple. Saludos!', date: 'Hace 2 horas' },
    { id: 2, text: '¿Viene en caja sellada con cable de carga?', reply: 'Hola, sí, viene en caja sellada original de fábrica con su cable USB-C a Lightning original. Esperamos tu compra!', date: 'Ayer' }
  ]);
  const [isTypingReply, setIsTypingReply] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');

  const images = [
    'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
    'https://images.unsplash.com/photo-1574144632346-0d82d0dead5a?w=800',
    'https://images.unsplash.com/photo-1550029402-8ea9bfe19f04?w=800',
  ];

  const colors = [
    { name: 'Deep Purple', code: 'bg-purple-900 border-purple-500' },
    { name: 'Space Black', code: 'bg-gray-900 border-gray-900' },
    { name: 'Silver', code: 'bg-gray-200 border-gray-200' },
    { name: 'Gold', code: 'bg-amber-100 border-amber-200' },
  ];

  const triggerNotification = (msg: string) => {
    setNotificationMsg(msg);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;

    const userQ = {
      id: Date.now(),
      text: newQuestion,
      reply: '',
      date: 'Ahora'
    };

    setQuestions(prev => [userQ, ...prev]);
    const typedQ = newQuestion;
    setNewQuestion('');
    setIsTypingReply(true);

    // Simulate seller answering in 2 seconds
    setTimeout(() => {
      setQuestions(prev => 
        prev.map(q => 
          q.text === typedQ 
            ? { ...q, reply: '¡Hola! Sí, disponemos de stock inmediato para envío rápido. Quedamos a tu entera disposición. ¡Saludos!' }
            : q
        )
      );
      setIsTypingReply(false);
      triggerNotification('Nueva respuesta del vendedor recibida');
    }, 2500);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    triggerNotification('Producto agregado al carrito con éxito 🛒');
  };

  return (
    <div className="flex flex-col h-screen bg-[#F5F5F5] font-sans relative overflow-hidden">
      
      {/* Toast Notification */}
      {showNotification && (
        <div className="absolute top-16 left-4 right-4 z-50 bg-gray-900 text-white py-3 px-4 rounded-xl flex items-center justify-between shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
            <span>{notificationMsg}</span>
          </div>
          <button 
            onClick={() => setShowNotification(false)}
            className="text-xs text-blue-400 font-bold hover:underline cursor-pointer"
          >
            Aceptar
          </button>
        </div>
      )}

      {/* Header */}
      <div className="bg-white px-4 py-3 flex items-center justify-between border-b border-gray-100 sticky top-0 z-30 shadow-xs">
        <Link to="/mockup/products/tecnología" className="p-1 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </Link>
        <div className="flex gap-2">
          <button className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-700">
            <Share2 className="w-5 h-5" />
          </button>
          <button 
            className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-700"
            onClick={() => {
              setIsFavorite(!isFavorite);
              triggerNotification(!isFavorite ? 'Agregado a tus Favoritos ❤️' : 'Eliminado de tus Favoritos');
            }}
          >
            <Heart className={`w-5 h-5 transition-all ${isFavorite ? 'fill-red-500 text-red-500 scale-110' : 'text-gray-700'}`} />
          </button>
          <Link to="/mockup/cart" className="p-1.5 hover:bg-gray-100 rounded-full transition-colors text-gray-700 relative">
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-white">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide bg-white">
        
        {/* Subtitle / Sale badge */}
        <div className="px-4 pt-3 flex items-center gap-1.5 text-xs text-gray-400">
          <span>Nuevo</span>
          <span>•</span>
          <span>12,458 vendidos</span>
        </div>

        {/* Product Title */}
        <div className="px-4 pt-1 pb-3">
          <h1 className="text-lg font-bold text-gray-800 leading-tight">
            iPhone 14 Pro Max 256GB - {selectedColor}
          </h1>
          <div className="flex items-center gap-1.5 mt-2">
            <div className="flex items-center text-yellow-500 fill-yellow-500">
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-bold text-blue-600">4.9</span>
            <span className="text-xs text-gray-400">(2,145 opiniones)</span>
          </div>
        </div>

        {/* Interactive Image Gallery */}
        <div className="relative bg-white border-b border-gray-100 pb-4">
          <div className="w-full h-80 flex items-center justify-center bg-white px-8 relative">
            <img
              src={images[currentImgIndex]}
              alt={`Product View ${currentImgIndex + 1}`}
              className="w-full h-full object-contain transition-all duration-300"
            />
            
            {/* Image index badge */}
            <span className="absolute top-4 right-4 bg-gray-100 text-gray-600 text-xs px-2.5 py-0.5 rounded-full font-bold">
              {currentImgIndex + 1} / {images.length}
            </span>
          </div>
          
          {/* Thumbnails indicator */}
          <div className="flex justify-center gap-3 mt-2">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImgIndex(idx)}
                className={`w-12 h-12 rounded-lg border-2 overflow-hidden transition-all bg-gray-50 cursor-pointer ${
                  currentImgIndex === idx ? 'border-blue-600 scale-105 shadow-xs' : 'border-gray-200'
                }`}
              >
                <img src={img} alt="thumb" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Block */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-gray-400 text-sm line-through">$1,499</span>
            <span className="text-xs font-bold text-[#00A650] bg-green-50 px-1.5 py-0.5 rounded">
              15% OFF
            </span>
          </div>
          
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-black text-gray-900">$1,299</span>
            <span className="text-xs text-gray-500 font-medium">USD</span>
          </div>

          <p className="text-xs text-gray-600 mt-2">
            en <span className="font-bold text-[#00A650]">12 cuotas de $108.25 sin interés</span>
          </p>
          <button className="text-[11px] font-bold text-blue-600 hover:text-blue-700 mt-1 flex items-center gap-0.5">
            Ver medios de pago <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Delivery / Shipping details */}
        <div className="p-4 border-b border-gray-100 space-y-4">
          <div className="flex items-start gap-3">
            <Truck className="w-5 h-5 text-[#00A650] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#00A650] flex items-center gap-1.5">
                Envío gratis ⚡ FULL
              </p>
              <p className="text-[11px] text-gray-500 mt-0.5">Llega gratis mañana a tu dirección habitual.</p>
              <button className="text-[10px] font-bold text-blue-600 hover:text-blue-700 mt-1">
                Calcular fecha de entrega
              </button>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <RotateCcw className="w-5 h-5 text-[#3483FA] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#3483FA]">Devolución gratis</p>
              <p className="text-[11px] text-gray-500 mt-0.5">Tenes 30 días gratis desde que lo recibis para cambiarlo o devolverlo.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-gray-700">Compra Protegida</p>
              <p className="text-[11px] text-gray-500 mt-0.5">Recibí el producto que esperabas o te devolvemos tu dinero.</p>
            </div>
          </div>
        </div>

        {/* Variant Selectors */}
        <div className="p-4 border-b border-gray-100 select-none">
          <p className="text-xs font-bold text-gray-800 mb-2">Color: <span className="font-semibold text-gray-600">{selectedColor}</span></p>
          <div className="flex gap-3">
            {colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color.name)}
                className={`w-9 h-9 rounded-full border-2 p-0.5 transition-all shadow-xs cursor-pointer ${
                  selectedColor === color.name 
                    ? 'border-blue-600 scale-105' 
                    : 'border-gray-250 hover:scale-[1.03]'
                }`}
              >
                <div className={`w-full h-full rounded-full ${color.code.split(' ')[0]}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Seller Reputation Block */}
        <div className="p-4 border-b border-gray-100">
          <h3 className="text-xs font-bold text-gray-800 mb-3">Información sobre el vendedor</h3>
          
          {/* Meli Seller tag */}
          <div className="flex items-center gap-2 mb-3">
            <span className="bg-[#3483FA]/10 text-blue-700 text-[10px] font-extrabold px-2 py-0.5 rounded">
              🏆 MERCADOLÍDER PLATINUM
            </span>
            <span className="text-[10px] text-gray-400 font-semibold">¡Es uno de los mejores del sitio!</span>
          </div>

          {/* Reputation Thermometer */}
          <div className="flex items-center w-full gap-1 mb-4 select-none">
            <div className="h-2 rounded-l-full bg-red-150 flex-1 opacity-40" />
            <div className="h-2 bg-orange-150 flex-1 opacity-40" />
            <div className="h-2 bg-yellow-150 flex-1 opacity-40" />
            <div className="h-2 bg-green-200 flex-1 opacity-40" />
            <div className="h-2 rounded-r-full bg-[#00A650] flex-1 scale-y-125 shadow-xs" />
          </div>

          {/* Seller Stats grid */}
          <div className="grid grid-cols-3 gap-2 text-center text-gray-700">
            <div className="border-r border-gray-100 px-1">
              <p className="text-base font-bold">10K+</p>
              <p className="text-[9px] text-gray-400 leading-tight">Ventas concretadas en los últimos 60 días</p>
            </div>
            <div className="border-r border-gray-100 px-1">
              <p className="text-base font-bold text-green-600">Excelente</p>
              <p className="text-[9px] text-gray-400 leading-tight">Brinda buena atención postventa</p>
            </div>
            <div className="px-1">
              <p className="text-base font-bold text-[#00A650]">A tiempo</p>
              <p className="text-[9px] text-gray-400 leading-tight">Entrega sus productos sin demora</p>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="p-4 border-b border-gray-100">
          <h3 className="text-xs font-bold text-gray-800 mb-3">Características principales</h3>
          <div className="border border-gray-150 rounded-xl overflow-hidden text-xs">
            <div className="flex border-b border-gray-100 bg-gray-50/50">
              <span className="w-1/3 p-3 font-semibold text-gray-500 border-r border-gray-100">Marca</span>
              <span className="w-2/3 p-3 text-gray-700">Apple</span>
            </div>
            <div className="flex border-b border-gray-100">
              <span className="w-1/3 p-3 font-semibold text-gray-500 border-r border-gray-100">Línea</span>
              <span className="w-2/3 p-3 text-gray-700">iPhone</span>
            </div>
            <div className="flex border-b border-gray-100 bg-gray-50/50">
              <span className="w-1/3 p-3 font-semibold text-gray-500 border-r border-gray-100">Modelo</span>
              <span className="w-2/3 p-3 text-gray-700">iPhone 14 Pro Max</span>
            </div>
            <div className="flex">
              <span className="w-1/3 p-3 font-semibold text-gray-500 border-r border-gray-100">Memoria interna</span>
              <span className="w-2/3 p-3 text-gray-700">256 GB</span>
            </div>
          </div>
        </div>

        {/* Interactive Q&A Section */}
        <div className="p-4 pb-20">
          <h3 className="text-xs font-bold text-gray-800 mb-3">Preguntas y respuestas</h3>
          
          <form onSubmit={handleAskQuestion} className="mb-4">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Escribe tu pregunta al vendedor..."
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="flex-1 outline-none border border-gray-250 rounded-xl px-4 py-2.5 text-xs text-gray-800 focus:border-blue-600 focus:ring-1 focus:ring-blue-100 bg-white"
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Preguntar
              </button>
            </div>
          </form>

          {/* Typing Indicator */}
          {isTypingReply && (
            <div className="flex gap-2 items-center p-3.5 bg-blue-50/40 rounded-xl border border-blue-100 mb-3 animate-pulse">
              <MessageSquare className="w-4 h-4 text-blue-600 animate-bounce" />
              <p className="text-[11px] text-blue-700 font-bold">El vendedor está respondiendo tu pregunta...</p>
            </div>
          )}

          {/* Questions List */}
          <div className="space-y-4">
            {questions.map((q) => (
              <div key={q.id} className="text-xs border-b border-gray-50 pb-3">
                <p className="font-semibold text-gray-800 flex items-start justify-between">
                  <span>{q.text}</span>
                  <span className="text-[9px] text-gray-400 font-normal">{q.date}</span>
                </p>
                {q.reply ? (
                  <p className="text-gray-500 mt-1.5 pl-3 border-l-2 border-gray-200 leading-relaxed">
                    <span className="text-[10px] font-bold text-gray-400 block uppercase mb-0.5">Respuesta:</span>
                    {q.reply}
                  </p>
                ) : (
                  <p className="text-gray-400 italic mt-1.5 pl-3 border-l-2 border-blue-200">
                    Pendiente de respuesta...
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Buy Actions */}
      <div className="bg-white border-t border-gray-150 px-4 py-3 flex gap-3 sticky bottom-0 z-30 shadow-md">
        <button 
          onClick={handleAddToCart}
          className="flex-1 bg-blue-50 hover:bg-blue-100 text-blue-600 py-3.5 rounded-xl font-bold text-xs transition-colors cursor-pointer"
        >
          Agregar al carrito
        </button>
        <button 
          onClick={() => triggerNotification('¡Gracias por tu compra! Redirigiendo a pasarela... 💳')}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold text-xs transition-colors cursor-pointer"
        >
          Comprar ahora
        </button>
      </div>
    </div>
  );
}
