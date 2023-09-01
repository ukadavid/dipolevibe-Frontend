import React, { useState } from 'react';
import './CaptureMeetingModal.css'; 

const CaptureMeetingModal = () => {
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
    console.log('Form submitted:', input1, input2, input3);
    closeModal();
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal w-1/3">
            <h2 className="font-medium">Capture life meeting</h2>
            <h2 className="font-serif text-slate-500">Notetaker bot will be added to your meeting</h2>
            <form onSubmit={handleSubmit}>
              <h2 className="font-medium mt-2.5">Name your meeting<span className="text-slate-500 ml-2 font-light">Optional</span></h2>
              <input
                className="mt-2.5"
                type="text"
                placeholder="Meeting link"
                value={input1}
                onChange={(e) => setInput1(e.target.value)}
              />
              <h2 className="font-medium">Meeting link</h2>
              <h2 className="font-serif text-slate-500 mt-2.5">Capture messages from GMeet,Zoom,MS teams, and more</h2>
              <input
                className="mt-2.5"
                type="text"
                placeholder="Meeting link"
                value={input2}
                onChange={(e) => setInput2(e.target.value)}
              />
            </form>
            <div className="float-right">
               <span ><button type="submit">Submit</button></span>
               <span className='ml-2'><button onClick={closeModal}>Close</button></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CaptureMeetingModal;