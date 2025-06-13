import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Categories from "../components/categories";
import Products from "../components/products";
import Inspiration from "../components/inspiration";
import Instagram from "../components/instagram";
import Footer from "../components/footer";
import './home.css'; // ✅ CSS linked here

const Main = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Products />
      <Inspiration />
      <Instagram />
      <Footer />

      {/* Link to Product Page */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link
          to="/product"
          className="product-link"
        >
          Go to Product Page
        </Link>
      </div>
    </div>
  );
};

export default Main;
