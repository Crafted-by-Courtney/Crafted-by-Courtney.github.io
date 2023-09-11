import React from 'react';
import './banner.css'; // Import your CSS file for the banner styles


const Banner = () => {
   return (
     <div className="banner">
       <img src= 'https://www.closetsbydesign.com/wp-content/uploads/2020/09/closet-trends-1.jpg' alt="Open Closet" className="banner-image" />
       <div className="banner-content">
         <h2>Welcome to My Clothing Inventory</h2>
         <p>Discover and manage your clothing collection with ease.</p>
       </div>
     </div>
   );
 };

 export default Banner;
