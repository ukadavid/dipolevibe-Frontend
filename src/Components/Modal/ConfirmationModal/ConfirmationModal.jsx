/* eslint-disable react/prop-types */

const ConfirmationModal = ({ message, onCancel, onConfirm }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Leave</button>
      </div>
    </div>
  );
};

export default ConfirmationModal;

