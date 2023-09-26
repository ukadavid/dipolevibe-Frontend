import { useState } from "react";
import "./view.css";
import InlineEdit from "./InlineEdit";
import { FaList, FaPen } from 'react-icons/fa';

const ViewSection = () => {
  const [leftColumnWidth, setLeftColumnWidth] = useState("70%");
  const [title, setTitle] = useState(
    `myVideo-${Math.random().toString(36).substring(7)}`
  );
  const [summary, setSummary] = useState("Summary");
  const [isEditing, setIsEditing] = useState(false);

  const handleResize = (e) => {
    const newWidth = `${Math.max(
      20,
      Math.min(80, (e.clientX / window.innerWidth) * 100)
    )}%`;
    setLeftColumnWidth(newWidth);
  };

  const handleMouseDown = () => {
    window.addEventListener("mousemove", handleResize);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleResize);
    window.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen pt-20 lg:pt-28 ">
      <div className="w-full lg:w-1/2 relative" style={{ width: leftColumnWidth }}>
        <div className="h-full p-4">
          Left Column
          <div className="resize-handle" onMouseDown={handleMouseDown}></div>
        </div>
      </div>
      <div className='w-96 min-w-96 max-w-5xl div-section lg:ml-4 h-3/6 rounded-full rounded-lg shadow-lg bg-white mt-4 lg:mt-0 flex flex-col relative '>
        <div className="py-16  px-4">
          <div className={`flex rounded-full hover:blue-500 items-center ${isEditing ? '' : 'hover-div'}`}>
            <h2 className="mr-2">
              <FaPen />
            </h2>
            <InlineEdit text={title} onEditText={setTitle} onFocus={() => setIsEditing(true)} onBlur={() => setIsEditing(false)} />
            <p className="edit-text">Edit Title</p>
          </div>
        </div>
        <div className="px-4">
          <div className="flex hover-div items-center">
            <p className="mr-2">
              <FaList />
            </p>
            <InlineEdit text={summary} onEditText={setSummary} onFocus={() => setIsEditing(true)} onBlur={() => setIsEditing(false)} />
            <p className="edit-text">Edit Summary</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSection;
