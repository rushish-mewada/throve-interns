import React from "react";
import collageImg from "../images/ff.png"; // rename uploaded image accordingly

const FurniroFurniture = () => {
  return (
    <section className="furniro-section">
      <div className="furniro-header">
        <p>Share your setup with</p>
        <h2>#FurniroFurniture</h2>
      </div>
      <div className="furniro-collage">
        <img src={collageImg} alt="Furniro Furniture Collage" />
      </div>
    </section>
  );
};

export default FurniroFurniture;
