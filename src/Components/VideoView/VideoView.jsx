/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"; // Import React
import "../../Components/ViewSection/view.css";
import SocialMediaShare from "../../Components/ShareComponent/Share";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LiaDownloadSolid } from "react-icons/lia";
import RecommendedVideoContainer from "./RecommendedVideoContainer";
import Transcription from "./TranscriptionTab";
import Preloader from "../Preloader/Preloader";
import Logo from "../../assets/logo.jpeg";
import { apiPostComment, apiGetReccVideos } from "../../Context/Api/Axios";
import MainCommentCard from "./MainCommentCard";
import InputBox from "./InputBox";

const VideoView = () => {
  const [leftColumnWidth, setLeftColumnWidth] = useState("70%");
  const [commentUpdate, setCommentUpdate] = useState("");
  const videoObject = JSON.parse(localStorage.getItem("videoObject"));
  const [video, setVideo] = useState(videoObject);
  const [recommendedVideos, setRecommendedVideos] = useState(null);

  const handleResize = (e) => {
    const newWidth = `${Math.max(
      20,
      Math.min(80, (e.clientX / window.innerWidth) * 100)
    )}%`;
    if (newWidth >= "70%" || newWidth <= "45%") {
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

  const fetchRecommendedVideos = async (tags) => {
    try {
      const response = await apiGetReccVideos(`/videos/recommended`, {
        params: { tags: tags },
      });
      setRecommendedVideos(response.data);
    } catch (error) {
      console.error("Error fetching recommended videos:", error);
    }
  };

  const handleCommentPost = (commentText) => {
    try {
      // Send the comment to the API
      apiPostComment(`/comments/public-video/${video._id}`, {
        text: commentText,
      });
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  const handleRecommendedVideoClick = (newVideo) => {
    // setVideo(newVideo);
    dispatch({ type: "SET_VIDEO", payload: newVideo });
    console.log("state.video " + JSON.stringify(state.video));
  };

  useEffect(() => {
    fetchRecommendedVideos(video.tags);
  }, []);

  useEffect(() => {
    console.log("comment triggered rerender");
  }, [commentUpdate]);

  useEffect(() => {
    // handleRecommendedVideoClick(video);
  }, [video]);

  useEffect(() => {
    // Define a function to handle storage events
    const handleStorageChange = (e) => {
      if (e.key === "videoObject") {
        // The 'videoObject' key in localStorage has changed
        // You can update your component state or take any other necessary action
        setVideo(JSON.parse(e.newValue));
      }
    };

    // Add the event listener for the 'storage' event
    window.addEventListener("storage", handleStorageChange);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [video]);

  if (video) {
    return (
      <div className="flex lg:pl-4 flex-col lg:flex-row h-screen dark:bg-gray-800 lg:pt-28 mt-20 overflow-scroll">
        <div
          className="w-auto relative mt-0 h-full "
          style={
            window.innerWidth > 768
              ? { width: leftColumnWidth, marginTop: "-100px" }
              : {}
          }
        >
          <div className="h-full pt-4 ">
            <video className="mb-1 w-full" controls>
              <source src={video.videoURL} type="video/mp4" />
            </video>
            <div className="px-2 w-full mt-0  w-350">
              <div className="mt-2 mb-3  text-lg text-slate-800 font-bold ">
                <span>{video.videoTitle}</span>
              </div>
              <div className="text-slate-800">
                {video.tags.map((tag, index) => {
                  return (
                    <span
                      className="text-slate-800 mr-2 rounded-full border-sky-400 border px-1 font-serif text-inherit"
                      key={index}
                    >
                      #{tag}
                    </span>
                  );
                })}
              </div>
              <div className="flex justify-between items-center py-2 mb-8 ">
                <div className="flex justify-center items-center text-slate-800">
                  <div className="mr-3 rounded-full">
                    <img src={Logo} alt="" className="h-12 w-12 rounded-full" />
                  </div>
                  <div>
                    <span className="text-slate-800">User Name</span>
                  </div>
                </div>
                <a href={video.videoURL} download={video.videoTitle}>
                  <div className="text-slate-800 relative rounded-full bg-slate-600 px-8 py-1 hover:bg-slate-700 outline outline-0 outline-sky-700 hover:outline-1 ">
                    <div className="absolute top-2 left-2">
                      <LiaDownloadSolid />
                    </div>
                    <button>Download</button>
                  </div>
                </a>
              </div>
              <InputBox
                type={"Submit"}
                postMainComment={handleCommentPost}
                setCommentUpdate={setCommentUpdate}
              />
              <MainCommentCard video={video} commentUpdate={commentUpdate} />
            </div>
            <div
              className="resize-handle hidden lg:block"
              onMouseDown={handleMouseDown}
            ></div>
          </div>
        </div>
        <div 
        className="mt-0 "
        style={{marginTop: "-85px"}}
        >
          <div className="w-full mx-auto mb-8 min-w-96 max-w-5xl div-section lg:mx-auto lg:ml-4 h-3/6 rounded-full rounded-lg shadow-lg bg-white mt-16 lg:mt-4 flex flex-col relative ">
            <div className="pt-0 px-4 h-full">
              <Transcription transcription={video.transcription} />
            </div>
          </div>
          {recommendedVideos && Object.keys(recommendedVideos)?.length >= 1 ? (
            <div className="lg:ml-4">
              <RecommendedVideoContainer
                video={recommendedVideos}
                onVideoClick={handleRecommendedVideoClick}
              />
            </div>
          ) : (
            <div className="mb-32 lg:ml-4"> No recommended video </div>
          )}
        </div>
      </div>
    );
  } else {
    return <Preloader />;
  }
};

export default VideoView;
