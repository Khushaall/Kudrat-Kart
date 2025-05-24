import { useEffect, useState } from 'react';

function HeroSection() {
  const slides = [
    {
      title: "ALMOND OIL",
      subtitle: "Welcome to Kudrat Kart",
      description: "Boost your immunity with vitamin E rich natural almond oil",
      image: "https://kudratkart.com/gocart/themes/theme_new/assets/images/bg-slide-03.jpg",
    },
    {
      title: "PURE HONEY",
      subtitle: "Welcome to Kudrat Kart",
      description: "Get healthy and glowing skin with high-quality pure honey",
      image: "https://kudratkart.com/gocart/themes/theme_new/assets/images/bg-slide-01.jpg",
    },
    {
      title: "COCONUT OIL",
      subtitle: "Welcome to Kudrat Kart",
      description: "Keep your heart and life healthy with cold-pressed extra virgin coconut oil",
      image: "https://kudratkart.com/gocart/themes/theme_new/assets/images/bg-slide-02.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setTypedText('');
    setCharIndex(0);
    setStartTyping(true);
  }, [currentSlide]);

  useEffect(() => {
    if (!startTyping) return;
    const currentTitle = slides[currentSlide].title;
    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + currentTitle[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, startTyping]);

  const { subtitle, description, image } = slides[currentSlide];

  return (
    <>
      <section className="relative w-screen h-screen flex items-start justify-start overflow-hidden bg-[#faf8f6]">
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 z-20 overflow-hidden">
          <div
            key={currentSlide}
            className="h-full bg-gray-400 animate-progress"
          ></div>
        </div>

        <img
          src={image}
          alt="Hero"
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000"
        />

        <div className="relative z-10 ml-[10vw] max-w-xl pt-24 md:pt-32 overflow-hidden">
          <div
            key={`subtitle-${currentSlide}`}
            className="text-xl md:text-2xl font-dancing-script mb-4 text-black animate-fadeUp delay-[500ms] opacity-0"
          >
            {subtitle}
          </div>
          <h1 className="text-4xl md:text-5xl font-montserrat font-bold mb-6 text-black">
            {typedText}
          </h1>
          <p
            key={`desc-${currentSlide}`}
            className="text-base font-montserrat text-gray-600 mb-8 animate-fadeUp delay-[1500ms] opacity-0"
          >
            {description}
          </p>
          <a
            key={`btn-${currentSlide}`}
            href="#shop"
            className="inline-block bg-green-600 text-white px-6 py-2 rounded-sm text-sm font-montserrat font-semibold shadow hover:bg-green-700 transition-colors duration-300 animate-fadeUp delay-[2000ms] opacity-0"
          >
            SHOP NOW
          </a>
        </div>
      </section>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400&family=Montserrat:wght@400;700&display=swap');

          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          .animate-progress {
            animation: progress 8s linear forwards;
          }

          .font-dancing-script {
            font-family: 'Dancing Script', cursive;
          }
          .font-montserrat {
            font-family: 'Montserrat', sans-serif;
          }

          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeUp {
            animation: fadeUp 1.2s ease-out forwards;
          }

          .delay-\\[500ms\\] { animation-delay: 500ms; }
          .delay-\\[1000ms\\] { animation-delay: 1000ms; }
          .delay-\\[1500ms\\] { animation-delay: 1500ms; }
          .delay-\\[2000ms\\] { animation-delay: 2000ms; }
        `}
      </style>
    </>
  );
}

export default HeroSection;
