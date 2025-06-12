import React from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = () => {
  return (
    <section className="products-section">
      <h2>Our Products</h2>
      <div className="product-grid">

        <div className="product-card">
          <span className="badge discount">-30%</span>
          <Link to="/product">
            <img src="/Screenshot 2025-06-04 191558.png" alt="Syltherine" />
          </Link>
          <h3>Syltherine</h3>
          <p>Stylish cafe chair</p>
          <div className="price">
            <span className="current">Rp 2.500.000</span>
            <span className="original">Rp 3.500.000</span>
          </div>
        </div>

        <div className="product-card hoverable">
          <img src="https://cdn.decornation.in/wp-content/uploads/2020/07/modern-dining-table-chairs.jpg" alt="Leviosa" />
          <div className="overlay">
            <Link to="/product">
              <button>Add to cart</button>
            </Link>
            <div className="actions">
              <span>Share</span>
              <span>Compare</span>
              <span>Like</span>
            </div>
          </div>
          <h3>Leviosa</h3>
          <p>Stylish cafe chair</p>
          <div className="price">
            <span className="current">Rp 2.500.000</span>
          </div>
        </div>

        <div className="product-card">
          <span className="badge discount">-50%</span>
          <Link to="/product">
            <img src="/third.png" alt="Lolito" />
          </Link>
          <h3>Lolito</h3>
          <p>Luxury big sofa</p>
          <div className="price">
            <span className="current">Rp 7.000.000</span>
            <span className="original">Rp 14.000.000</span>
          </div>
        </div>

        <div className="product-card">
          <span className="badge new">New</span>
          <Link to="/product">
            <img src="/fourth.png" alt="Respira" />
          </Link>
          <h3>Respira</h3>
          <p>Outdoor bar table and stool</p>
          <div className="price">
            <span className="current">Rp 500.000</span>
          </div>
        </div>

        <div className="product-card">
          <Link to="/product">
            <img src="/five.png" alt="Grifo" />
          </Link>
          <h3>Grifo</h3>
          <p>Night lamp</p>
          <div className="price">
            <span className="current">Rp 1.500.000</span>
          </div>
        </div>

        <div className="product-card">
          <span className="badge new">New</span>
          <Link to="/product">
            <img src="/six.png" alt="Muggo" />
          </Link>
          <h3>Muggo</h3>
          <p>Small mug</p>
          <div className="price">
            <span className="current">Rp 150.000</span>
          </div>
        </div>

        <div className="product-card">
          <span className="badge discount">-50%</span>
          <Link to="/product">
            <img src="/seven.png" alt="Pingky" />
          </Link>
          <h3>Pingky</h3>
          <p>Cute bed set</p>
          <div className="price">
            <span className="current">Rp 7.000.000</span>
            <span className="original">Rp 14.000.000</span>
          </div>
        </div>

        <div className="product-card">
          <span className="badge new">New</span>
          <Link to="/product">
            <img src="/eight.png" alt="Potty" />
          </Link>
          <h3>Potty</h3>
          <p>Minimalist flower pot</p>
          <div className="price">
            <span className="current">Rp 500.000</span>
          </div>
        </div>
      </div>

      <div className="product-button">
        <button>Show More</button>
      </div>
    </section>
  );
};

export default ProductGrid;
