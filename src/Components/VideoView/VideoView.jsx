/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "../../Components/ViewSection/view.css";
import VideoCard from "../VideoList/VideoCard";
import InlineEdit from "../../Components/ViewSection/InlineEdit";
import { FaList, FaPen } from "react-icons/fa";
import SocialMediaShare from "../../Components/ShareComponent/Share";
import { apiTranscribePost } from "../../Context/Api/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Transcription from './TranscriptionTab';
import Preloader from "../Preloader/Preloader";

const VideoView = () => {
  const [leftColumnWidth, setLeftColumnWidth] = useState("45%");
  const [title, setTitle] = useState(
    `myVideo-${Math.random().toString(36).substring(7)}`
  );
  const [summary, setSummary] = useState("Summary");
  const [isEditing, setIsEditing] = useState(false);
  const [mostRecentVideo, setMostRecentVideo] = useState(null);
  const [db, setDb] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);

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

//     const dbName = "recordingsDB";
//     const dbVersion = 1;
//     const objectStoreName = "recordings";

//     const request = indexedDB.open(dbName, dbVersion);

//     request.onupgradeneeded = (event) => {
//       const db = event.target.result;

//       if (!db.objectStoreNames.contains(objectStoreName)) {
//         db.createObjectStore(objectStoreName, { autoIncrement: true });
//       }
//     };

//     request.onsuccess = (event) => {
//       const db = event.target.result;
//       setDb(db);

//       const transaction = db.transaction(["recordings"], "readonly");
//       const objectStore = transaction.objectStore("recordings");
//       const request = objectStore.getAll(); // Get all videos
//       request.onsuccess = (event) => {
//         const videos = event.target.result;
//         if (videos.length > 0) {
//           videos.sort((a, b) => b.timestamp - a.timestamp);
//           setMostRecentVideo(videos[0]); // Set the most recent video in state
//         }
//       };
//     };
//   }, []);





  if (!mostRecentVideo) {
    // Check if mostRecentVideo is not null or undefined
    let url = localStorage.getItem('videoURL');//URL.createObjectURL(mostRecentVideo.blob); // Create URL from the Blob
    url = url.replace(/"/g, '');
    console.log("here!!!"+url);
    return (
      <div className="flex ml-4 flex-col lg:flex-row h-screen pt-20 lg:pt-28 ">
        <div
          className="w-auto  relative" //lg:w-1/2
          style={{ width: leftColumnWidth }}
        >
        {/* <VideoCard/> */}
        <div className="h-full pt-4">
            <video className="mb-4" controls>
              <source src={url} type="video/mp4" />
            </video>
            <div className="bg-gray-50 dark:bg-gray-800">
            {/* {videoUrl && <SocialMediaShare url={videoUrl} />} */}
            </div>

            <div className="resize-handle" onMouseDown={handleMouseDown}></div>
        </div>
        </div>
        <div className="w-96 min-w-96 max-w-5xl div-section lg:ml-4 h-3/6 rounded-full rounded-lg shadow-lg bg-white mt-16 lg:mt-4 flex flex-col relative ">
          <div className="pt-16 mt-4  px-4">
            <Transcription/>
          </div>
        </div>
      </div>
    );
  } else {
    return <Preloader />; // Return a message if mostRecentVideo is null or undefined
  }
};

export default VideoView;
