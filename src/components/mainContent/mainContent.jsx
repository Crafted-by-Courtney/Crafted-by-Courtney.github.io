import React from 'react';
import ItemList from '../itemList/itemList'; // Import your InventoryList component
import ItemForm from '../itemForm/itemForm'; // Import your ItemDetails component
import AddNewItemForm from '../addNewItemForm/addNewItemForm'; // Import your AddNewItemForm component
import './mainContent.css'; // Import your CSS file for the main content styles

const MainContent = () => {
  return (
    <div className="main-content">
      <h1 className="main-heading">Clothing Inventory</h1>

      <div className="content-container">
        {/* Inventory List */}
        <div className="item-list">
          <h2 className="section-heading">Inventory List</h2>
          <ItemList />
        </div>

        {/* Item Details */}
        <div className="item-form">
          <h2 className="section-heading">Item Details</h2>
          <ItemForm />
        </div>

        {/* Add New Item Form */}
        <div className="add-item-form">
          <h2 className="section-heading">Add New Item</h2>
          <AddNewItemForm />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
