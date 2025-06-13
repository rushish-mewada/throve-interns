import React from "react";
import room1 from "../images/i2.jpg"; // move images to src/assets
import room2 from "../images/e1.jpg";

const Inspiration = () => {
  return (
    <section className="inspiration-section">
      <div className="inspiration-content">
        <h2>50+ Beautiful rooms inspiration</h2>
        <p>
          Our designer already made a lot of beautiful prototype of rooms that inspire you
        </p>
        <button className="explore-btn">Explore More</button>
      </div>

      <div className="inspiration-slider">
        <div className="main-slide">
          <img src={room1} alt="Room Inspiration 1" />
          <div className="slide-caption">
            <span>01 — Bed Room</span>
            <h3>Inner Peace</h3>
            <button className="slide-btn">→</button>
          </div>
        </div>

        <div className="side-slide">
          <img src={room2} alt="Room Inspiration 2" />
          <button className="arrow-btn">›</button>
        </div>

        <div className="slider-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
};

export default Inspiration;
