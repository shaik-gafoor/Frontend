// import React from "react";
// import "./Footer.css";
// import { assets } from "../../assets/assets";

// const Footer = () => {
//   return (
//     <div className="footer" id="footer">
//       <div className="footer-content">
//         <div className="footer-content-left">
//           <img src={assets.logo} alt="" className="footer-logo" />
//           <p>THis is the footer page for my Foodstop webpage</p>
//           <div className="footer-social-icons">
//             <img src={assets.facebook_icon} alt="" />
//             <img src={assets.twitter_icon} alt="" />
//             <img src={assets.facebook_icon} alt="" />
//           </div>
//         </div>
//         <div className="footer-content-center">
//           <h2>COMPANY</h2>
//           <ul>
//             <li>Home</li>
//             <li>About us</li>
//             <li>Delivery</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>
//         <div className="footer-content-right">
//           <h2>GET IN TOUCH</h2>
//           <ul>
//             <li>7+91 7386946555</li>
//             <li>gafoor7898@gmail.com</li>
//           </ul>
//         </div>
//       </div>
//       <hr />
//       <p className="footer-copyright">
//         Copyright 2025 @ FoodSport.com -All Right Reserved
//       </p>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-content-left">
            <div>
              <img
                src={assets.logo}
                alt="FoodStop Logo"
                className="footer-logo"
              />
              <p className="footer-description">
                Discover delicious meals from your favorite restaurants. Fast
                delivery, fresh ingredients, and exceptional taste delivered
                right to your door.
              </p>
            </div>

            {/* Social Icons */}
            <div className="footer-social-icons">
              <a href="#" className="social-icon" aria-label="Facebook">
                <img src={assets.facebook_icon} alt="Facebook" />
              </a>
              <a href="#" className="social-icon" aria-label="Twitter">
                <img src={assets.twitter_icon} alt="Twitter" />
              </a>
              <a href="#" className="social-icon" aria-label="Instagram">
                <img src={assets.facebook_icon} alt="Instagram" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="footer-content-center">
            <h3 className="footer-section-title">Company</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Delivery</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-content-right">
            <h3 className="footer-section-title">Get in Touch</h3>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <div className="contact-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="contact-text">+91 7386946555</span>
              </li>
              <li className="footer-contact-item">
                <div className="contact-icon">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 2.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="contact-text">gafoor7898@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="footer-newsletter">
          <div className="newsletter-content">
            <div className="newsletter-info">
              <h4>Stay Updated</h4>
              <p>Subscribe to get special offers and updates</p>
            </div>
            <div className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="newsletter-input"
              />
              <button className="newsletter-button">Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">
            © 2025 FoodStop.com - All Rights Reserved
          </p>
          <ul className="footer-legal-links">
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
