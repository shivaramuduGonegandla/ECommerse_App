import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import Forgetpassword from './pages/Forgetpassword';
import ResetPassword from './pages/ResetPassword';
import Signup from './pages/Signup';
import Singleblog from './pages/Singleblog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import DetailsPage from './pages/DetailsPage';
import BlogDetail from './pages/BlogDetail';
import ElectronicsPage from './pages/ElectronicsPage';
import FashionPage from './pages/FashionPage';
import HomeKitchenPage from './pages/HomeKitchenPage ';
import SportsPage from './pages/SportsPage';
import PhonesPage from './pages/PhonesPage';
import LaptopsPage from './pages/LaptopsPage';
import AccessoriesPage from './pages/AccessoriesPage';
import Reviews from './pages/Reviews';


function App() {
 

  return (
    <>
      <HashRouter>
         <Routes>
            
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<Singleblog />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forget-password" element={<Forgetpassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/terms-conditions" element={<TermsAndConditions />} />

            <Route path="/cart" element={<Cart />} />
            
           
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/blog/:id" element={<BlogDetail />} />

            <Route path="/category/electronics" element={<ElectronicsPage />} />
          <Route path="/category/fashion" element={<FashionPage />} />
          <Route path="/category/home" element={<HomeKitchenPage />} />
          <Route path="/category/sports" element={<SportsPage />} />

          <Route path="/category/electronics/phones" element={<PhonesPage />} />
          <Route path="/category/electronics/laptops" element={<LaptopsPage />} />
          <Route path="/category/electronics/accessories" element={<AccessoriesPage />} />
          <Route path="reviews" element={<Reviews />} />
            
      
          </Route>
         </Routes>
      </HashRouter>
    </>
  )
}

export default App
