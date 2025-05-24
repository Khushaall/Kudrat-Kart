import React, { useState } from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  price,
  weightOptions,
  rating,
  imageUrl,
  link = '#',
}) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState(weightOptions[0]);
  const navigate = useNavigate();

  const customToast = () => {
    toast.success('Product added to KudratKart!', {
      style: {
        background: '#000',
        color: '#fff',
        border: '1px solid #333',
      },
    });
  };

  const handleAdd = () => {
    addToCart({
      name: title,
      description,
      price,
      weight: selectedWeight,
      rating,
      imageUrl,
      link,
      quantity,
    });
    customToast();
  };

  const handleBuyNow = () => {
    addToCart({
      name: title,
      description,
      price,
      weight: selectedWeight,
      rating,
      imageUrl,
      link,
      quantity,
    });
    navigate('/cart');
  };

  return (
    <div className="flex flex-col justify-between rounded-xl bg-white shadow-md border border-gray-100 p-5 min-h-[600px] w-full max-w-sm hover:shadow-xl transition-shadow">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={imageUrl} alt={title} className="w-full h-48 object-contain mb-4" />
      </a>
      <h3 className="text-xl font-semibold mb-2 text-gray-800 text-center">{title}</h3>
      <div className="mb-2">
        <select
          className="border border-gray-300 rounded px-3 py-2 w-full text-sm"
          value={selectedWeight}
          onChange={(e) => setSelectedWeight(e.target.value)}
        >
          {weightOptions.map((option, idx) => (
            <option key={idx}>{option}</option>
          ))}
        </select>
      </div>
      <div className="text-2xl font-bold text-green-700 mb-2 text-center">₹{price.toFixed(2)}</div>
      <div className="flex justify-center text-yellow-500 text-lg mb-2">
        {'★'.repeat(rating)}
        {'☆'.repeat(5 - rating)}
      </div>
      <p className="text-gray-600 text-sm mb-4 text-center">{description}</p>
      <div className="flex items-center justify-center gap-4 mb-4">
        <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-9 h-9 rounded-full border text-xl hover:bg-gray-100 cursor-pointer">-</button>
        <span className="text-lg">{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)} className="w-9 h-9 rounded-full border text-xl hover:bg-gray-100 cursor-pointer">+</button>
      </div>
      <div className="flex gap-2 mb-4">
        <button className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700" onClick={handleAdd}>ADD TO CART</button>
        <button className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600" onClick={handleBuyNow}>BUY NOW</button>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-700 mb-1">Share On:</p>
        <div className="flex justify-center gap-4">
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`} target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-blue-600 text-xl hover:scale-110 transition-transform" />
          </a>
          <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' - ' + link)}`} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-green-500 text-xl hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
