import React, { useState } from 'react';
import './ScheduleMeetingModal.css'; 

const ScheduleMeetingModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
  
    const openModal = () => {
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log('Form submitted:', input1, input2);
      closeModal();
    };
  
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
  
        {isOpen && (
          <div className="modal-overlay">
            <div className="modal">
              <h4>Capture life meeting</h4>
              <form onSubmit={handleSubmit}>
                <div>
                    <a href="https://googlecalendar.com">
                        <div><span>Google Calendar</span></div>
                    </a>
                </div>
                <div>
                    <a href="https://microsoftcalendar.com">
                        <div><span>Microsoft Outlook Calendar</span></div>
                    </a>
                </div>
                <button type="submit">Submit</button>
              </form>
              <button onClick={closeModal}>Close</button>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default ScheduleMeetingModal;