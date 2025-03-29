// src/App.js
import React, { useState, useEffect } from 'react';
import ChecklistItem from './components/ChecklistItem';
import AddItem from './components/AddItem';
import './App.css';

function App() {
  // Initialize state with an empty list or retrieve from localStorage (advanced)
  const [items, setItems] = useState(() => {
    const savedItems = localStorage.getItem('checklist');
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // Persist the checklist items to localStorage when they change.
  useEffect(() => {
    localStorage.setItem('checklist', JSON.stringify(items));
  }, [items]);

  // Toggle the completed status of an item
  const toggleItem = (index) => {
    setItems(prevItems =>
      prevItems.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Remove an item from the checklist
  const removeItem = (index) => {
    setItems(prevItems => prevItems.filter((_, i) => i !== index));
  };

  // Add a new item to the checklist
  const addItem = (text) => {
    if (text.trim() !== '') {
      setItems(prevItems => [...prevItems, { text, completed: false }]);
    }
  };

  return (
    <div className="app-container">
      <h1>React Checklist App</h1>
      <AddItem addItem={addItem} />
      <ul className="checklist">
        {items.map((item, index) => (
          <ChecklistItem
            key={index}
            item={item}
            toggleItem={() => toggleItem(index)}
            removeItem={() => removeItem(index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;