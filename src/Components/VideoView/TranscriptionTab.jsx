import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useHistory
import MyVideos from '../Dashboard/MyVideos';
import ShowReceived from '../Dashboard/ShowReceived';
import ShowTranscript from '../Dashboard/ShowTranscript';

function Transcription({ transcription }) {
  const [showReceived, setShowReceived] = useState(true);
  const [showTranscript, setShowTranscript] = useState(false);
  const [isPaidUser, setIsPaidUser] = useState(true);
  const [redirect, setRedirect] = useState(false); // State to manage redirection
  const navigate = useNavigate(); // Get the history object for redirection

  // Define state to manage the active link
  const [activeLink, setActiveLink] = useState("transcript");

  const handleMyReceived = () => {
    setShowReceived(true);
    setShowTranscript(false);
    setActiveLink("comment");
  };

  const handleMyTranscript = () => {
    setShowReceived(false);
    setShowTranscript(true);
    setActiveLink("transcript");
  };

  // Use useEffect to trigger the redirection with a delay
  useEffect(() => {
    if (redirect) {
      const delay = 2000; // 2 seconds
      const timeoutId = setTimeout(() => {
        navigate("/signup");
      }, delay);

      return () => clearTimeout(timeoutId);
    }
  }, [redirect, history]);

  const handleSubscribeClick = () => {
    // Trigger the redirection after the delay
    setRedirect(true);
  };

  return (
    <div className="page border-black">
      <div className="mb-3"></div>
      <div className="flex items-center justify-center space-x-3 sm:mt-7 px-12 mt-1">
        <p
          className={`px-3 text-sm font-medium border-b-2 border-transparent pb-1.5 dark:text-black ${
            activeLink === "transcript"
              ? "dark:text-gray-400 dark:text-gray"
              : "no-underline"
          }`}
          onClick={handleMyTranscript}
        >
          My Transcript
        </p>
        <p
          className={`px-3 text-sm font-medium border-b-2 border-transparent pb-1.5 dark:text-black ${
            activeLink === "comment"
              ? "dark:text-gray-400 dark:text-gray"
              : "no-underline"
          }`}
          onClick={handleMyReceived}
        >
          Comment
        </p>
      </div>
      {showReceived && <ShowReceived />}
      {showTranscript && (
        isPaidUser ? (
          <ShowTranscript transcript={transcription}/>
        ) : (
          <div>
            <button
              onClick={handleSubscribeClick}
              className="bg-blue-500 text-white py-2 px-4 rounded text-sm hover:bg-blue-600 transition duration-300 w-40"
            >
              Subscribe to view transcription
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default Transcription;
