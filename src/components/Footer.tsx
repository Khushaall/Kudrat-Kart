import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f9f7f2] text-gray-700 text-base pt-16">
      <div className="max-w-7xl mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
        {/* Distribution Centers */}
        <div>
          <h3 className="text-xl font-semibold mb-8">Our Distribution Centers</h3>
          <p className="flex items-start mb-4 leading-relaxed">
            <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="location" className="w-5 h-5 mr-3 mt-1" />
            Modern Agro, Village Phusgarh, Karnal, Haryana - 132001<br />
            (Mb. +91 - 8685020202)
          </p>
          <p className="flex items-center mb-8">
            <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="email" className="w-5 h-5 mr-3" />
            info@kudratkart.com
          </p>
          {/* <div className="mt-8">
            <h4 className="font-semibold mb-8">In Association With</h4>
            <div className="flex items-center gap-5">
              <img src="https://www.khudikibaat.com/assets/images/kvic.png" alt="Khadi" className="w-14 h-auto" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Logo_of_Indian_Government.svg" alt="India Govt" className="w-14 h-auto" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/FSSAI_logo.svg" alt="FSSAI" className="w-20 h-auto" />
            </div>
          </div> */}
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Education</h3>
          <ul className="space-y-4">
            <li><a href="#" className="hover:underline">About The Honey Bee</a></li>
            <li><a href="#" className="hover:underline">Bee And The Environment</a></li>
            <li><a href="#" className="hover:underline">How Bees Make Honey</a></li>
            <li><a href="#" className="hover:underline">From Hive To Home</a></li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Other Links</h3>
          <ul className="space-y-4">
            <li><a href="#" className="hover:underline">My Account</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Our Blog</a></li>
          </ul>
          <div className="flex gap-5 mt-6">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 h-6" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-6 h-6" /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 py-6 px-4 md:px-10 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="mb-3 md:mb-0 text-center md:text-left">
          Copyright © 2020 Modern Daily Needs Pvt. Ltd. Developed By Modern Streaming Solutions.
        </p>
        <div className="flex gap-3">
          <img src="https://cdn-icons-png.flaticon.com/512/196/196561.png" alt="MasterCard" className="w-8 h-auto" />
          <img src="https://cdn-icons-png.flaticon.com/512/196/196565.png" alt="PayPal" className="w-8 h-auto" />
          <img src="https://cdn-icons-png.flaticon.com/512/196/196578.png" alt="Visa" className="w-8 h-auto" />
          <img src="https://cdn-icons-png.flaticon.com/512/196/196566.png" alt="Amex" className="w-8 h-auto" />
          <img src="https://cdn-icons-png.flaticon.com/512/196/196567.png" alt="Discover" className="w-8 h-auto" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
