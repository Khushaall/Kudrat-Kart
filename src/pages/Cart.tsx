import React from "react";
import ContactSupport from "../components/ContactSupport";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useCart } from "../context/CartContext";

const CartPage = () => {
    const { cartItems, incrementItem, decrementItem, getTotal } = useCart();

    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50">
                {/* Header Background Banner */}
                <div
                    className="bg-cover bg-center h-64 flex items-center justify-center"
                    style={{
                        backgroundImage:
                            "url('https://kudratkart.com/gocart/themes/theme_new/assets/images/bg-07.jpg')",
                    }}
                >
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white">SHOPPING CART</h1>
                        <p className="text-lg italic text-white mt-2">Home / Shopping Cart</p>
                    </div>
                </div>

                {/* Main Cart Content */}
                <div className="max-w-6xl mx-auto px-4 py-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-800">SHOPPING CART</h2>

                    {/* Table Header */}
                    <div className="grid grid-cols-4 text-left font-semibold text-gray-600 bg-gray-100 py-3 px-4 rounded-t">
                        <div>PRODUCT</div>
                        <div>PRICE</div>
                        <div>QUANTITY</div>
                        <div>TOTAL</div>
                    </div>

                    {/* Cart Items */}
                    {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                            <div key={index} className="grid grid-cols-4 py-4 px-4 border-b bg-white items-center">
                                <div className="flex items-center gap-4">
                                    <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-contain border rounded" />
                                    <div>
                                        <div className="font-semibold text-gray-800">{item.name}</div>
                                        <div className="text-sm text-gray-500">{item.weight}</div>
                                    </div>
                                </div>

                                <div className="text-gray-700">₹{item.price}</div>
                                <div className="flex items-center space-x-3">
                                    <button onClick={() => decrementItem(item)} className="border px-3 py-1 rounded hover:bg-gray-100">-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => incrementItem(item)} className="border px-3 py-1 rounded hover:bg-gray-100">+</button>
                                </div>
                                <div className="text-gray-800 font-semibold">₹{(item.price * item.quantity).toFixed(2)}</div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-10 text-gray-500">Your cart is empty.</div>
                    )}

                    {/* Coupon Section */}
                    {cartItems.length > 0 && (
                        <div className="flex mt-8 gap-4 flex-wrap items-center">
                            <input
                                type="text"
                                placeholder="Coupon Code"
                                className="border border-gray-300 px-4 py-2 rounded w-full sm:w-1/3"
                            />
                            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                                APPLY COUPON
                            </button>
                        </div>
                    )}

                    {/* Cart Totals */}
                    {cartItems.length > 0 && (
                        <div className="mt-12 flex flex-col items-end">
                            <div className="w-full sm:w-1/2 border bg-white p-6 rounded shadow-sm">
                                <h3 className="text-xl font-bold mb-4">CART TOTALS</h3>
                                <div className="flex justify-between border-b py-2 text-gray-700">
                                    <span>Subtotal</span>
                                    <span>₹{getTotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between border-b py-2 text-gray-700">
                                    <span>Shipping</span>
                                    <span>₹360.00</span>
                                </div>
                                <div className="flex justify-between py-2 font-semibold text-green-600 text-lg">
                                    <span>Grand Total (₹)</span>
                                    <span>₹{(getTotal() + 360).toFixed(2)}</span>
                                </div>
                                <button className="mt-6 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
                                    PROCEED TO CHECKOUT
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <ContactSupport />
            <Footer />
        </>
    );
};

export default CartPage;