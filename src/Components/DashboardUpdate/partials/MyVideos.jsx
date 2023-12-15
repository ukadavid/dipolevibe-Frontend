/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import { FaEye, FaComment } from "react-icons/fa";
import { getDaysSinceUpload } from "../../../utils/ConvertTime";

const MyVideos = ({ videosData }) => {
  const handleVideoHover = (index) => {
    const videoElement = document.getElementById(`video-${index}`);
    videoElement.play();
  };

  const handleVideoLeave = (index) => {
    const videoElement = document.getElementById(`video-${index}`);
    videoElement.pause();
    videoElement.currentTime = 0;
  };
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {videosData.map((video, index) => (
          <div
            key={index}
            className="max-w-md bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700"
          >
            <div className="mb-4">
              <video
                id={`video-${index}`}
                controls
                className="w-full rounded-lg shadow-lg"
                style={{ maxHeight: "350px" }}
                onMouseEnter={() => handleVideoHover(index)}
                onMouseLeave={() => handleVideoLeave(index)}
              >
                <source src={video?.videoURL} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="px-4 text-left">
              <div className="flex items-center my-4">
                <span className="h-8 w-8 rounded-full bg-slate-400 text-white flex items-center justify-center font-bold text-xs">
                  {video?._id?.slice(0, 2)}
                </span>
                <p className=" flex-1 ml-2 text-left text-xl text-gray-800 dark:text-white">
                  {video?._id?.slice(0, 6)}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {
                  getDaysSinceUpload(video?.uploadedAt)
                  ? JSON.stringify(video?.userId) : getDaysSinceUpload(JSON.stringify(video?.updatedAt)) 
                  }
                </p>
              </div>

              <h2 className="text-xl font-bold mb-4">{video?.videoTitle}</h2>
              <p className="text-xl  text-left text-gray-600 mb-4 dark:text-gray-400">
                {video?.videoSummary}
              </p>

              <div className="flex mb-8 items-center">
                <span className="mr-4  relative">
                  <FaEye className="h-8 w-8 text-gray-800 dark:text-white" />
                  <span className="top-0 left-5 border border-white rounded-full bg-gray-800 text-white flex items-center justify-center font-bold w-4 h-4 absolute text-xs">
                    {video?.views}
                  </span>
                </span>

                <span className="relative">
                  <FaComment className="h-8  w-8 text-gray-800 dark:text-white" />
                  <span className="top-0 left-5 border border-white rounded-full bg-gray-800 text-white flex items-center justify-center font-bold w-4 h-4 absolute text-xs">
                    1
                  </span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default MyVideos;
