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
  const [activeLink, setActiveLink] = useState("video");
  const [totalPages, setTotalPages] = useState(1);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const handleMyVideoClick = () => {
    setShowPublicVideos(true);
    setShowPrivateVideo(false);
    setShowTranscript(false);
    setActiveLink("video");
  };

  const handleMyPrivateVideo = () => {
    setShowPublicVideos(false);
    setShowPrivateVideo(true);
    setShowTranscript(false);
    setActiveLink("PrivateVideo");
  };

  const handleMyTranscript = () => {
    setShowPublicVideos(false);
    setShowPrivateVideo(false);
    setShowTranscript(true);
    setActiveLink("transcript");
  };

  const onPageChange = async (newPage) => {
    setPage(newPage);
    setData([]);
  };

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await apiGetVideos(
          `/videos/fetch/${
            activeLink === "video"
              ? "public"
              : activeLink === "PrivateVideo"
              ? "private"
              : ""
          }?page=${page}`
        );
        const newVideos = response.data.videos.data;
        const newTotalPages = response.data.videos.metadata.totalCount;
        setTotalPages(newTotalPages);
        response.status === 200 &&
          setData((prevVideos) => [...prevVideos, ...newVideos]);
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
        <FilterButton />
        <Datepicker />
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

      {!showTranscript && (
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
}
