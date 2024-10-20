import React from 'react';
import ImageBox from './ImageBox';
function Hero() {
  return (
    <section className="hero">
      <ImageBox src='/diwali_banner_design_1158437.png' alt="Diwali Celebration" size="large"/>
      {/* <img src='/diwali_banner_design_1158437.png' alt="Diwali Celebration" className="banner" /> */}
      <h1>Celebrate Diwali with Joy and Prosperity</h1>
      <p>Send greetings, explore festive recipes, and more!</p>
      <button className="hero-cta">Explore Festivities</button>
    </section>
  );
}

export default Hero;
