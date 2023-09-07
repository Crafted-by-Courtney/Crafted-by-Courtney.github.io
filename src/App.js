import React from 'react';
import './App.css'; // Import your CSS file for global styles
import Navbar from './components/navBar/navBar'; // Import the Navbar component
import Footer from './components/footer/footer'; // Import the Footer component
import Banner from './components/banner/banner'; // Import the Banner component

function App() {
  return (
    <div className="app">
      {/* Include the Navbar component */}
      <Navbar />
      <Banner />

      {/* Your main content goes here */}
      <div className="main-content">
        <h1>Welcome to My Clothing Inventory App</h1>
        {/* Add other components and content here */}
      </div>

      {/* Include the Footer component */}
      <Footer />
    </div>
  );
}

export default App;
