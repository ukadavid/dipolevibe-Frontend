/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { apiGetVideos } from "../../Context/Api/Axios";
import { useLocation } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const Video = () => {
  const [isloading, setIsLoading] = useState();
  const [video, setVideo] = useState("");
  const location = useLocation();
  const locate = location.search.replace(/\?/, "");
  // console.log("locate "+locate);
  // console.log("video "+video);
  useEffect(() => {
    async function fetchVideos() {
      setIsLoading(true);
      try {
        const response = await apiGetVideos(`/videos/view/${locate}`);
        if (response.status === 200) {
          const newVideos = await response?.data?.videoURL;
          setVideo(newVideos);
          setIsLoading(false); // Data is loaded, set loading to false
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false); // Data loading failed, set loading to false
      }
    }

    fetchVideos();
  }, []);
  return isloading ? (
    <Preloader />
  ) : (
    <div className="h-screen py-8 px-8 flex items-center justify-center bg-gray-100">
      <video
        autoPlay
        muted
        loop
        className="h-full w-full object-cover"
        controls
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
