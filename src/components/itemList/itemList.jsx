import React from 'react';
import './itemList.css'; // Import the CSS for ItemList

function ItemList({ items, onDelete }) {
    console.log(items)
  return (
    <div>
      <h2>Item List</h2>
        {/* <ul>
        {items.map((item, index) => (
          <li key={index}>
            
            <span>{item.name}</span>
            <span>{item.description}</span>
            <span>{item.category}</span>
            <span>{item.color}</span>
            <span>{item.size}</span>
             
            <img src={item.image} alt={item.name} />
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
        </ul>  */}
    </div>
  );
}

export default ItemList;
