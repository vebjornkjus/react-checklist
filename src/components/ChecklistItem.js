// src/components/ChecklistItem.js
import React from 'react';
import './ChecklistItem.css';

function ChecklistItem({ item, toggleItem, removeItem }) {
  return (
    <li className="checklist-item">
      <span
        onClick={toggleItem}
        style={{
          textDecoration: item.completed ? 'line-through' : 'none',
          cursor: 'pointer'
        }}
      >
        {item.text}
      </span>
      <button onClick={removeItem} className="delete-btn">
        Delete
      </button>
    </li>
  );
}

export default ChecklistItem;