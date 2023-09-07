import React from 'react';
import './banner.css'; // Import your CSS file for the banner styles
import Closet from './public/images/closet';

const Banner = () => {
  return (
    <div className="banner">
      <img src={closetImageUrl} alt="Open Closet" className="banner-image" />
      <div className="banner-content">
        <h2>Welcome to My Clothing Inventory</h2>
        <p>Discover and manage your clothing collection with ease.</p>
      </div>
    </div>
  );
};

export default Banner;
