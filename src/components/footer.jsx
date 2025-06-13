import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Info */}
        <div className="footer-brand">
          <h2>Furniro.</h2>
          <p>
            400 University Drive Suite 200 Coral <br />
            Gables, <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4>Links</h4>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-help">
          <h4>Help</h4>
          <ul>
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>Newsletter</h4>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter Your Email Address"
            />
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>

      <hr />
      <div className="footer-bottom">
        <p>2023 furniro. All rights reserved</p>
      </div>
    </footer>
    
  );
};

export default Footer;
