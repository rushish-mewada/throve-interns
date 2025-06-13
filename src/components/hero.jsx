import React from "react";
import heroImage from "../images/hero1.jpg"; // Make sure path is correct

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroImage} alt="Hero" className="hero-bg" />
      <div className="hero-content">
        <p className="tagline">New Arrival</p>
        <h1 className="hero-title">
          Discover Our <br /> New Collection
        </h1>
        <p className="hero-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="hero-btn">BUY NOW</button>
      </div>
    </section>
  );
};

export default Hero;
