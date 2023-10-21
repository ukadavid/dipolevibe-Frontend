/* eslint-disable react/prop-types */
import { FaEye, FaComment } from "react-icons/fa";

const MyVideos = ({ videosData }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {videosData.map((video, index) => (
        <div
          key={index}
          className="max-w-md bg-white dark:bg-slate-800 shadow-lg rounded-xl border border-slate-200 dark:border-slate-700"
        >
          <div className="mb-4">
            <video
              controls
              className="w-full rounded-lg shadow-lg"
              style={{ maxHeight: "350px" }}
            >
              <source src={video.videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="px-4 text-left">
            <div className="flex items-center my-4">
              <span className="h-8 w-8 rounded-full bg-slate-400 text-white flex items-center justify-center font-bold text-xs">
                {video.initials}
              </span>
              <p className=" flex-1 ml-2 text-left text-xl text-gray-800 dark:text-white">
                {video.author}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {video.date}
              </p>
            </div>

            <h2 className="text-xl font-bold mb-4">{video.title}</h2>
            <p className="text-xl  text-left text-gray-600 mb-4 dark:text-gray-400">
              {video.summary}
            </p>

            <div className="flex mb-8 items-center">
              <span className="mr-4  relative">
                <FaEye className="h-8 w-8 text-gray-800" />
                <span className="top-0 left-5 border border-white rounded-full bg-gray-800 text-white flex items-center justify-center font-bold w-4 h-4 absolute text-xs">
                  1
                </span>
              </span>

              <span className="relative">
                <FaComment className="h-8  w-8 text-gray-800" />
                <span className="top-0 left-5 border border-white rounded-full bg-gray-800 text-white flex items-center justify-center font-bold w-4 h-4 absolute text-xs">
                  1
                </span>
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyVideos;
