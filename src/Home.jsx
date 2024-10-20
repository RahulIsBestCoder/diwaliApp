import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import "./Home.css"

const Home = () => {
    return (
    <div>
      <Header />
      <Hero />
      <Countdown />
      <Features />
      <Gallery />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home

