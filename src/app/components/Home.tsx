import { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingCart, 
  Menu as MenuIcon, 
  MapPin, 
  CreditCard, 
  QrCode, 
  Send, 
  SmartphoneCharging, 
  ChevronRight, 
  Sparkles, 
  Percent,
  Eye,
  EyeOff,
  Smartphone,
  Home as HomeIcon,
  Trophy,
  Shirt,
  Gamepad2,
  ShoppingBasket,
  Play,
  X,
  Tv
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import BottomNav from './BottomNav';

export default function Home() {
  const [showBalance, setShowBalance] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState('Enviar a Emmanuel - Calle Falsa 123');
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const movies = [
    { 
      id: 1, 
      title: 'Del revés 2 (Inside Out 2)', 
      genre: 'Animación • Familiar', 
      poster: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400', 
      bg: 'from-blue-600 to-indigo-950', 
      desc: 'Vuelven las emociones de Riley. Alegría, Tristeza, Ira, Miedo y Asco tendrán que lidiar con la llegada de Ansiedad.'
    },
    { 
      id: 2, 
      title: 'Deadpool & Wolverine', 
      genre: 'Acción • Comedia', 
      poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?w=400', 
      bg: 'from-red-650 to-zinc-950', 
      desc: 'Wolverine se recupera de sus heridas cuando se cruza con el bocazas Deadpool. Se unen para derrotar a un enemigo común.'
    },
    { 
      id: 3, 
      title: 'Avatar: El Sentido del Agua', 
      genre: 'Ciencia Ficción • Aventura', 
      poster: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400', 
      bg: 'from-cyan-700 to-slate-950', 
      desc: 'Jake Sully y Neytiri han formado una familia y hacen todo lo posible por permanecer juntos explorando las regiones de Pandora.'
    },
    { 
      id: 4, 
      title: 'El Rey León', 
      genre: 'Aventura • Drama', 
      poster: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400', 
      bg: 'from-amber-600 to-amber-950', 
      desc: 'Tras la muerte de su padre, Simba huye de su reino. Años después, regresa para recuperar lo que le corresponde.'
    }
  ];

  const addresses = [
    'Enviar a Emmanuel - Calle Falsa 123',
    'Enviar a Trabajo - Av. Siempre Viva 742',
    'Retirar en Sucursal Correo - Belgrano 450'
  ];

  const carouselSlides = [
    {
      id: 1,
      title: 'Meli+ Cyber Deals',
      subtitle: 'Hasta 50% OFF y 12 cuotas sin interés',
      bgStyle: 'linear-gradient(135deg, #2563eb, #1e1b4b)',
      badge: 'CYBER WEEK',
      linkText: 'Ver ofertas'
    },
    {
      id: 2,
      title: 'Moda e Invierno',
      subtitle: 'Descuentos exclusivos y envío FULL gratis',
      bgStyle: 'linear-gradient(135deg, #db2777, #581c87)',
      badge: 'TENDENCIAS',
      linkText: 'Explorar colección'
    },
    {
      id: 3,
      title: 'Tecno de Vanguardia',
      subtitle: 'Laptops, consolas y accesorios premium',
      bgStyle: 'linear-gradient(135deg, #0d9488, #0f172a)',
      badge: 'TECH DAY',
      linkText: 'Ver lanzamientos'
    }
  ];

  const categories = [
    { id: 1, name: 'Tecnología', icon: <Smartphone className="w-6 h-6 text-meli-blue" />, bg: 'bg-blue-50' },
    { id: 2, name: 'Hogar', icon: <HomeIcon className="w-6 h-6 text-orange-600" />, bg: 'bg-orange-50' },
    { id: 3, name: 'Deportes', icon: <Trophy className="w-6 h-6 text-meli-green" />, bg: 'bg-green-50' },
    { id: 4, name: 'Moda', icon: <Shirt className="w-6 h-6 text-pink-600" />, bg: 'bg-pink-50' },
    { id: 5, name: 'Juguetes', icon: <Gamepad2 className="w-6 h-6 text-purple-600" />, bg: 'bg-purple-50' },
    { id: 6, name: 'Supermercado', icon: <ShoppingBasket className="w-6 h-6 text-teal-600" />, bg: 'bg-teal-50' },
  ];

  const offers = [
    { id: 1, title: 'iPhone 14 Pro Max 256GB - Deep Purple', price: '$1,299', oldPrice: '$1,499', discount: '15% OFF', img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400', isFull: true },
    { id: 2, title: 'MacBook Pro M2 16" Liquid Retina', price: '$2,199', oldPrice: '$2,499', discount: '10% OFF', img: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=400', isFull: true },
    { id: 3, title: 'iPad Air 5ta Generación M1', price: '$799', oldPrice: '$899', discount: '12% OFF', img: 'https://images.unsplash.com/photo-1426024084828-5da21e13f5dc?w=400', isFull: false },
    { id: 4, title: 'AirPods Pro 2da Gen con USB-C', price: '$249', oldPrice: '$299', discount: '20% OFF', img: 'https://images.unsplash.com/photo-1550029402-8ea9bfe19f04?w=400', isFull: true },
  ];

  // Auto-advance slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-meli-light font-sans text-gray-900 pb-16 relative">
      
      {/* Header Container */}
      <div className="bg-meli-yellow pt-3 pb-2 px-4 shadow-sm sticky top-0 z-30">
        <div className="flex items-center justify-between gap-3 mb-2">
          {/* Menu Trigger */}
          <Link to="/mockup/menu" className="p-1 hover:bg-black/5 rounded-full transition-colors">
            <MenuIcon className="w-6 h-6 text-gray-800" />
          </Link>
          
          {/* Logo / Meli Title */}
          <div className="flex-1 flex justify-center">
            <span className="font-extrabold text-xl tracking-tight text-gray-800 flex items-center gap-1 select-none">
              mercado <span className="text-meli-blue italic">libre</span>
            </span>
          </div>

          {/* Cart Trigger */}
          <Link to="/mockup/cart" className="p-1 hover:bg-black/5 rounded-full transition-colors relative">
            <ShoppingCart className="w-6 h-6 text-gray-800" />
            <span className="absolute top-0 right-0 bg-meli-blue text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center border border-meli-yellow">
              2
            </span>
          </Link>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-full flex items-center px-4 py-2 shadow-sm border border-gray-100 mb-1 hover:shadow-md transition-shadow">
          <Search className="w-5 h-5 text-gray-400 mr-2 flex-shrink-0" />
          <input
            type="text"
            placeholder="Buscar productos, marcas y más..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent font-normal"
          />
        </div>
      </div>

      {/* Address Bar */}
      <button 
        onClick={() => setShowAddressModal(true)}
        className="bg-meli-yellow px-4 py-1.5 flex items-center text-xs text-gray-700 font-medium select-none border-t border-meli-yellow/20 hover:bg-black/5 transition-colors"
      >
        <MapPin className="w-3.5 h-3.5 mr-1.5 text-gray-600 flex-shrink-0" />
        <span className="truncate flex-1 text-left">{selectedAddress}</span>
        <ChevronRight className="w-4 h-4 text-gray-600 flex-shrink-0" />
      </button>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto scrollbar-hide space-y-3">

        {/* Mercado Pago Wallet Widget */}
        <div className="mx-4 mt-3 bg-white rounded-xl shadow-sm border border-gray-100 p-4 relative overflow-hidden transition-all duration-300 hover:shadow-md">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 border-b border-gray-50 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-sm tracking-tight text-meli-blue italic">
                mercado <span className="text-gray-800">pago</span>
              </span>
            </div>
            <button 
              onClick={() => setShowBalance(!showBalance)}
              className="text-gray-400 hover:text-gray-600 transition-colors p-1"
            >
              {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
            </button>
          </div>

          {/* Balance and Actions */}
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider">Dinero disponible</p>
              <h2 className="text-xl font-bold text-gray-800 mt-0.5">
                {showBalance ? '$ 12,450.00' : '••••••'}
              </h2>
            </div>
            <div className="flex gap-2">
              <button className="flex flex-col items-center justify-center bg-blue-50 hover:bg-blue-100 text-meli-blue p-2.5 rounded-xl transition-colors cursor-pointer">
                <QrCode className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-bold">Pagar QR</span>
              </button>
              <button className="flex flex-col items-center justify-center bg-blue-50 hover:bg-blue-100 text-meli-blue p-2.5 rounded-xl transition-colors cursor-pointer">
                <Send className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-bold">Transferir</span>
              </button>
              <button className="flex flex-col items-center justify-center bg-blue-50 hover:bg-blue-100 text-meli-blue p-2.5 rounded-xl transition-colors cursor-pointer">
                <SmartphoneCharging className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-bold">Cargar</span>
              </button>
            </div>
          </div>
        </div>

        {/* meli+ Subscription Banner */}
        <div 
          style={{ background: 'linear-gradient(135deg, #0C1A30, #1E2E4B, #344E86)' }}
          className="mx-4 text-white rounded-xl p-4 shadow-sm relative overflow-hidden flex items-center justify-between border border-gray-800/20 group hover:shadow-md transition-shadow"
        >
          <div className="relative z-10">
            <span className="bg-meli-blue text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded-md tracking-wider uppercase mb-1.5 inline-block">
              BENEFICIOS EXTRA
            </span>
            <h3 className="font-extrabold text-base tracking-tight text-white leading-tight">
              Suscribite a <span className="text-meli-blue">meli+</span>
            </h3>
            <p className="text-[11px] text-gray-300 mt-1 max-w-[200px]">
              Envíos gratis en millones de productos y Disney+ Premium incluido.
            </p>
          </div>
          <button className="relative z-10 bg-meli-blue hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-xs font-bold transition-all transform group-hover:scale-105 shadow-sm">
            Unirme
          </button>
          
          {/* Ambient light effect background */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-500/20 to-transparent blur-xl pointer-events-none" />
        </div>

        {/* Interactive Carousel Offers Banner */}
        <div className="mx-4 relative rounded-xl overflow-hidden shadow-sm h-36 border border-gray-100 select-none">
          {carouselSlides.map((slide, index) => (
            <div
              key={slide.id}
              style={{ background: slide.bgStyle }}
              className={`absolute inset-0 p-5 flex flex-col justify-between text-white transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div>
                <span className="bg-white/20 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider mb-2 inline-block">
                  {slide.badge}
                </span>
                <h3 className="text-lg font-bold leading-tight">{slide.title}</h3>
                <p className="text-xs text-white/80 mt-1">{slide.subtitle}</p>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-white hover:text-gray-100 mt-2">
                <span>{slide.linkText}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          ))}
          
          {/* Slide Indicators */}
          <div className="absolute bottom-3 right-4 flex gap-1.5 z-10">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white w-4' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="bg-white p-4 mx-4 rounded-xl shadow-sm border border-gray-50">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-extrabold text-base text-gray-800 tracking-tight flex items-center gap-1.5">
              <span className="text-meli-yellow">★</span>
              Categorías destacadas
            </h2>
            <Link to="/mockup/menu" className="text-xs font-bold text-meli-blue hover:text-blue-700">
              Ver todas
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/mockup/products/${cat.name.toLowerCase()}`}
                className="flex flex-col items-center justify-center p-3 rounded-xl border border-gray-50 transition-all hover:scale-[1.03] hover:shadow-xs active:scale-[0.98]"
              >
                <div className={`p-3 rounded-full ${cat.bg} mb-2 shadow-xs`}>
                  {cat.icon}
                </div>
                <span className="text-[11px] font-bold text-gray-700 text-center line-clamp-1">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Ofertas del Día (Horizontal Scroll Carousel) */}
        <div className="bg-white py-4 px-4 shadow-sm border-y border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-extrabold text-base text-gray-800 tracking-tight flex items-center gap-1.5">
              <Percent className="w-4 h-4 text-meli-green" />
              Ofertas del día
            </h2>
            <Link to="/mockup/products/ofertas" className="text-xs font-bold text-meli-blue hover:text-blue-700">
              Ver más
            </Link>
          </div>

          {/* Cards Wrapper */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x">
            {offers.map((offer) => (
              <Link
                key={offer.id}
                to={`/mockup/product/${offer.id}`}
                className="snap-start w-36 border border-gray-100 rounded-xl overflow-hidden flex-shrink-0 flex flex-col justify-between bg-white hover:shadow-md transition-shadow active:scale-[0.99]"
              >
                <div className="relative">
                  <ImageWithFallback
                    src={offer.img}
                    alt={offer.title}
                    className="w-full h-32 object-cover"
                  />
                  {offer.isFull && (
                    <span className="absolute bottom-2 left-2 bg-meli-green text-white text-[9px] font-black px-1.5 py-0.5 rounded flex items-center gap-0.5 italic shadow-sm">
                      ⚡ FULL
                    </span>
                  )}
                </div>
                
                <div className="p-2.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-[11px] text-gray-500 font-semibold line-clamp-2 leading-tight mb-1">
                      {offer.title}
                    </h4>
                    <div className="flex items-baseline gap-1 mt-1">
                      <span className="font-bold text-base text-gray-900">{offer.price}</span>
                      <span className="text-[10px] text-meli-green font-bold bg-green-50 px-1 rounded">
                        {offer.discount}
                      </span>
                    </div>
                    {offer.oldPrice && (
                      <p className="text-[10px] text-gray-400 line-through leading-none mt-0.5">
                        {offer.oldPrice}
                      </p>
                    )}
                  </div>
                  <div className="mt-2 pt-1.5 border-t border-gray-50">
                    <p className="text-[9px] text-meli-green font-bold">Envío gratis</p>
                    <p className="text-[9px] text-gray-400">en 12x ${(parseFloat(offer.price.replace('$','').replace(',',''))/12).toFixed(1)} sin int.</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mercado Play (Peliculas y Series gratis) */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-zinc-950 p-4 mx-4 rounded-xl shadow-md border border-slate-800 text-white relative overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-3.5 relative z-10">
            <div className="flex items-center gap-1.5">
              <div className="bg-cyan-500 rounded-lg p-1 flex items-center justify-center">
                <Play className="w-3.5 h-3.5 text-black fill-current" />
              </div>
              <div>
                <span className="font-extrabold text-sm tracking-tight text-white italic">
                  mercado <span className="text-cyan-400 not-italic">play</span>
                </span>
                <p className="text-[9px] text-cyan-300 font-semibold leading-none mt-0.5">Películas y series gratis</p>
              </div>
            </div>
            <span className="bg-cyan-400 text-black text-[8px] font-black px-1.5 py-0.5 rounded tracking-wide uppercase shadow-xs">
              Meli+ Benefit
            </span>
          </div>

          {/* Description */}
          <p className="text-[10px] text-gray-400 mb-3 relative z-10 leading-snug">
            Disfruta de streaming gratis con anuncios o vincula tu cuenta para transmitir a una pantalla.
          </p>

          {/* Horizontal Scroll of Movies */}
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x relative z-10">
            {movies.map((movie) => (
              <button
                key={movie.id}
                onClick={() => {
                  setSelectedMovie(movie);
                  setIsPlaying(false);
                }}
                className="snap-start w-28 text-left flex-shrink-0 flex flex-col gap-1.5 focus:outline-none cursor-pointer group"
              >
                <div className="relative aspect-[2/3] rounded-lg overflow-hidden border border-slate-800 bg-zinc-900 shadow-sm transition-all group-hover:scale-[1.03] group-hover:border-cyan-400/50">
                  <ImageWithFallback
                    src={movie.poster}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-cyan-400 rounded-full p-2 text-black shadow-md">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-gray-200 line-clamp-1 group-hover:text-cyan-400 leading-tight">
                    {movie.title}
                  </h4>
                  <p className="text-[8px] text-gray-500 font-semibold truncate mt-0.5">{movie.genre}</p>
                </div>
              </button>
            ))}
          </div>
          
          {/* Decorative light reflection */}
          <div className="absolute right-0 top-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
        </div>

        {/* Explorar más links */}
        <div className="bg-white p-4 mx-4 rounded-xl shadow-sm border border-gray-50 mb-6">
          <h2 className="font-extrabold text-sm text-gray-800 mb-3 uppercase tracking-wider text-[10px] text-gray-400">
            Explorar más secciones
          </h2>
          <div className="space-y-2">
            <Link to="/mockup/products/ofertas" className="flex items-center justify-between p-3 bg-blue-50/50 hover:bg-blue-50 rounded-xl transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-lg">🔥</span>
                <span className="text-xs font-semibold text-gray-700">Ver todas las ofertas del Hot Sale</span>
              </div>
              <ChevronRight className="w-4 h-4 text-meli-blue" />
            </Link>
            <Link to="/mockup/products/destacados" className="flex items-center justify-between p-3 bg-orange-50/50 hover:bg-orange-50 rounded-xl transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-lg">🌟</span>
                <span className="text-xs font-semibold text-gray-700">Novedades y Productos destacados</span>
              </div>
              <ChevronRight className="w-4 h-4 text-orange-600" />
            </Link>
            <Link to="/mockup/products/mas-vendidos" className="flex items-center justify-between p-3 bg-green-50/50 hover:bg-green-50 rounded-xl transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-lg">🏆</span>
                <span className="text-xs font-semibold text-gray-700">Los artículos más vendidos del mes</span>
              </div>
              <ChevronRight className="w-4 h-4 text-meli-green" />
            </Link>
          </div>
        </div>

      </div>

      {/* Address Selection Modal */}
      {showAddressModal && (
        <div className="absolute inset-0 bg-black/50 z-50 flex items-end justify-center">
          <div className="w-full max-w-[430px] bg-white rounded-t-2xl p-5 shadow-2xl animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <h3 className="font-bold text-gray-800 text-base">Elegir dónde recibir tus compras</h3>
              <button 
                onClick={() => setShowAddressModal(false)}
                className="text-gray-400 hover:text-gray-600 text-sm font-bold p-1"
              >
                Cerrar
              </button>
            </div>
            
            <div className="space-y-3.5">
              {addresses.map((address, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setSelectedAddress(address);
                    setShowAddressModal(false);
                  }}
                  className={`w-full flex items-start gap-3 p-3.5 rounded-xl border text-left transition-colors ${
                    selectedAddress === address 
                      ? 'border-meli-blue bg-blue-50/40 text-meli-blue' 
                      : 'border-gray-150 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <MapPin className={`w-5 h-5 flex-shrink-0 mt-0.5 ${selectedAddress === address ? 'text-meli-blue' : 'text-gray-400'}`} />
                  <div>
                    <p className="text-xs font-bold">{address.split(' - ')[0]}</p>
                    <p className="text-xs opacity-90 mt-0.5">{address.split(' - ')[1]}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mercado Play Mock Video Player Modal */}
      {selectedMovie && (
        <div className="absolute inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-[390px] bg-zinc-950 rounded-2xl overflow-hidden border border-zinc-850 shadow-2xl animate-in zoom-in-95 duration-200 text-white">
            {/* Player Area */}
            <div className={`relative aspect-video flex items-center justify-center bg-zinc-900 border-b border-zinc-900`}>
              {isPlaying ? (
                // Playing Screen Mock
                <div className="w-full h-full relative flex flex-col justify-between p-3 bg-black">
                  {/* Top bar */}
                  <div className="flex items-center justify-between text-[10px] text-gray-400">
                    <span className="font-semibold">{selectedMovie.title}</span>
                    <span className="bg-red-600 text-white text-[8px] font-bold px-1 rounded uppercase">VIVO</span>
                  </div>
                  {/* Streaming Spinner or Play Mock animation */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                    <div className="w-8 h-8 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
                    <span className="text-[10px] text-cyan-400 font-bold tracking-wider uppercase animate-pulse">Reproduciendo...</span>
                  </div>
                  {/* Video Controls overlay */}
                  <div className="w-full flex items-center justify-between mt-auto z-10 pt-2 text-[10px] text-gray-300">
                    <span>0:14 / {selectedMovie.duration || '2h 10m'}</span>
                    <button 
                      onClick={() => setIsPlaying(false)}
                      className="text-xs text-cyan-400 font-bold hover:underline cursor-pointer"
                    >
                      Pausar
                    </button>
                  </div>
                </div>
              ) : (
                // Movie Splash Cover with Play button
                <>
                  <ImageWithFallback
                    src={selectedMovie.poster}
                    alt={selectedMovie.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                  />
                  <div className="relative z-10 flex flex-col items-center gap-2 text-center px-4">
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="bg-cyan-400 hover:bg-cyan-500 text-black rounded-full p-4 shadow-xl transform hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </button>
                    <span className="text-xs font-bold text-gray-250">Reproducir ahora</span>
                  </div>
                </>
              )}
            </div>

            {/* Info details Area */}
            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-extrabold text-sm text-white leading-tight">{selectedMovie.title}</h3>
                  <p className="text-[10px] text-cyan-400 font-semibold mt-1">{selectedMovie.genre}</p>
                </div>
                <button 
                  onClick={() => {
                    setSelectedMovie(null);
                    setIsPlaying(false);
                  }}
                  className="bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-gray-400 hover:text-white p-1.5 rounded-full transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[11px] text-gray-400 leading-relaxed">
                {selectedMovie.desc}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-2.5 pt-1.5">
                <button 
                  onClick={() => setIsPlaying(true)}
                  className="flex-1 bg-cyan-400 hover:bg-cyan-500 text-black py-2.5 rounded-xl font-bold text-xs shadow-md transition-colors cursor-pointer text-center"
                >
                  Ver en celular
                </button>
                <button 
                  onClick={() => alert(`Transmitiendo "${selectedMovie.title}" a tu Smart TV... 📺`)}
                  className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 py-2.5 rounded-xl font-bold text-xs transition-colors cursor-pointer text-center flex items-center justify-center gap-1.5"
                >
                  <Tv className="w-3.5 h-3.5" /> Transmitir a TV
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Footer */}
      <BottomNav activeTab="home" />
    </div>
  );
}
