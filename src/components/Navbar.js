import React from "react";

const Navbar = () => {
    return(
        <header className="navbar">
            <div className="logo-section">
                <img src="image.png" width="50" height="50"alt="logo" />
                <h1><b>Furniro</b></h1>
            </div>
            <nav className="nav-links">
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>
            <div className="icons">
                <span role="img" aria-label="user">👤</span>
                <span role="img" aria-label="user">🔍</span>
                <span role="img" aria-label="user">❤</span>
                <span role="img" aria-label="user">🛒</span>
            </div>
        </header>
    );
};
export default Navbar;