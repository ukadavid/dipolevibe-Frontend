/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import "../../Components/ViewSection/view.css";
import VideoCard from "../VideoList/VideoCard";
import InlineEdit from "../../Components/ViewSection/InlineEdit";
import SocialMediaShare from "../../Components/ShareComponent/Share";
import { apiTranscribePost } from "../../Context/Api/Axios";
import { toast } from "react-toastify";
import { useVideo } from '../../Context/VideoStore';
import { LiaDownloadSolid } from "react-icons/lia";
import CommentInputCard  from "./CommentInputCard";
import CommentCard  from "./CommentCard";
import "react-toastify/dist/ReactToastify.css";
import Transcription from './TranscriptionTab';
import Preloader from "../Preloader/Preloader";
import Logo from "../../assets/logo.jpeg"

const VideoView = ({ videoContext }) => {
  const [leftColumnWidth, setLeftColumnWidth] = useState("70%");

  const [mostRecentVideo, setMostRecentVideo] = useState(
    localStorage.getItem('videoURL').replace(/"/g, '')
  );

  const[hasComments, setComments ] = useState(null);

  const { videoObject } = useVideo();
  // console.log(videoObject);

  const handleResize = (e) => {
    const newWidth = `${Math.max(
      20,
      Math.min(80, (e.clientX / window.innerWidth) * 100)
    )}%`;
    if(newWidth >= "70%" || newWidth <= "45%"){
      return;
    }
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
    console.log(videoObject); // This will log the updated value when it changes.
  }, [videoObject]);


  if (videoObject) {
    // Check if video is not null or undefined
    let videoUrl = localStorage.getItem('videoURL');
    videoUrl = videoUrl.replace(/"/g, '');
    return (
      <div className="flex ml-4 flex-col lg:flex-row h-screen lg:pt-28 mt-20 ">
        <div
          className="w-auto relative mt-0 h-full" //lg:w-1/2
          style={{ width: leftColumnWidth, marginTop: '-100px' }}
        >
          {/* <VideoCard/> */}
          <div className="h-full pt-4">
            <video className="mb-1" controls>
              <source src={videoUrl} type="video/mp4" />
            </video>
            <div className="px-2 mt-0 bg-gray-50 dark:bg-gray-800">
                <div className="mt-2 mb-3 text-lg text-white font-bold bg-gray-50 dark:bg-gray-800">
                 <span>Video Title</span>
                </div>
                <div className="flex justify-between items-center py-2 bg-gray-50 dark:bg-gray-800">
                 <div className="flex justify-center items-center text-white">
                    <div className="mr-3 rounded-full"><img src={Logo} alt="" className="h-12 w-12 rounded-full"/></div>
                    <div><span>User Name</span></div>
                </div>
                <div className="text-white relative rounded-full bg-slate-600 px-8 py-1"> 
                   <div className="absolute top-2 left-2"><LiaDownloadSolid /></div>
                   <button >Download</button>
                </div>
             {/* {videoUrl && <SocialMediaShare url={videoUrl} />} */}
             </div>
                <CommentInputCard />
                {hasComments ?
                 (<CommentCard />) :
                  <div className="text-white"><span>No Comment</span></div>
                }
            </div>
 

            <div className="resize-handle" onMouseDown={handleMouseDown}></div>
          </div>
        </div>
        <div className="w-96 min-w-96 max-w-5xl div-section lg:ml-4 h-full rounded-full rounded-lg shadow-lg bg-white mt-1 lg:mt-1 flex flex-col relative"
           style={{ marginTop: '-100px' }}
        >
        <div className="pt-0 px-4 h-full">
          <Transcription/>
        </div>
        </div>
      </div>
    );
  } else {
    return <Preloader />; 
  }
};

export default VideoView;
