import { useState } from "react";
import MyVideos from '../Dashboard/MyVideos';
import ShowReceived from '../Dashboard/ShowReceived';
import ShowTranscript from '../Dashboard/ShowTranscript';
import Search from '../Dashboard/Search';

 function Transcription(){
    const [showMyVideos, setShowMyVideos] = useState(true);
  const [showReceived, setShowReceived] = useState(false);
  const [showTranscript,setShowTranscript] = useState(false)
  // Define state to manage the active link
  const [activeLink, setActiveLink] = useState("library");

  const handleMyVideoClick = () => {
    // Update the state to show UserTable and hide FileUpload
    setShowMyVideos(true);
    setShowReceived(false);
    setShowTranscript(false)

    // Update the active link
    setActiveLink("video");
  };
  const handleMyReceived = () => {
    // Update the state to show UserTable and hide FileUpload
    setShowMyVideos(false);
    setShowReceived(true);
    setShowTranscript(false)

    // Update the active link
    setActiveLink("received");
  };
  const handleMyTranscript = () => {
    // Update the state to show UserTable and hide FileUpload
    setShowMyVideos(false);
    setShowReceived(false);
    setShowTranscript(true)

    // Update the active link
    setActiveLink("transcript");
  };

return (
<div className="page">
<div className="mb-3">
</div>
<div className="flex items-center justify-center space-x-3 sm:mt-7 px-12 mt-4">

  <a
    href="#"
    className={`px-3 text-sm font-medium border-b-2 border-transparent pb-1.5 dark:text-black ${
      activeLink === "received"
        ? "dark:text-gray-400 dark:text-gray"
        : "no-underline"
    }`}
    onClick={handleMyReceived}
  >
     My Transcript
  </a>
  <a
    href="#"
    className={`px-3 text-sm font-medium border-b-2 border-transparent pb-1.5 dark:text-black ${
      activeLink === "transcript"
        ? "dark:text-gray-400 dark:text-gray"
        : "no-underline"
    }`}
    onClick={handleMyTranscript}
  >
    comment
  </a>
</div>

            {showMyVideos && <MyVideos />}
            {showReceived && <ShowReceived />}
            {showTranscript && <ShowTranscript />}

        </div>
    )
}

export default Transcription;