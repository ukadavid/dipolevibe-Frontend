import React, { useState } from 'react';
import './CaptureMeetingModal.css'; 

const CaptureMeetingModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', input1, input2, input3);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Capture life meeting</h2>
            <h2>Notetaker bot will be added to your meeting</h2>
            <form onSubmit={handleSubmit}>
              <h2>Name your meeting</h2>
              <input
                type="text"
                placeholder="Input 1"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
              <h2>Meeting link</h2>
              <h2>Capture messages from GMeet,Zoom,MS teams, and more</h2>
              <input
                type="text"
                placeholder="Meeting link"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaptureMeetingModal;