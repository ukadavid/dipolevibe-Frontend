/* eslint-disable react/prop-types */
import RecommendedVideoCard from "./RecommendedVideoCard";

function RecommendedVideoContainer({ video, onVideoClick }) {
  return (
    <div className="border-2 border-black pl-5 py-1 mt-4">
      <p className="text-white font-semibold font-mono m-3 border-x-0 border-b ">
        {" "}
        Recommended Videos{" "}
      </p>
      {video.recommendedVideos.map((video, index) => (
        <RecommendedVideoCard
          video={video}
          index={index}
          key={index}
          onClick={() => onVideoClick(video)}
        />
      ))}
    </div>
  );
}

export default RecommendedVideoContainer;
