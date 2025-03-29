// src/components/AddItem.js
import React, { useState } from 'react';
import './AddItem.css';

function AddItem({ addItem }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(inputValue);
    setInputValue(''); // Clear the input field after adding
  };

  return (
    <form onSubmit={handleSubmit} className="add-item-form">
      <input
        type="text"
        placeholder="Enter new task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddItem;