/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import CaptureMeetingModal from "../Modal/CaptureMeetingModal/CaptureMeetingModal";
import TranscriptionPrompt from "../Modal/TranscriptionPrompt";
import SignUpPrompt from "../Modal/SignUpPrompt";

const ViewSection = () => {
  const [leftColumnWidth, setLeftColumnWidth] = useState("70%");
  const [title, setTitle] = useState(
    `myVideo-${Math.random().toString(36).substring(7)}`
  );
  const [summary, setSummary] = useState("Summary");
  const [tag, setTag] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [mostRecentVideo, setMostRecentVideo] = useState(null);
  const [db, setDb] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [numTags, setNumTags] = useState(0);
  const [buttons, setButtons] = useState([]);
  const [hasMinimumTag, setMinimumTagError] = useState(false);
  const [displayModal, setModal] = useState(false);
  const [isAnonUser, setAnonUser] = useState(false);
  const [isPrivatePublish, setPrivatePublish] = useState(false);
  const [displaySignUpModal, setSignUpModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();


  const submitContext = {
    tag,
    title,
    summary,
    isPrivatePublish: isPrivatePublish,
    video: mostRecentVideo?.blob,
  }

  const isTranscribe = true

  
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

  const handleCheckBox = () => {
    toggleCheckbox();

    isAnonUser ? setSignUpModal(true) : setPrivatePublish( !isPrivatePublish )

    isPrivatePublish ? 
       submitContext.isPrivatePublish = true : 
       submitContext.isPrivatePublish = false;
      
    console.log("submitContext :"+JSON.stringify(submitContext));
    return;
  }
  
  const submitLogic = async () => {
    console.log("inside submitLogic scope")
    try{
      console.log(submitContext);
      //  const response = await apiTranscribePost("/videos/upload",
      //                                            submitContext
      //                                            );
      // const newVideoUrl = response.data.message.videoObj.videoURL;
      // setVideoUrl(newVideoUrl);
      // toast.success(response.data.message.message);
    }
    catch(error){
      console.log(error);
    }
  }


  const handleDefaultSubmit = async () => {
    try {
      if (buttons.length < 1) {
        setMinimumTagError(true); // Set the tag limit message
        return;
      }

      setSubmitClicked(true);
      setLoading(true);

      isAnonUser ? submitLogic() : setModal(true)

    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setSubmitClicked(false); // Reset submitClicked
      setLoading(false);
    }
  };

  const handleTranscriptionSubmit = async () => {
    console.log("with love from transciption prompt modal");
    isAnonUser ? setSignUpModal(true) : null

    try {
      submitContext.transcription = isTranscribe;
      submitLogic();
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setSubmitClicked(false); // Reset submitClicked
      setLoading(false);
    }
  };

  const handleSignUpRedirection = async () => {
    const signUpPage = "/signup"
    setTimeout(() => {
      navigate(signUpPage);
    },2000)
  }

  const toggleCheckbox = async () => {
    setIsChecked(!isChecked);
  }

  if (mostRecentVideo && mostRecentVideo.blob) {
    const url = URL.createObjectURL(mostRecentVideo.blob);
    return (
      <>
      <div className="flex lg:ml-4 flex-col lg:flex-row pt-20 lg:pt-28 ">
        <div
          className="w-full lg:w-1/2 relative"
          style={window.innerWidth > 768 ? { width: leftColumnWidth } : {}}
        >
          <div className="py-8">
            {mostRecentVideo && mostRecentVideo.blob && (
              <video className="w-full" controls>
                <source src={url} type="video/mp4" />
              </video>
            )}
            {submitClicked && loading && <Preloader />}
            {videoUrl && <SocialMediaShare url={videoUrl} />}
            <div
              className="resize-handle hidden lg:block"
              onMouseDown={handleMouseDown}
            ></div>
          </div>
        </div>
        <div className="w-full min-w-96 max-w-5xl div-section lg:w-1/4 lg:ml-4 h-3/6 rounded-full rounded-lg shadow-lg bg-white mt-16 lg:mt-4 flex flex-col relative ">
          <div className="pt-16 mt-4  px-4">
            <div
              className={`flex rounded-full hover:blue-500 items-center ${
                isEditing ? "" : "hover-div"
              }`}
            >
              <h2 className="mr-2">
                <FaPen className="dark:text-gray-800" />
              </h2>
              <InlineEdit
                text={title}
                onEditText={setTitle}
                onFocus={() => setIsEditing(true)}
                onBlur={() => setIsEditing(false)}
              />
              <p className="edit-text dark:text-gray-800">Edit Title</p>
            </div>
          </div>
          <div className="px-4">
            <div className="flex hover-div items-center">
              <p className="mr-2">
                <FaList className="dark:text-gray-800" />
              </p>
              <InlineEdit
                text={summary}
                onEditText={setSummary}
                onFocus={() => setIsEditing(true)}
                onBlur={() => setIsEditing(false)}
              />
              <p className="dark:text-gray-800 edit-text">Edit Summary</p>
            </div>
            <div className="flex hover-div items-center">
              <p className="mr-2">
                <FaSlackHash className="dark:text-gray-800" />
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
            <div class="mt-2.5">
              <input 
                id="checkbox"
                checked={isChecked}
                type="checkbox" 
                name="publish-private"
                onClick={handleCheckBox}
              />
              <label for="publish-private" class="ml-1.5 text-slate-500 text-sm hover:text-black"><span>publish private</span></label>
            </div>

            <div>
              <div className="flex my-8 justify-center ">
                <button
                  onClick={handleDefaultSubmit}
                  className="bg-gradient-to-r from-blue-400 via-purple-600 to-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {displayModal && <TranscriptionPrompt state={displayModal} transcription={handleTranscriptionSubmit}/>}
      {displaySignUpModal && <SignUpPrompt redirect={handleSignUpRedirection} toggleCheckbox={toggleCheckbox}/>}
      </>
    );
  }
};

export default ViewSection;
