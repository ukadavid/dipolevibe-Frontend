/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./view.css";
import "../../utils/css/loader.css";
import InlineEdit from "./InlineEdit";
import { FaList, FaPen } from "react-icons/fa";
import { FaSlackHash } from "react-icons/fa";
import SocialMediaShare from "../ShareComponent/Share";
import { apiTranscribePost, apiSharePost } from "../../Context/Api/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Preloader from "../Preloader/Preloader";
import TagInput from "./TagInput";
import TranscriptionPrompt from "../Modal/TranscriptionPrompt";
import SignUpPrompt from "../Modal/SignUpPrompt";
import MailInput from "./MaiInput";

const ViewSection = () => {
  const [leftColumnWidth, setLeftColumnWidth] = useState("70%");
  const [title, setTitle] = useState(
    `myVideo-${Math.random().toString(36).substring(7)}`
  );
  const [summary, setSummary] = useState("Summary");
  const [tag, setTag] = useState("");
  const [email, setEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [mostRecentVideo, setMostRecentVideo] = useState(null);
  const [db, setDb] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [submitClicked, setSubmitClicked] = useState(false);
  const [numTags, setNumTags] = useState(0);
  const [buttons, setButtons] = useState([]);
  const [emailButtons, setEmailButtons] = useState([]);
  const [hasMinimumTag, setMinimumTagError] = useState(false);
  const [videoShare, setVideoShare] = useState();
  const [displayModal, setModal] = useState(false);
  const [isAnonUser, setAnonUser] = useState(false);
  const [isPrivatePublish, setPrivatePublish] = useState(false);
  const [displaySignUpModal, setSignUpModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const navigate = useNavigate();

  const baseURL = "https://dipolevibe-frontend.vercel.app/video/?";

  const submitContext = {
    author: localStorage.getItem("email"), 
    tag,
    email,
    title,
    summary,
    isPrivatePublish: isPrivatePublish,
    video: mostRecentVideo?.blob,
  };

  const isTranscribe = true;

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

  useEffect(() => {
    localStorage.getItem("email") != null ? setAnonUser(false) : setAnonUser(true);
  },[])

  const handleCheckBox = () => {
    // toggleCheckbox();
    setIsChecked((prevChecked) => {
      const newChecked = !prevChecked;
      toggleCheckbox(newChecked);
      return newChecked;
    });
    // isAnonUser ? setSignUpModal(true) : setPrivatePublish(!isPrivatePublish);

    isChecked
      ? (submitContext.isPrivatePublish = true)
      : (submitContext.isPrivatePublish = false);

  };

  const toggleCheckbox =  (newChecked) => {
    if (newChecked) {
      setEmailButtons([]);
    }
    setPrivatePublish(!isPrivatePublish);
  };

  const handleDefaultSubmit = async () => {
    try {
      if (buttons.length < 1) {
        setMinimumTagError(true); // Set the tag limit message
        return;
      }

      //setLoading(true);
      setSubmitClicked(true);

      
      isAnonUser && isChecked ? setSignUpModal(true) : submitLogic(selectedOption);  //setSignUpModal(true)
    } catch (error) {
      console.error("Error submitting data:", error);
    } finally {
      setSubmitClicked(false); // Reset submitClicked
      //setLoading(false);
    }
  };

  const createResponse = (status, message, data = null) => {
    return { status, message, data };
  };
  

  const submitLogic = async () => {
    try {
      setLoading(true);
      const response = await handleUpload(selectedOption, submitContext);
      console.log(response);
      const videoId = response.data.message.videoData._id;
      setVideoUrl(videoId);
      setVideoShare(baseURL+videoId);
      toast.success(response.data.message.message);
    } catch (error) {
      toast.error(error.response.data.message)

      console.log(error);
    }
    finally{
      setLoading(false);
    }
  };

  const handleUpload = async (selectedOption, submitContext) => {
    switch (selectedOption) {
      case 'team':
        // Handle 'share with team' logic
        console.log('team route');
         return apiSharePost('/shared/upload', submitContext);
        // break;
        // Replace the following code with your logic for 'share with team'
      case 'public-private':
        // Handle 'public private' logic
        console.log('public-private route');
         return apiTranscribePost('/videos/upload/private', submitContext);
        //break;
      case 'self':
        console.log('self route');
         return apiSharePost('/shared/upload', submitContext);
        //break;
      default:
        // Handle 'default' logic or other cases
        console.log('default route');
         return apiTranscribePost('/videos/upload', submitContext);
    }
  };

  const handleTranscriptionSubmit = async () => {
    isAnonUser ? setSignUpModal(true) : null;

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
    const signUpPage = "/signup";
    setTimeout(() => {
      navigate(signUpPage);
    }, 2000);
  };



  useEffect(() => {

  },[selectedOption])

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
              {
              // submitClicked &&
              //  loading &&
              //  <Preloader />
              }
              {videoUrl && <SocialMediaShare url={videoShare} />}
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
              <div className="mt-2.5">
                <input 
                  id="checkbox"
                  checked={isChecked}
                  type="checkbox" 
                  name="publish-private"
                  onClick={handleCheckBox}
                />
                <label className="ml-1.5 text-slate-500 text-sm hover:text-black"><span>publish private</span></label>
              </div>
              <div>
                {
                isChecked && 
                <MailInput 
                  email={email}
                  setEmail={setEmail}
                  emailButtons={emailButtons}
                  setEmailButtons={setEmailButtons}
                  hasMinimumTag={hasMinimumTag}
                  setMinimumTagError={setMinimumTagError}
                  selectedOption={selectedOption}
                  setSelectedOption={setSelectedOption}
                  displayModal={isChecked}
                  handleSubmit={handleDefaultSubmit}
                />
                }
              </div>

              <div>
                <div className="flex my-8 justify-center ">
                  <button
                    onClick={handleDefaultSubmit}
                    className={`bg-gradient-to-r from-blue-400 via-purple-600 to-blue-700 text-white font-bold py-2 px-4 rounded-full ${
                      loading ? "loading" : ""
                    }`}
                    disabled={loading}
                  >
                   <span>Submit</span> 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {displayModal && (
          <TranscriptionPrompt
            displayModal={displayModal}
            handleTranscriptionSubmit={handleTranscriptionSubmit}
          />
        )}
        {displaySignUpModal && (
          <SignUpPrompt
            redirect={handleSignUpRedirection}
            toggleCheckbox={toggleCheckbox}
          />
        )}
      </>
    );
  }
};

export default ViewSection;
