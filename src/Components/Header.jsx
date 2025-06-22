import React from 'react';
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

const Header = () => {
  return (
    <header>
      <div id="navbar">
        <Link to="/" id="logo">Furniro</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="nav-icons">
          <FaUser className="icon" />
          <FaSearch className="icon" />
          <FaHeart className="icon" />
          <FaShoppingCart className="icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;