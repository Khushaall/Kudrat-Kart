import React, { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Dr. Harmeet Kaur, Ambala",
    image: "https://kudratkart.com/gocart/themes/theme_new/assets/images/testimonial.jpg",
    text: "I tried Kudrat kart for the first time after a recommendation from my friend. The best part is superfast delivery. The prices in most cases are less than market prices.",
  },
  {
    name: "Sharon Fernandes, Mumbai",
    image: "https://kudratkart.com/gocart/themes/theme_new/assets/images/testimonial.jpg",
    text: "Kudrat Kart is the perfect example of smooth delivery of well ranged spices right at your service. The process of delivery was very quick and efficient.",
  },
  {
    name: "Rakesh Sharma, Delhi",
    image: "https://kudratkart.com/gocart/themes/theme_new/assets/images/testimonial.jpg",
    text: "Amazing service, the spices I ordered were fresh and the delivery was seamless. Will order again!",
  },
  {
    name: "Meena Joshi, Pune",
    image: "https://kudratkart.com/gocart/themes/theme_new/assets/images/testimonial.jpg",
    text: "Loved the packaging and quality. Prices are budget-friendly and totally worth it.",
  },
  {
    name: "Anita Singh, Lucknow",
    image: "https://kudratkart.com/gocart/themes/theme_new/assets/images/testimonial.jpg",
    text: "Smooth process and on-time delivery. The aroma of spices reminded me of home!",
  },
  {
    name: "Vinay Rao, Bangalore",
    image: "https://kudratkart.com/gocart/themes/theme_new/assets/images/testimonial.jpg",
    text: "Prompt customer support and fast delivery. Highly recommend for quality groceries.",
  },
  {
    name: "Kiran Patel, Ahmedabad",
    image: "https://kudratkart.com/gocart/themes/theme_new/assets/images/testimonial.jpg",
    text: "My go-to place for authentic spices and herbs. Trusted source!",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[index];

  return (
    <div className="bg-[#E2E6E3] min-h-[80vh] flex flex-col justify-center items-center text-center px-4">
      <div className="transition-all duration-700 ease-in-out animate-fadeInUp">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-2 border-green-600 p-2 bg-[#E2E6E3]"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{testimonial.name}</h2>
        <div className="text-yellow-400 text-xl mb-4">⭐⭐⭐⭐⭐</div>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">{testimonial.text}</p>
      </div>

      {/* Dot Indicator */}
      <div className="flex justify-center items-center mt-10 gap-3">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`h-[3px] w-6 rounded-sm transition-all duration-300 ${
              i === index ? 'bg-green-600 w-6' : 'bg-gray-300 w-6 opacity-60'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
