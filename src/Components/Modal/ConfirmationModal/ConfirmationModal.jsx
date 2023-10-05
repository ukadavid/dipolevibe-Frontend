/* eslint-disable react/prop-types */


const ConfirmationModal = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-bg fixed inset-0 bg-black opacity-25"></div>
      <div className="modal-content bg-white p-4 rounded shadow-lg z-10">
        <p className="mb-4 text-lg">You can save your video now</p>
      </div>
    </div>
  );
};

export default ConfirmationModal;
