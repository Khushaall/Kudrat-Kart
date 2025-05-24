import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactSupport from "../components/ContactSupport";

const About = () => {
  return (
    <>
      <Header />

      {/* Hero Section with Background */}
      <div
        className="bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://kudratkart.com/gocart/themes/theme_new/assets/images/bg-07.jpg')",
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">ABOUT US</h1>
          <p className="text-lg italic mt-2">Home / About Us</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-gray-800">
        <h2 className="text-3xl font-bold mb-6">ABOUT US</h2>
        <p className="mb-6 leading-relaxed">
          When it comes to being in Nature’s lap, Kudrat Kart is one such platform
          which never lags behind in being Nature friendly. We are one of the most
          renowned E-Commerce Store and are known for delivering authentic and original
          products. Our dedication and inclination towards achieving 100 percent
          customer satisfaction makes us stand apart in the market. Being in business
          is not just about reaching out to the trust of the respective consumers, it
          is more about working hard by keeping heart at the centre. This is our USP
          wherein whatever we do, whatever products we sell and the kind of
          collaborations we have, we put our heart and soul into it. As our name
          suggests, we believe in being grounded and that gets reflected in our products.
        </p>

        <p className="mb-6 leading-relaxed">
          When you choose us, you will not be disappointed in any way. Our priority to
          purity and authenticity in the selling products makes us achieve optimum
          quality standards. It is essential to consume organic products when it comes
          to food items. Organicity in the quality ensures a better health and a better
          health helps to lead life in a decent way without the prevalence of health
          issues. At Kudrat Kart, we believe and keep the value of “Health is Wealth”
          intact. When we say that the products are organic, we also mean that we ensure
          that they are free of any chemical preservatives and artificial colors which
          are detrimental to health in the long way. This takes us to the stage of safe
          packaging. From the initial stages of packaging to the final ones, we ensure
          that the products are packed in a hygienic environment and in a graded manner.
          From here, we reach the stage of delivery which is again done in the best
          possible manner. Currently, we are catering to the requirements of 26000 pin
          codes and our products are dispatched within the span of 24 hour. This makes us
          very quick and efficient in terms of offering services.
        </p>

        <p className="mb-6 leading-relaxed">
          Our collaboration with Khadi India, Government of India, fssai have made us all
          the more trustworthy and reliable when it comes to natural food products. Our
          slogan “Kudrat Bole toh, Nature Na”, is a kind of a testimony to our brand that
          the name of our enterprise is a kind of a reflection of our inclination towards
          purity, authenticity and freshness. From Almond Oil, Coconut Oil, Honey to
          pickles, mixes, Indian spices, we tend to take care of all the food essentials
          and ingredients which add taste to the food that we consume and also enhance
          the respective lifestyles.
        </p>

        <p className="mb-6 leading-relaxed">
          So, do not wait much. We are here to serve you in the best possible manner. Our
          online portal further makes it easy to get your products at the doorstep. All
          you need to do is to visit our website, browse through our products, select
          what you require and finally place your order. Our prices are affordable and we
          offer the best in the market. Enjoy the sumptuous aroma and quality of our
          products and give treat to your sense of taste and love for food.
        </p>
      </div>

      <ContactSupport />
      <Footer />
    </>
  );
};

export default About;
