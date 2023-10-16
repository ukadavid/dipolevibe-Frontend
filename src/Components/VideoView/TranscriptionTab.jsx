import { useState } from "react";
import { Link } from 'react-router-dom';
import MyVideos from '../Dashboard/MyVideos';
import ShowReceived from '../Dashboard/ShowReceived';
import ShowTranscript from '../Dashboard/ShowTranscript';

 function Transcription(){
  const [ showReceived, setShowReceived ] = useState(true);
  const [ showTranscript,setShowTranscript ] = useState(false);
  const [ isPaidUser, setIsPaidUser ] = useState(false);
  // Define state to manage the active link
  const [ activeLink, setActiveLink ] = useState("transcript");

  const handleMyReceived = () => {
    // Update the state to show UserTable and hide FileUpload
    setShowReceived(true);
    setShowTranscript(false)

    // Update the active link
    setActiveLink("comment");
  };
  const handleMyTranscript = () => {
    // Update the state to show UserTable and hide FileUpload
    setShowReceived(false);
    setShowTranscript(true)

    // Update the active link
    setActiveLink("transcript");
  };

return (
<div className="page border-black">
    <div className="mb-3">
    </div>
    <div className="flex items-center justify-center space-x-3 sm:mt-7 px-12 mt-1">
    
      <Link
        
        className={`px-3 text-sm font-medium border-b-2 border-transparent pb-1.5 dark:text-black ${
          activeLink === "transcript"
            ? "dark:text-gray-400 dark:text-gray"
            : "no-underline"
        }`}
        onClick={handleMyTranscript}
      >
         My Transcript
      </Link>
      <Link
        
        className={`px-3 text-sm font-medium border-b-2 border-transparent pb-1.5 dark:text-black ${
          activeLink === "comment"
            ? "dark:text-gray-400 dark:text-gray"
            : "no-underline"
        }`}
        onClick={handleMyReceived}
      >
        comment
      </Link>
    </div>
    {showReceived && <ShowReceived />}
    {showTranscript &&  (
      isPaidUser ? 
      <ShowTranscript /> : 
      <div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded text-sm hover:bg-blue-600 transition duration-300 w-40">
          Subscribe to view transcription
        </button>
      </div>)}
</div>
    )
}

export default Transcription;