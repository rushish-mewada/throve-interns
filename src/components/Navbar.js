import React from "react";

const Navbar = () => {
    return(
        <header className="navbar">
            <div className="logo-section">
                <img src="image.png" width="50" height="50"alt="logo" />
                <h1><b>Furniro</b></h1>
            </div>
            <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
            <div className="nav-icons">
                <span role="img" aria-label="user">👤</span>
                <span role="img" aria-label="user">🔍</span>
                <span role="img" aria-label="user">❤</span>
                <span role="img" aria-label="user">🛒</span>
            </div>
        </header>
    );
};
export default Navbar;