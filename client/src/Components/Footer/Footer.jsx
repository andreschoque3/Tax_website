import React from 'react';
import './Footer.css';
import footer_image from './Images/footer-img.png';


function Footer() {
  return (
    <footer className="footer">
    <div className="container">
      <div className="top">
        <p>
          © 2024 Tax Consultants of <br /> North America
        </p>
        <ul>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Accessibility</a>
          </li>
          <li>
            <a href="#">Privacy Statement</a>
          </li>
        </ul>
        <div className="social-brands">
          <a href="https://facebook.com" aria-label="Facebook">
            <i className="fa-brands fa-square-facebook"></i>
          </a>
          <a href="https://tiktok.com" aria-label="TikTok">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://x.com" aria-label="X (Twitter)">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        
        <img src={footer_image} alt="Footer Illustration" />
      </div>
    </div>
  </footer>
);
};

export default Footer;