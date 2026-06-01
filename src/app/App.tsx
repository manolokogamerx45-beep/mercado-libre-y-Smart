import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MockupGallery from './components/MockupGallery';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import Notifications from './components/Notifications';
import Account from './components/Account';
import Menu from './components/Menu';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Gallery Route */}
        <Route path="/" element={<MockupGallery />} />

        {/* Mockup Routes */}
        <Route path="/mockup/home" element={
          <div className="size-full bg-[#EEEEEE] overflow-auto">
            <div className="max-w-[430px] mx-auto min-h-screen bg-white">
              <Home />
            </div>
          </div>
        } />
        <Route path="/mockup/products/:category" element={
          <div className="size-full bg-[#EEEEEE] overflow-auto">
            <div className="max-w-[430px] mx-auto min-h-screen bg-white">
              <ProductList />
            </div>
          </div>
        } />
        <Route path="/mockup/product/:id" element={
          <div className="size-full bg-[#EEEEEE] overflow-auto">
            <div className="max-w-[430px] mx-auto min-h-screen bg-white">
              <ProductDetail />
            </div>
          </div>
        } />
        <Route path="/mockup/cart" element={
          <div className="size-full bg-[#EEEEEE] overflow-auto">
            <div className="max-w-[430px] mx-auto min-h-screen bg-white">
              <Cart />
            </div>
          </div>
        } />
        <Route path="/mockup/favorites" element={
          <div className="size-full bg-[#EEEEEE] overflow-auto">
            <div className="max-w-[430px] mx-auto min-h-screen bg-white">
              <Favorites />
            </div>
          </div>
        } />
        <Route path="/mockup/notifications" element={
          <div className="size-full bg-[#EEEEEE] overflow-auto">
            <div className="max-w-[430px] mx-auto min-h-screen bg-white">
              <Notifications />
            </div>
          </div>
        } />
        <Route path="/mockup/account" element={
          <div className="size-full bg-[#EEEEEE] overflow-auto">
            <div className="max-w-[430px] mx-auto min-h-screen bg-white">
              <Account />
            </div>
          </div>
        } />
        <Route path="/mockup/menu" element={
          <div className="size-full bg-[#EEEEEE] overflow-auto">
            <div className="max-w-[430px] mx-auto min-h-screen bg-white">
              <Menu />
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}
