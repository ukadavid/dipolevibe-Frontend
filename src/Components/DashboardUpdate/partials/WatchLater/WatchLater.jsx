import { FaTrash } from "react-icons/fa";
const WatchLaterComponent = () => {
  return (
    <div className="dashboard">
      <div className="flex md:flex-row justify-between mb-4">
        <span className="font-bold mb-2 md:mb-0">Watch Later</span>
        <span className="flex items-center">
          Remove viewed videos <FaTrash className="ml-2 cursor-pointer" />
        </span>
      </div>

      <div className="flex rounded-md shadow-lg flex-col md:flex-row gap-10 justify-center items-center bg-white  p-8 mt-32">
        <img
          loading="lazy"
          src="https://app-assets.wistia.com/3dc5dbb6361f5fd7f1b6cb9104e1fadaffe9a295/assets/545686b225f0d89023e4a5e09bdf9e4a.svg"
          className="w-96 h-96 mb-8 md:mb-0 md:mr-10"
          alt=""
        />
        <div>
          <h4 className="mb-4">
            Easily access all of the videos you have seen
          </h4>
          <div className="mb-4">
            Add videos to your Watched Later list so you can easily find them
            again.
          </div>
          <div>
            Click the star next to a video to add it to your Watched Later list.
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLaterComponent;
