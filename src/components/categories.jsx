import React from "react";
import diningImg from "../images/dining.png";
import livingImg from "../images/living.png";
import bedroomImg from "../images/bedroom.png";

const Categories = () => {
  return (
    <section className="categories">
      <div className="categories-header">
        <h2>Browse The Range</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="categories-grid">
        <div className="category-card">
          <img src={diningImg} alt="Dining" />
          <h4>Dining</h4>
        </div>
        <div className="category-card">
          <img src={livingImg} alt="Living" />
          <h4>Living</h4>
        </div>
        <div className="category-card">
          <img src={bedroomImg} alt="Bedroom" />
          <h4>Bedroom</h4>
        </div>
      </div>
    </section>
  );
};

export default Categories;
