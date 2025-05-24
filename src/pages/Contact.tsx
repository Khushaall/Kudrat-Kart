import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactSupport from '../components/ContactSupport';

export default function Contact() {
  return (
    <div>
      <Header />

      <div
        className="w-full h-64 bg-center bg-cover flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('https://kudratkart.com/gocart/themes/theme_new/assets/images/bg-07.jpg')" }}
      >
        <h1 className="text-5xl font-bold">CONTACT US</h1>
        <p className="text-sm mt-2">Home / Contact Us</p>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-green-600 text-white p-10 rounded-md space-y-8">
          <h2 className="text-3xl font-bold uppercase">Our Distribution Centers</h2>

          <div className="flex items-start space-x-5">
            <img src="https://kudratkart.com/gocart/themes/theme_new/assets/images/icons/icon-address-02.png" alt="Location" className="w-10 h-10" />
            <p>
              Modern Agro, Village Phusgarh, Karnal<br />
              Haryana - 132001<br />
              (Mb. +91 - 8685020202)
            </p>
          </div>

          <div className="flex items-start space-x-5">
            <img src="https://kudratkart.com/gocart/themes/theme_new/assets/images/icons/icon-mail-04.png" alt="Email" className="w-10 h-10" />
            <p>info@kudratkart.com</p>
          </div>

          <div className="flex items-start space-x-5">
            <img src="https://kudratkart.com/gocart/themes/theme_new/assets/images/icons/icon-web-02.png" alt="Website" className="w-10 h-10" />
            <p>www.kudratkart.com</p>
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-10">LEAVE US A MESSAGE!</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Full Name *" className="border border-gray-300 p-4 w-full focus:outline-none" />
              <input type="email" placeholder="Your Email *" className="border border-gray-300 p-4 w-full focus:outline-none" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Your Phone *" className="border border-gray-300 p-4 w-full focus:outline-none" />
              <input type="text" placeholder="Your Address" className="border border-gray-300 p-4 w-full focus:outline-none" />
            </div>
            <textarea placeholder="Your Message" rows="6" className="border border-gray-300 p-4 w-full focus:outline-none"></textarea>

            <div className="pt-4">
              <div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
            </div>

            <button type="submit" className="mt-4 bg-green-600 text-white px-8 py-4 text-sm font-semibold hover:bg-green-700 transition uppercase">
              SEND US NOW
            </button>
          </form>
        </div>
      </div>
      <ContactSupport/>

      <Footer />
    </div>
  );
}
