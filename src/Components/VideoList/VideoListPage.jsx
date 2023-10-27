import { apiGetVideos } from "../../Context/Api/Axios";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import Preloader from "../Preloader/Preloader";
import SearchBar from "./SearchBar";

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // Initial loading state
  const [error, setError] = useState(null); // Error state, if any
  const [page, setPage] = useState(1); // Page number state

  useEffect(() => {
    async function fetchVideos() {
      try {
        console.log("1");
        const response = await apiGetVideos(
          `/videos/fetch/public?page=${page}`
        );
        const newVideos = response.data.videos.data;
        setVideos((prevVideos) => [...prevVideos, ...newVideos]);
        setLoading(false); // Data is loaded, set loading to false
      } catch (error) {
        setError(error); // Handle any errors
        setLoading(false); // Data loading failed, set loading to false
      }
    }

    fetchVideos();
  }, [page]); // Add 'page' as a dependency

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1); // Increment the page number
  };

  if (loading && videos.length === 0) {
    return <Preloader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Show an error message
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8 my-14">
        <SearchBar onSearch={setVideos} />
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} index={index} />
          ))}
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300 w-40"
            onClick={loadMore}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
}

export default VideoList;
