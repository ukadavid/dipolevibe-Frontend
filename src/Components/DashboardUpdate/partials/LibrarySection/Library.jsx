/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import MyVideos from "../MyVideos";
import ShowTranscript from "./ShowTranscript";
import FilterButton from "../../navComponent/DropdownFilter";
import Datepicker from "../../navComponent/Datepicker";
import { apiGetVideos } from "../../../../Context/Api/Axios";
import { Pagination } from "./Pagination";
const videoSrc = "../../../../assets/Untitled ‑ Made with FlexClip.mp4";

export default function Library() {
  const [showPublicVideos, setShowPublicVideos] = useState(true);
  const [showPrivateVideo, setShowPrivateVideo] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  // Define state to manage the active link
  const [activeLink, setActiveLink] = useState("video");
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1); // Page number state

  const handleMyVideoClick = () => {
    // Update the state to show UserTable and hide FileUpload
    setShowPublicVideos(true);
    setShowPrivateVideo(false);
    setShowTranscript(false);

    // Update the active link
    setActiveLink("video");
  };
  const handleMyPrivateVideo = () => {
    // Update the state to show UserTable and hide FileUpload
    setShowPublicVideos(false);
    setShowPrivateVideo(true);
    setShowTranscript(false);

    // Update the active link
    setActiveLink("PrivateVideo");
  };
  const handleMyTranscript = () => {
    // Update the state to show UserTable and hide FileUpload
    setShowPublicVideos(false);
    setShowPrivateVideo(false);
    setShowTranscript(true);

    // Update the active link
    setActiveLink("transcript");
  };

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await apiGetVideos(
          `/videos/fetch/${
            activeLink == "video"
              ? "public"
              : activeLink === "PrivateVideo"
              ? "private"
              : ""
          }?page=${page}`
        );
        console.log(response);
        const newVideos = response.data.videos.data;
        const newTotalPages = response.data.videos.metadata.totalCount; // Updated this line
        setTotalPages(newTotalPages); // Set total pages based on API response
        response.status == 200 &&
          setData((prevVideos) => [...prevVideos, ...newVideos]);
        console.log(newVideos);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setData([]);
        setLoading(false);
      }
    }

    fetchVideos();
  }, [page, activeLink]);

  return (
    <div className="">
      <h4 className="text-sm text-left font-semibold">My Library</h4>
      <h6 className="text-2xl text-left mt-4 font-medium">Videos</h6>
      <div className="grid grid-flow-col sm:auto-cols-max my-8 justify-start sm:justify-end gap-2">
        {/* Filter button */}
        <FilterButton />
        {/* Datepicker built with flatpickr */}
        <Datepicker />
        {/* Add view button */}
      </div>
      <div className="flex items-start justify-start text-left sm:mt-7 mt-4 mb-8">
        <a
          href="#"
          className={`px-3 text-sm text-black text-left font-medium border-b-2 pb-1.5 dark:text-white ${
            activeLink === "video"
              ? "border-b border-gray-500"
              : "border-transparent no-underline"
          }`}
          onClick={handleMyVideoClick}
        >
          Public Videos
        </a>

        <a
          href="#"
          className={`px-3 text-sm text-black font-medium border-b-2 pb-1.5 dark:text-white ${
            activeLink === "PrivateVideo"
              ? "border-b border-gray-500"
              : "border-transparent no-underline"
          }`}
          onClick={handleMyPrivateVideo}
        >
          Private Videos
        </a>

        <a
          href="#"
          className={`px-3 text-sm text-black font-medium border-b-2 pb-1.5 dark:text-white ${
            activeLink === "transcript"
              ? "border-b border-gray-500"
              : "border-transparent no-underline"
          }`}
          onClick={handleMyTranscript}
        >
          My Transcript
        </a>
      </div>
      {showPublicVideos && <MyVideos videosData={data} />}
      {showPrivateVideo && <MyVideos videosData={data} />}
      {showTranscript && <ShowTranscript />}
    </div>
  );
}
