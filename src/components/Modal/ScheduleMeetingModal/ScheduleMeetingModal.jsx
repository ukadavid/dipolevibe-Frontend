/* eslint-disable no-unused-vars */
import { useState } from 'react';
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

    const handleGoogleCalendar = (e) => {
        e.preventDefault();

    }
  
    return (
      <div>
        <button onClick={openModal}>Open Modal</button>
  
        {isOpen && (
          <div className="modal-overlay">
            <div className="modal w-1/2">
              <h4 className='font-family: ui-sans-serif font-bold text-4xl'>Schedule meeting via</h4>
              <form onSubmit={handleSubmit}>
                <div className="w-auto border h-20 flex items-center px-2 mt-1 rounded-sm">
                    <a href="https://calendar.google.com/calendar/u/0/r" className='my-auto'>
                        <div className=""><span className="font-medium">Google Calendar</span></div>
                    </a>
                </div>
                <div className="w-auto border h-20 flex items-center px-2 mt-1 rounded-sm">
                    <a href="https://microsoftcalendar.com" className='my-auto'>
                        <div><span className="font-medium">Microsoft Outlook Calendar</span></div>
                    </a>
                </div>
              </form>
              <button onClick={closeModal} className="float-right">Close</button>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default ScheduleMeetingModal;