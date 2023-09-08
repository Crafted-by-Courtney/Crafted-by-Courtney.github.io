import React, { useState } from 'react';
import './itemForm.css'; // Import the CSS for ItemForm

function ItemForm({ onSave }) {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemColor, setItemColor] = useState('');
  const [itemSize, setItemSize] = useState('');
  const [itemImage, setItemImage] = useState('');

  const handleSave = () => {
    // Create an item object with the form data
    const newItem = {
      name: itemName,
      description: itemDescription,
      category: itemCategory,
      color: itemColor,
      size: itemSize,
      image: itemImage,
    };

    // Call the onSave prop to save the item
    onSave(newItem);

    // Clear the form fields
    setItemName('');
    setItemDescription('');
    setItemCategory('');
    setItemColor('');
    setItemSize('');
    setItemImage('');
  };

  return (
    <div>
      <h2>Add/Edit Item</h2>
      <form>
        {/* Form fields for item details */}
        {/* add input fields for name, description, category, color, size, and image upload here */}
        {/* bind the input values to the state variables */}
        {/* Add event handlers to update the state as the user types */}

        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
}

export default ItemForm;
