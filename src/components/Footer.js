import React from "react";
const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-section">
                <h3>Furniro</h3>
                <p>400 university Drive suite 200 <br />coral Gables, FL 33134 USA</p>
            </div>
            <div className="footer-section">
                <h4>links</h4>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Helps</h4>
                <ul>
                    <li><a href="#">Payment Options</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Privacy Policies</a></li>
                </ul>
            </div>
            <div className="footer-section">
                <h4>Newsletter</h4>
                <u><p>Enter your email address</p></u>
                <h5>SUBSCRIBE</h5>
            </div>
        </footer>
    );
};
export default Footer;