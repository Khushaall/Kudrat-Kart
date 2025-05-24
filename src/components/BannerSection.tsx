import React from "react";

const features = [
  {
    img: "https://kudratkart.com/gocart/themes/theme_new/assets/images/icons/icon1.1.png",
    text: "100% NATURAL",
  },
  {
    img: "https://kudratkart.com/gocart/themes/theme_new/assets/images/icons/icon2.2.png",
    text: "NO CHEMICAL PRESERVATIVES",
  },
  {
    img: "https://kudratkart.com/gocart/themes/theme_new/assets/images/icons/icon4.4.png",
    text: "FOOD SAFETY",
  },
  {
    img: "https://kudratkart.com/gocart/themes/theme_new/assets/images/icons/icon3.3.png",
    text: "100% PURE",
  },
];

const BannerSection: React.FC = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center px-4 py-12">
      <div className="mb-2">
        <img
          src="https://kudratkart.com/gocart/themes/theme_new/assets/images/icons/symbol-02.png"
          alt="Cart Logo"
          className="w-24 h-24"
        />
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">
        WELCOME TO KUDRAT KART
      </h1>

      <div className="grid grid-cols-2 gap-10 md:gap-16 mb-10">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img src={item.img} alt={item.text} className="w-16 h-16 mb-3" />
            <p className="text-base font-semibold text-gray-800 w-32">
              {item.text}
            </p>
          </div>
        ))}
      </div>

      <div className="w-full max-w-xl px-4">
        <img
          src="https://kudratkart.com/gocart/themes/theme_new/assets/images/other-01.jpg"
          alt="Main Product"
          className="w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default BannerSection;
