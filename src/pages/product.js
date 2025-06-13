import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./Product.css";


import s3 from "../images/s3.jpg";
import s2 from "../images/s2.jpg";
import s4 from "../images/s4.jpg";
import mainSofa from "../images/s1.jpg";
import related1 from "../images/s2.jpg";
import related2 from "../images/s5.jpg";
import related3 from "../images/p3.jpg";
import related4 from "../images/p2.jpg";
import descImg1 from "../images/b1.png";
import descImg2 from "../images/b2.png";


const ProductPage = () => {
  const [activeTab, setActiveTab] = useState("description");

  const renderTabContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <>
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active
              stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords,
              and takes the show on the road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled
              engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn
              is a compact, stout-hearted hero with a well-balanced audio which boasts a clear
              midrange and extended highs for a sound that is both articulate and pronounced. The
              analogue knobs allow you to fine tune the controls to your personal preferences while
              the guitar-influenced leather strap enables easy and stylish travel.
            </p>

            <div className="description-images">
              <div className="img-box">
                <img src={descImg1} alt="sofa 1" />
              </div>
              <div className="img-box">
                <img src={descImg2} alt="sofa 2" />
              </div>
            </div>
          </>
        );
      case "additional":
        return <p>Here is some additional information about the product.</p>;
      case "reviews":
        return <p>Here are some reviews from our customers.</p>;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />

      <div className="breadcrumbs">
        <p>Home &gt; Shop &gt; Asgaard Sofa</p>
      </div>

      <div className="product-page">
        <div className="product-images">
          <div className="thumbnails">
            <img src={s3} alt="thumb" />
            <img src={s2} alt="thumb" />
            <img src={s4} alt="thumb" />
          </div>
          <div className="main-image">
            <img src={mainSofa} alt="Asgaard Sofa" />
          </div>
        </div>

        <div className="product-details">
          <h2>Asgaard sofa</h2>
          <p className="price">Rs. 250,000.00</p>

          <div className="ratings">
            ⭐⭐⭐⭐½ &nbsp;|&nbsp; <span>5 Customer Review</span>
          </div>

          <p className="desc">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
            stout-hearted hero with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound.
          </p>

          <div className="size-select">
            <span>Size</span>
            <div style={{ display: "flex", gap: "10px" }}>
              <button className="size-btn">L</button>
              <button className="size-btn">XL</button>
              <button className="size-btn">XS</button>
            </div>
          </div>

          <div className="color-select">
            <span>Color</span>
            <div className="color-buttons">
              <button className="color purple"></button>
              <button className="color yellow"></button>
              <button className="color brown"></button>
            </div>
          </div>

          <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
            <div className="quantity-selector">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className="cart">Add To Cart</button>
            <button className="compare">+ Compare</button>
          </div>

          <div className="product-meta" style={{ marginTop: "30px" }}>
            <p><strong>SKU</strong> : SS001</p>
            <p><strong>Category</strong> : Sofas</p>
            <p><strong>Tags</strong> : Sofa, Chair, Home, Shop</p>
            <p><strong>Share</strong> :
              &nbsp;
              <i className="fab fa-facebook-f"></i>
              &nbsp;
              <i className="fab fa-linkedin-in"></i>
              &nbsp;
              <i className="fab fa-twitter"></i>
            </p>
          </div>
        </div>
      </div>

      <div className="tabs">
        <button className={activeTab === "description" ? "active" : ""} onClick={() => setActiveTab("description")}>Description</button>
        <button className={activeTab === "additional" ? "active" : ""} onClick={() => setActiveTab("additional")}>Additional Information</button>
        <button className={activeTab === "reviews" ? "active" : ""} onClick={() => setActiveTab("reviews")}>Reviews [5]</button>
      </div>

      <div className="tab-content">
        {renderTabContent()}
      </div>

      <div className="related-section">
        <h3>Related Products</h3>
        <div className="related-products">
          <div className="product-card">
            <img src={related1} alt="related" />
            <p className="title">Syltherine</p>
            <p>Rs. 250,000.00</p>
          </div>
          <div className="product-card">
            <img src={related2} alt="related" />
            <p className="title">Leviosa</p>
            <p>Rs. 200,000.00</p>
          </div>
          <div className="product-card">
            <img src={related3} alt="related" />
            <p className="title">Lattice</p>
            <p>Rs. 300,000.00</p>
          </div>
          <div className="product-card">
            <img src={related4} alt="related" />
            <p className="title">Respira</p>
            <p>Rs. 450,000.00</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProductPage;
