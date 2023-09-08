import React, { useState } from 'react';

const AddNewItemForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new item object with the entered data
    const newItem = {
      name: itemName,
      description: itemDescription,
    };

    // Call the onAddItem callback to add the new item
    onAddItem(newItem);

    // Clear the form fields
    setItemName('');
    setItemDescription('');
  };

  return (
    <div className="add-new-item-form">
      <h3>Add a New Item</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="itemDescription">Item Description:</label>
          <textarea
            id="itemDescription"
            value={itemDescription}
            onChange={(e) => setItemDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddNewItemForm;
