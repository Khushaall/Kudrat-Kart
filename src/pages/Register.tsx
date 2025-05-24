import React from "react";
import Header from "../components/Header";
import ContactSupport from "../components/ContactSupport";
import Footer from "../components/Footer";

const Register = () => {
  return (
    <div className="w-full">
      <Header />
      <div
        className="w-full h-64 flex flex-col justify-center items-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://kudratkart.com/gocart/themes/theme_new/assets/images/bg-07.jpg')",
        }}
      >
        <h1 className="text-4xl font-bold">CREATE NEW ACCOUNT</h1>
        <p className="text-lg italic mt-2">Home / Register</p>
      </div>

      <div className="flex justify-center items-center py-16">
        <div className="w-full max-w-lg border border-dashed border-gray-300 p-8">
          <h2 className="text-xl font-bold mb-6">CREATE NEW ACCOUNT</h2>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="subscribe" className="text-green-600" />
              <label htmlFor="subscribe" className="text-sm text-gray-600">
                Subscribe to our email list
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 mt-4 rounded hover:bg-green-700"
            >
              REGISTER
            </button>
          </form>
        </div>
      </div>

      <ContactSupport />
      <Footer />
    </div>
  );
};

export default Register;
