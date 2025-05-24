import React from 'react';
import Header from '../components/Header';
import ContactSupport from '../components/ContactSupport';
import Footer from '../components/Footer';

const blogs = [
  {
    date: '18 Dec, 21',
    image: 'https://kudratkart.com/uploads/blogs/c32c61dcd9985757b99e558e3cf1fe96.jpg',
    title: 'Dhaniya Powder - That takes care of your taste buds and your health',
    desc: 'Since it has a yummilicious taste, nobody can refrain from having Dhaniya powder in Indian dishes.',
  },
  {
    date: '22 Dec, 21',
    image: 'https://kudratkart.com/uploads/blogs/c7ba77f697d8f392c2800bb9f1f088f6.jpg',
    title: '6 Amazing Health Benefits of using Bay Leaf',
    desc: 'In Indian dishes, bay leaves are the secret behind the unforgettable aroma and taste.',
  },
  {
    date: '30 Dec, 21',
    image: 'https://kudratkart.com/uploads/blogs/f8b5f8ad9c09de7ff052a64f6530295b.jpg',
    title: '10 Amazing Health Benefits of Kalonji Seeds',
    desc: 'Kalonji seeds add more than flavor—they bring health benefits as members of the buttercup family.',
  },
  {
    date: '12 Jun, 21',
    image: 'https://kudratkart.com/uploads/blogs/7128f78ad3f55b4277c60667aa205093.jpg',
    title: 'Unearth the Magic of Facial Massage Oil',
    desc: 'Facial massage is easy, relaxing, and extremely beneficial. It can be done with a masseur or on your own.',
  },
  {
    date: '08 Jun, 21',
    image: 'https://kudratkart.com/uploads/blogs/b8410088534a443db025c679718e02c0.jpg',
    title: '6 Awesome Ways Kasuri Methi Makes Your Food Tastier',
    desc: 'Kasuri methi from Modern Agro is a way to a healthier life, boosting both flavour and immunity.',
  },
  {
    date: '21 May, 21',
    image: 'https://kudratkart.com/uploads/blogs/9effde42be34bdf99d455b883223207f.jpg',
    title: 'Baby Massage Oil for Ultra-Soft Skin',
    desc: 'Baby massage becomes effective when used with a super gentle, nourishing formula.',
  },
  // Add more if needed
];


export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div
        className="w-full h-52 bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold"
        style={{
          backgroundImage:
            "url('https://kudratkart.com/gocart/themes/theme_new/assets/images/blog_banner.jpg')",
        }}
      >
        OUR BLOG
      </div>

      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog, idx) => (
            <div
              key={idx}
              className="shadow-md rounded-2xl overflow-hidden bg-white"
            >
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-sm font-bold rounded">
                  {blog.date}
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{blog.desc}</p>
                <button className="text-green-700 font-semibold hover:underline">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <ContactSupport />
      <Footer />
    </div>
  );
}
