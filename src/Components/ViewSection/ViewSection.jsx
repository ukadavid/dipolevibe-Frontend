/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "./view.css";
import InlineEdit from "./InlineEdit";
import { FaList, FaPen } from "react-icons/fa";
import { FaSlackHash } from "react-icons/fa";
import SocialMediaShare from "../ShareComponent/Share";
import { apiTranscribePost } from "../../Context/Api/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Preloader from "../Preloader/Preloader";
import TagInput from "./TagInput";

const ViewSection = () => {
  const [leftColumnWidth, setLeftColumnWidth] = useState("70%");
  const [title, setTitle] = useState(
    `myVideo-${Math.random().toString(36).substring(7)}`
  );
  const [summary, setSummary] = useState("Summary");
  const [tag, setTag] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [mostRecentVideo, setMostRecentVideo] = useState(null);
  const [db, setDb] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [numTags, setNumTags] = useState(0);
  const [buttons, setButtons] = useState([]);
  const [hasMinimumTag, setMinimumTagError] = useState(false);

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

  useEffect(() => {
    const dbName = "recordingsDB";
    const dbVersion = 1;
    const objectStoreName = "recordings";

    const request = indexedDB.open(dbName, dbVersion);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;

      if (!db.objectStoreNames.contains(objectStoreName)) {
        db.createObjectStore(objectStoreName, { autoIncrement: true });
      }
    };

    request.onsuccess = (event) => {
      const db = event.target.result;
      setDb(db);

      const transaction = db.transaction(["recordings"], "readonly");
      const objectStore = transaction.objectStore("recordings");
      const request = objectStore.getAll(); // Get all videos
      request.onsuccess = (event) => {
        const videos = event.target.result;
        if (videos.length > 0) {
          videos.sort((a, b) => b.timestamp - a.timestamp);
          setMostRecentVideo(videos[0]); // Set the most recent video in state
        }
      };
    };
  }, []);

  const handleSubmit = async () => {
    try {
      if (buttons.length < 1 ) {
        setMinimumTagError(true); // Set the tag limit message
        return;
      }
      // setLoading(true);
      console.log(tag, title, summary, mostRecentVideo.blob);

      setSubmitClicked(true);
      // const response = await apiTranscribePost("/videos/upload", {
      //   title,
      //   summary,
      //   video: mostRecentVideo.blob,
      // });
  
      // console.log(response);

      // const newVideoUrl = response.data.videoUrl; 
      // setVideoUrl(newVideoUrl);
      // toast.success(response.data.message);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
    finally {
      setLoading(false);
    }
  };

  const renderPublishButtons = () => {
    if (submitClicked) {
      return (
        <div className="flex mt-8 justify-center items-center">
          <button
            className="bg-gradient-to-r from-blue-400 via-purple-600 to-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4"
          >
            Public Publish
          </button>
          <button
            className="bg-gradient-to-r from-blue-400 via-purple-600 to-blue-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Private Publish
          </button>
        </div>
      );
    }
  };



  if (mostRecentVideo && mostRecentVideo.blob) {
    const url = URL.createObjectURL(mostRecentVideo.blob);
    return (
      <div className="flex ml-4 flex-col lg:flex-row h-screen pt-20 lg:pt-28 ">
        <div
          className="w-full lg:w-1/2 relative"
          style={{ width: leftColumnWidth }}
        >
          <div className="h-full pt-4">
            <video className="mb-4" controls>
              <source src={url} type="video/mp4" />
            </video>
            <div className="bg-gray-50 dark:bg-gray-800">
              {videoUrl && <SocialMediaShare url={videoUrl} />}
            </div>
            <div className="resize-handle" onMouseDown={handleMouseDown}></div>
          </div>
        </div>
        {loading ? (
          <Preloader />
        ) : (
          <div className="w-96 min-w-96 max-w-5xl div-section lg:ml-4 h-3/6 rounded-full rounded-lg shadow-lg bg-white mt-16 lg:mt-4 flex flex-col relative ">
            <div className="pt-16 mt-4  px-4">
              <div
                className={`flex rounded-full hover:blue-500 items-center ${
                  isEditing ? "" : "hover-div"
                }`}
              >
                <h2 className="mr-2">
                  <FaPen />
                </h2>
                <InlineEdit
                  text={title}
                  onEditText={setTitle}
                  onFocus={() => setIsEditing(true)}
                  onBlur={() => setIsEditing(false)}
                />
                <p className="edit-text">Edit Title</p>
              </div>
            </div>
            <div className="px-4">
              <div className="flex hover-div items-center">
                <p className="mr-2">
                  <FaList />
                </p>
                <InlineEdit
                  text={summary}
                  onEditText={setSummary}
                  onFocus={() => setIsEditing(true)}
                  onBlur={() => setIsEditing(false)}
                />
                <p className="edit-text">Edit Summary</p>
              </div>
              <div className="flex hover-div items-center">
                <p className="mr-2">
                  <FaSlackHash />
                </p>
                <TagInput
                  tag={tag} 
                  setTag={setTag} 
                  buttons={buttons} 
                  setButtons={setButtons} 
                  hasMinimumTag={hasMinimumTag}
                  setMinimumTagError={setMinimumTagError}
                 />
                {/* <InlineEdit
                  onFocus={() => setIsEditing(true)}
                  onBlur={() => setIsEditing(false)}
                /> */}
                <p className="edit-text">Tags</p>
              </div>
             
              <div >
                <div className="flex mt-8 justify-center ">
                    <button
                     onClick={handleSubmit}
                     className="bg-gradient-to-r from-blue-400 via-purple-600 to-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                     Submit
                    </button>
                </div>
                {renderPublishButtons()}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  } 
};

export default ViewSection;