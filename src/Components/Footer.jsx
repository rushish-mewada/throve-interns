import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="Furniro">
              <h3>Furniro.</h3>
              <p>400 University Drive Suite 200 Coral Gables, <br />FL 33134 USA</p>
            </div>
            <div className="links">
              <p>Links</p>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#shop">Shop</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="links">
              <p>Help</p>
              <ul>
                <li><a href="#payment">Payment Options</a></li>
                <li><a href="#returns">Returns</a></li>
                <li><a href="#privacy">Privacy Policies</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Newsletter</h3>
              <div className="newsletter-section">
                <input type="email" className="newsletter-input" placeholder="Enter Your Email Address" />
                <button className="subscribe-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Furniro 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;