/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// src/components/InlineEdit.js

import { useState } from "react";

const InlineEdit = ({ text, onEditText }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(text);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    // while(editedText.length <= 3){
    const formattedText = editedText;
    // .split(' ') // Split text into individual strings // Filter strings with 1 to 3 characters
    // .map(str => `#${str}`) // Add "#" to each string
    // .join(' '); // Join strings back together with spaces
    onEditText(editedText);
    // }
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
      className="dark:text-gray-800 dark:bg-white"
      style={{
        border: "none",
        outline: "none",
        width: "100%",
        fontSize: "1rem",
        padding: "10px 0",
        borderRadius: "5px",
      }}
    />
  ) : (
    <span
      className="dark:text-gray-800 dark:bg-white"
      style={{
        padding: "10px",
      }}
      onDoubleClick={handleDoubleClick}
    >
      {text}
    </span>
  );
};

export default InlineEdit;
