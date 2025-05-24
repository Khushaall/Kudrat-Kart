import React, { useState } from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import ProductCard from './ProductCard';

const products = [
  {
    title: 'Kudrat Kart - Ajwain',
    description: 'Modern Agro  Ajwain is completely authentic and will give you…',
    price: 310,
    weightOptions: ['500 gm', '250 gm', '100 gm'],
    rating: 4,
    imageUrl: 'https://kudratkart.com/uploads/images/medium/3bd445830354cd759455c84cffeaa5ba.jpg',
    link: 'https://kudratkart.com/ajwain-carom-seeds',
  },
  {
    title: 'Kudrat Kart - Haldi',
    description: 'Turmeric, or Haldi as it is known in India, is…',
    price: 230,
    weightOptions: ['500 gm', '250 gm', '100 gm'],
    rating: 5,
    imageUrl: 'https://kudratkart.com/uploads/images/medium/993f8dcde153ff69f6c34f12249fc8d4.jpg',
    link: 'https://kudratkart.com/pure-haldi-powder-online',
  },
  {
    title: 'Kudrat Kart - Garam Masala',
    description: 'Modern Agro Garam Masala is the best spice which is…',
    price: 660,
    weightOptions: ['500 gm', '250 gm', '100 gm', '50 gm'],
    rating: 5,
    imageUrl: 'https://kudratkart.com/uploads/images/medium/ec2a953e6fb3ce87277ab91d1722ae71.jpg',
    link: 'https://kudratkart.com/garam-masala-powder',
  },
  {
    title: 'Kudrat Kart - Kala Namak',
    description: 'Looking for quality black salt? Modern Agro Kala Namak is…',
    price: 75,
    weightOptions: ['500 gm', '250 gm'],
    rating: 4,
    imageUrl: 'https://kudratkart.com/uploads/images/medium/4a927c31f1dfe6a46f79883913a04341.jpg',
    link: 'https://kudratkart.com/black-salt-kala-namak-price',
  },
  {
    title: 'Kudrat Kart - Dhaniya Seeds',
    description: 'Modern Agro Coriander Seeds will offer a very distinct taste…',
    price: 450,
    weightOptions: ['500 gm', '250 gm', '100 gm', '50 gm'],
    rating: 4,
    imageUrl: 'https://kudratkart.com/uploads/images/medium/ae767c83bf9a45089346bd94c67799f0.jpg',
    link: 'https://kudratkart.com/coriander-seeds-online-dhaniya',
  },
  {
    title: 'Kudrat Kart - Kali Mirch Powder',
    description: 'Are you a lover of spicy food but are afraid…',
    price: 480,
    weightOptions: ['250 gm', '100 gm', '50 gm'],
    rating: 5,
    imageUrl: 'https://kudratkart.com/uploads/images/medium/5cbc2de626d48f5e9adaa9c587406ef2.jpg',
    link: 'https://kudratkart.com/kali-mirch-powder-online-price-kudrat-kart',
  },
  {
    title: 'Kudrat Kart - Deghi Mirch',
    description: 'Modern Agro Deghi Mirch is an amazing spice which can…',
    price: 700,
    weightOptions: ['500 gm', '250 gm', '100 gm', '50 gm'],
    rating: 5,
    imageUrl: 'https://kudratkart.com/uploads/images/medium/4bd656ed3d6917cdafccb33e94db6046.jpg',
    link: 'https://kudratkart.com/deghi-mirch',
  },
  {
    title: 'Kudrat Kart - Dalchini',
    description: 'Modern Agro Dalchini is famous for its wholesome Natural taste…',
    price: 550,
    weightOptions: ['500 gm', '250 gm', '100 gm', '50 gm'],
    rating: 5,
    imageUrl: 'https://kudratkart.com/uploads/images/medium/9a809a0c2a95cb1c74035065432fc4e3.jpg',
    link: 'https://kudratkart.com/cinnamon-sticks-online-dalchini',
  },
  {
    title: 'Kudrat Kart - Magh Pipal',
    description: 'Buy Kudrat Kart Magh Pipal to keep yourself hale and…',
    price: 210,
    weightOptions: ['250 gm', '100 gm'],
    rating: 3,
    imageUrl: 'https://kudratkart.com/uploads/images/medium/5f815e85ae0f74f50cec8144ffe4a8e1.jpg',
    link: 'https://kudratkart.com/magh-pipal',
  },
  {
    title: 'Kudrat Kart - Jeera',
    description: 'Modern Agro Jeera is original to the optimum level. Your…',
    price: 480,
    weightOptions: ['500 gm', '250 gm', '100 gm'],
    rating: 4,
    imageUrl: 'https://kudratkart.com/uploads/images/medium/6e180b152afc29881a413fc2be82fed5.jpg',
    link: 'https://kudratkart.com/cumin-jeera-price-online',
  },
  {
    title: 'Kudrat Kart - Kali Mirch',
    description: 'Add extra delight to your food by using Modern Agro…',
    price: 950,
    weightOptions: ['500 gm', '250 gm', '100 gm', '50 gm'],
    rating: 5,
    imageUrl: 'https://kudratkart.com/uploads/images/medium/d7ec19bb31168535405f54c98ab01848.jpg',
    link: 'https://kudratkart.com/sabut-kali-mirch-black-pepper-price',
  },
  {
    title: 'Kudrat Kart - Dry Ginger (Sonth)',
    description: 'Buy Kudrat Kart Dry Ginger at affordable prices. Here, you…',
    price: 270,
    weightOptions: ['250 gm', '100 gm', '50 gm'],
    rating: 4,
    imageUrl: 'https://kudratkart.com/uploads/images/medium/e50accfd0944520f3385436ae2c825a6.jpg',
    link: 'https://kudratkart.com/buy-dry-ginger',
  }
];

const ProductsSection = () => {
  return (
    <section className="bg-white px-6 pb-12">
      <div className="text-center mb-10 p-20">
        <img
          src="https://kudratkart.com/gocart/themes/theme_new/assets/images/icons/symbol-02.png"
          alt="Our Products"
          className="mx-auto mb-4 w-24 h-24 opacity-60"
        />
        <h2 className="text-4xl font-bold text-gray-800">OUR PRODUCTS</h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;