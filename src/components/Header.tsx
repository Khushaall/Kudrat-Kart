import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { cartItems } = useCart();

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest("#login-dropdown")) {
        setIsLoginOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between px-8 border-b bg-white transition-all duration-300 ${isScrolled ? "py-2 shadow-md" : "py-4"}`}
    >
      <div className="flex items-center space-x-3">
        <img
          src="https://kudratkart.com/gocart/themes/theme_new/assets/images/logo.png"
          alt="KudratKart Logo"
          className={`transition-all duration-300 ${isScrolled ? "h-9" : "h-12"}`}
        />
      </div>

      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-8 font-semibold text-lg text-gray-800">
          <li><a href="/" className="hover:text-green-600">HOME</a></li>
          <li><a href="/shop" className="hover:text-green-600">SHOP</a></li>
          <li><a href="/blog" className="hover:text-green-600">BLOG</a></li>
          <li><a href="/about" className="hover:text-green-600">ABOUT US</a></li>
          <li><a href="/contact" className="hover:text-green-600">CONTACT US</a></li>

          <li className="relative group text-gray-800 text-lg font-semibold hover:text-green-600 transition-colors duration-200">
            <div className="cursor-pointer">LOGIN</div>
            <div
              id="login-dropdown"
              className="absolute top-full left-0 mt-1 w-44 bg-white shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
            >
              <ul className="py-2 text-[16px] text-gray-800">
                <li>
                  <a href="/register" className="block px-4 py-2 hover:bg-gray-100">
                    Register
                  </a>
                </li>
                <li>
                  <a href="/login" className="block px-4 py-2 hover:bg-gray-100 border-t">
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-6">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        <Link to="/cart">
          <div className="relative cursor-pointer">
            <svg className="w-7 h-7 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            {totalCount > 0 ? (
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full px-1.5">
                {totalCount}
              </span>
            ) : (
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full px-1.5">
               0
              </span>
            )}
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
