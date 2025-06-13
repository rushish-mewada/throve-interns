import React from "react";
import logo from "../images/logo.svg";
import searchIcon from "../images/search.svg";
import heartIcon from "../images/heart.svg";
import cartIcon from "../images/cart.svg";


const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="Furniro Logo" className="logo-img" />
          <span className="logo-text">Furniro</span>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="nav-links">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>

        {/* Icons Section */}
        <div className="icons">
          <img src={searchIcon} alt="Search" />
          <img src={heartIcon} alt="Wishlist" />
          <img src={cartIcon} alt="Cart" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
