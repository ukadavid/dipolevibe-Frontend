/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaEye } from "react-icons/fa";
import { apiGetVideos } from "../../../../Context/Api/Axios";
import Preloader from "../../../Preloader/Preloader";
import { getDaysSinceUpload } from "../../../../utils/ConvertTime";

export function VideoCard({ video, index }) {
  return (
    <div className="flex flex-col mr-8 col-span-full sm:col-span-3 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
      <div className="py-2 px-4">
        <div>
          <video
            controls
            className="w-full mt-4 rounded-lg shadow-lg"
            style={{ maxHeight: "250px" }}
          >
            <source src={video.videoURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex mt-8 items-center justify-between gap-4 my-2">
            <p className="text-2xl">Title: {video.videoTitle}</p>
            <p className="text-gray-600 dark:text-gray-400">
              {getDaysSinceUpload(video.uploadedAt)}
            </p>
          </div>

          <div className="flex items-center justify-between items-center mt-4 mb-8">
            <div className="flex items-center">
              <span className="h-8 w-8 flex items-center justify-center dark:bg-gray-500 bg-gray-800 text-white rounded-full">
                {video._id.slice(0, 2)}
              </span>
              <span className=" ml-2 text-gray-800 dark:text-white">
                {video._id}
              </span>
            </div>

            <span className="mr-4  relative">
              <FaEye className="h-6 w-6 text-gray-800 dark:text-white" />
              <span className="top-0 dark:text-white left-4 border border-white rounded-full bg-gray-800 text-white flex items-center justify-center font-bold w-4 h-4 absolute text-xs">
                {video.views}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function VideoCardList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1); // Page number state

  useEffect(() => {
    async function fetchVideos() {
      try {
        console.log("1");
        const response = await apiGetVideos(
          `/videos/fetch/public?page=${page}`
        );
        const newVideos = response.data.videos.data;
        console.log(newVideos);
        setData((prevVideos) => [...prevVideos, ...newVideos]);
        setLoading(false); // Data is loaded, set loading to false
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Data loading failed, set loading to false
      }
    }

    fetchVideos();
  }, [page]); // Add 'page' as a dependency

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1); // Increment the page number
  };

  // const videosData = response.data;

  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const goToNext = () => {
    sliderRef.current.slickNext();
  };

  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      <div className="flex items-center justify-end mb-4">
        <p className="mr-2">View</p>
        <button
          onClick={goToPrev}
          className="dark:text-white text-gray-800 mr-2"
        >
          <FaChevronLeft />
        </button>
        <button onClick={goToNext} className="dark:text-white text-gray-800">
          <FaChevronRight />
        </button>
      </div>

      <div style={{ opacity: loading ? 0 : 1 }}>
        {" "}
        {/* Hide content when loading */}
        {!loading && (
          <Slider ref={sliderRef} {...sliderSettings}>
            {data.map((video, index) => (
              <VideoCard key={index} video={video} index={index} />
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}
