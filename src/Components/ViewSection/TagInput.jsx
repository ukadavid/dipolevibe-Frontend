import React, { useState, useEffect } from 'react';
import { MdOutlineCancel } from 'react-icons/md';

function TagInput({ tag, setTag, buttons, setButtons, hasMinimumTag, setMinimumTagError }) {
  const [buttonText, setButtonText] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [tagLimitExceeded, setTagLimitExceeded] = useState(false);
  const [duplicateTagError, setDuplicateTagError] = useState(false);
  const [hasAtLeastOneTag, setHasAtLeastOneTag] = useState(false);

  const handleTextInputChange = (e) => {
    setButtonText(e.target.value);
    setTagLimitExceeded(false); // Reset the tag limit message
    setDuplicateTagError(false); // Reset the duplicate tag error
  };

  const createButton = (e) => {
    e.preventDefault(); // Prevent the form submission

    if (buttonText.trim() === '') {
      alert('Please enter some text for the button.');
      return;
    }

    setMinimumTagError(false);

    if (buttons.length >= 3) {
      setTagLimitExceeded(true); // Set the tag limit message
      return;
    }

    if (buttons.includes(buttonText)) {
      setDuplicateTagError(true); // Set the duplicate tag error
      return;
    }

    // Add the new button to the list of buttons
    setButtons([...buttons, buttonText]);
    setTag([...tag, buttonText]);

    // Clear the input field after creating the button
    setButtonText('');
    setHasAtLeastOneTag(true); // At least one tag is entered

    // Exit edit mode
    setIsEditing(false);
  };

  const removeButton = (index) => {
    const newButtons = [...buttons];
    newButtons.splice(index, 1);
    const newTag = [...tag];
    newTag.splice(index, 1);
    setButtons(newButtons);
    setTag(newTag);
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  // Handle input blur (losing focus)
  const handleInputBlur = () => {
    if (!hasAtLeastOneTag && buttonText.trim() !== '') {
      setHasAtLeastOneTag(true);
    }
    setIsEditing(false);
  };

  useEffect(() => {
    // Check if at least one tag is entered
    if (buttons.length === 0) {
      setHasAtLeastOneTag(false);
    }
  }, [buttons]);

  return isEditing ? (
    <div>
      <div id="button-container" className='flex'>
        {buttons.map((buttonText, index) => (
          <div key={index} className="tag-button flex items-center mr-2">
            {buttonText}
            <span onClick={() => removeButton(index)} className="text-red-600">
              <MdOutlineCancel />
            </span>
          </div>
        ))}
      </div>
      <div id="input-container">
        <form id="input-form" onSubmit={createButton}>
          <input
            type="text"
            id="text-input"
            placeholder="Enter HashTag"
            value={buttonText}
            onChange={handleTextInputChange}
            onBlur={handleInputBlur} // Handle blur event
            className="outline-0"
            autoComplete="off"
          />
          {tagLimitExceeded && (
            <p className="text-red-600 text-xs">You can only create a maximum of 3 tags.</p>
          )}
          {duplicateTagError && (
            <p className="text-red-600 text-xs">Duplicate tag. Please enter a different tag.</p>
          )}
        </form>
      </div>
    </div>
  ) : (
    <span style={{ padding: '10px' }} onDoubleClick={handleDoubleClick}>
      {hasAtLeastOneTag ? 
         setIsEditing(true) : 
      <>
         Double-click to add tags
         {hasMinimumTag && (
          <p className="text-red-600 text-xs">
            You must enter at least one tag.
          </p>
         )}
      </>
      }
    </span>
  );
}

export default TagInput;
