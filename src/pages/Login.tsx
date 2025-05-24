import React from "react";
import Header from "../components/Header";
import ContactSupport from "../components/ContactSupport";
import Footer from "../components/Footer";

const Login = () => {
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
        <h1 className="text-4xl font-bold">ACCOUNT LOGIN</h1>
        <p className="text-lg italic mt-2">Home / Account login</p>
      </div>

      <div className="flex justify-center items-center py-16">
        <div className="w-full max-w-md border border-dashed border-gray-300 p-8">
          <h2 className="text-xl font-bold mb-6">LOGIN</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
              >
                LOGIN
              </button>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="keep" className="text-green-600" />
                <label htmlFor="keep" className="text-sm text-gray-600">
                  Keep me logged in!
                </label>
              </div>
            </div>
          </form>

          <div className="flex justify-between mt-6 text-sm">
            <a href="#" className="text-green-600">
              Forgot your password?
            </a>
            <span className="text-gray-600">
              No account?{" "}
              <a href="#" className="text-green-600">
                Create one here.
              </a>
            </span>
          </div>
        </div>
      </div>
        <ContactSupport />
        <Footer />
    </div>
  );
};

export default Login;
