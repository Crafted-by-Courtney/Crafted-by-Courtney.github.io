import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Wardrobe Wiz App</p>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
