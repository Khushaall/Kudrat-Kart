import React, { useState } from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { products } from './products';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ContactSupport from '../components/ContactSupport';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';

const Shop = () => {
  const [selectedProduct, setSelectedProduct] = useState<{ name: string } | null>(null);
  const { addToCart } = useCart();
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const navigate = useNavigate();

  const handleAddToCart = (product: any, index: number) => {
    const quantity = quantities[index] || 1;
    addToCart({ ...product, quantity });
    setSelectedProduct({ name: product.name });
    toast.success(`${product.name} added to cart`);
  };

  const handleBuyNow = (product: any, index: number) => {
    const quantity = quantities[index] || 1;
    addToCart({ ...product, quantity });
    toast.success(`${product.name} added to cart`);
    navigate('/cart');
  };

  const increaseQuantity = (index: number) => {
    setQuantities(prev => ({ ...prev, [index]: (prev[index] || 1) + 1 }));
  };

  const decreaseQuantity = (index: number) => {
    setQuantities(prev => ({
      ...prev,
      [index]: Math.max(1, (prev[index] || 1) - 1)
    }));
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#000',
            color: '#fff',
          },
        }}
      />

      <Header />

      <div
        style={{
          backgroundImage: "url(https://kudratkart.com/gocart/themes/theme_new/assets/images/search-banner.jpg)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '100px 0 40px',
          textAlign: 'center',
          color: 'white',
          position: 'relative'
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0,0,0,0.3)', zIndex: 1
        }}></div>
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold' }}>SHOP</h1>
          <p style={{ fontStyle: 'italic' }}>Home / All Products</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '40px 20px' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>SHOP ALL PRODUCTS</h2>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '24px',
        padding: '0 40px 60px'
      }}>
        {products.map((product, index) => (
          <div key={index} style={{
            backgroundColor: '#fff',
            width: '320px',
            borderRadius: '10px',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
          }}>
            <a href={product.link}>
              <img src={product.image} alt={product.name} style={{ width: '100%', height: '220px', objectFit: 'contain' }} />
            </a>

            <h3 style={{ fontSize: '18px', margin: '14px 0 8px', fontWeight: 600 }}>{product.name}</h3>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <select style={{ padding: '6px 8px', fontSize: '14px' }}>
                {product.options.map((opt: string, i: number) => (
                  <option key={i}>{opt}</option>
                ))}
              </select>
              <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#000' }}>₹{product.price}</span>
            </div>

            <div style={{ color: '#fbc02d', fontSize: '16px', marginBottom: '6px' }}>★★★★★</div>

            <p style={{ fontSize: '14px', color: '#666', marginBottom: '14px' }}>{product.description}</p>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '14px' }}>
              <button
                style={{ width: '32px', height: '32px', fontSize: '16px', border: '1px solid #ccc', cursor: 'pointer' }}
                onClick={() => decreaseQuantity(index)}
              >-</button>
              <input
                type="number"
                value={quantities[index] || 1}
                readOnly
                style={{ width: '45px', fontSize: '14px', textAlign: 'center', margin: '0 10px' }}
              />
              <button
                style={{ width: '32px', height: '32px', fontSize: '16px', border: '1px solid #ccc', cursor: 'pointer' }}
                onClick={() => increaseQuantity(index)}
              >+</button>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '14px' }}>
              <button
                className="bg-green-800 hover:bg-green-600 cursor-pointer"
                style={{ flex: 1, color: 'white', padding: '10px', fontSize: '14px', border: 'none' }}
                onClick={() => handleAddToCart(product, index)}
              >
                ADD TO CART
              </button>
              <button
                className="bg-green-800 hover:bg-green-600 cursor-pointer"
                style={{ flex: 1, color: 'white', padding: '10px', fontSize: '14px', border: 'none' }}
                onClick={() => handleBuyNow(product, index)}
              >
                BUY NOW
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px', color: '#555', gap: '12px' }}>
              <span>Share On:</span>
              <FaFacebookF style={{ color: 'blue', cursor: 'pointer' }} />
              <FaWhatsapp style={{ color: 'green', cursor: 'pointer' }} />
            </div>
          </div>
        ))}
      </div>

      <ContactSupport />
      <Footer />
    </>
  );
};

export default Shop;
