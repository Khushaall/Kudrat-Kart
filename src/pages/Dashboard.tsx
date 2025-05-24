import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import BannerSection from '../components/BannerSection'
import ProductSection from '../components/ProductSection'
import WhyChooseUs from '../components/WhyChooseUs'
import TestimonialCarousel from '../components/TestimonialCarousel'
import Footer from '../components/Footer'

const Dashboard = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BannerSection />
        <ProductSection />
        <WhyChooseUs />
        <TestimonialCarousel />
      </main>
      <Footer />
    </>
  )
}

export default Dashboard
