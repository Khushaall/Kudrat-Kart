import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Blog from './pages/Blog'
import Register from './pages/Register'
import Shop from './pages/Shop'
import Cart from './pages/Cart'
import { CartProvider } from './context/CartContext'
import { Toaster } from 'react-hot-toast';
import ScrollToTop from './utils/ScrolltoTop'

const App = () => {
  return (
    <CartProvider>

      <Toaster />
      <Router>
      <ScrollToTop />

        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App
