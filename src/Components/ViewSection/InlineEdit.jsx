/* eslint-disable react/prop-types */
// src/components/InlineEdit.js

import { useState } from 'react';

const InlineEdit = ({ text, onEditText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    onEditText(editedText);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return isEditing ? (
    <input
      type="text"
      value={editedText}
      onChange={handleChange}
      onBlur={handleBlur}
      autoFocus
      style={{
        border: 'none',
        outline: 'none',
        width: '100%',
        fontSize: '1rem',
        padding: '10px 0',
        borderRadius: '5px'
      }}
    />
  ) : (
    <span style={{
       padding: '10px'
      }} onDoubleClick={handleDoubleClick}>{text}</span>
  );
};

export default InlineEdit;
