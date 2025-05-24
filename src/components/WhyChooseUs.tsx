import React from "react";

const features = [
  {
    icon: "https://kudratkart.com/gocart/themes/theme_new/assets/images/icons/symbol-15.png",
    title: "NATURAL",
    description:
      "All the products sold here are absolutely natural and free from any chemical preservatives or additives.",
  },
  {
    icon: "https://kudratkart.com/gocart/themes/theme_new/assets/images/icons/symbol-16.png",
    title: "FOOD SAFETY",
    description:
      "From Contents to Packing we use only best in class products. All our products are hygienically packed in hygienic environment in food grade packing.",
  },
  {
    icon: "https://kudratkart.com/gocart/themes/theme_new/assets/images/icons/symbol-21-1.png",
    title: "PURE",
    description:
      "We make sure products sold here are 100% pure. This is achieved by controlling the quality standards at production lines of the companies we work with.",
  },
  {
    icon: "https://kudratkart.com/gocart/themes/theme_new/assets/images/khadi_symbol.png",
    title: "KHADI GRAM UDHYOG",
    description:
      "We specifically work with the units managed by khadi Gram Udhyog and producing quality stuff.",
  },
  {
    icon: "https://kudratkart.com/gocart/themes/theme_new/assets/images/icons/symbol-17.png",
    title: "DELIVERY",
    description:
      "Delivering to 26000 pin codes, all our products are dispatched within 24 hrs",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-[#fdfcf8] w-full h-full min-h-screen py-16 px-6 md:px-20 flex flex-col md:flex-row items-center justify-center">
      <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
        <img
          src="https://kudratkart.com/gocart/themes/theme_new/assets/images/other-08.jpg"
          alt="Farmer"
          className="w-[300px] md:w-[400px] lg:w-[450px] object-contain"
        />
      </div>

      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold text-center md:text-left mb-4">WHY CHOOSE US</h2>
        <p className="text-gray-700 text-center md:text-left mb-10 max-w-xl">
          We are not any other E- Commerce store. We have very stringent guidelines when we choose to work with any company. Before on-boarding any partner we make sure their production lines stick to our standards and products are genuine and they have all the necessary approvals in place.
        </p>

        <div className="space-y-8">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-5">
              <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain mt-1" />
              <div>
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-gray-700 text-sm md:text-base max-w-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;