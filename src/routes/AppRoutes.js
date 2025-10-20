import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Home from '../pages/Home';
import About from '../pages/About';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import ForgotPassword from '../pages/ForgotPassword';
import Cart from '../pages/Cart';
import Products from '../pages/Products';
import Fruits from '../pages/fruits';
import Vegetables from '../pages/Vegetables';
import Spices from '../pages/Spices';
import Dairy from '../pages/Dairy'; 
import Cereals from '../pages/Cereals';
import Dry from '../pages/dry';
import Checkout from '../pages/checkout'; 

function AppRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/fruits" element={<Fruits />} />
        <Route path="/vegetables" element={<Vegetables />} />
        <Route path="/spices" element={<Spices />} />
        <Route path="/dairy-products" element={<Dairy />} /> 
        <Route path="/cereals-pulses" element={<Cereals />} />
        <Route path="/dry-fruits" element={<Dry />} />
        <Route path="/checkout" element={<Checkout />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
