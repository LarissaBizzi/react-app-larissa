import React from 'react';
import HeaderElement from '../components/HeaderElement';
import HeroSection from '../components/HeroSection';
import Specials from '../components/Specials';
import AboutElement from '../components/AboutElement';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <HeaderElement />
      <HeroSection />
      <Specials />
      <AboutElement />
      <Testimonials />
      <Footer />
    </>
  )
}