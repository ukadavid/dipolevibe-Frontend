import { apiGetVideos } from "../../Context/Api/Axios";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import Preloader from "../Preloader/Preloader";
import SearchBar from "./SearchBar";
import Datepicker from "../DashboardUpdate/navComponent/Datepicker";
import FilterButton from "../DashboardUpdate/navComponent/DropdownFilter";

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // Initial loading state
  const [error, setError] = useState(null); // Error state, if any
  const [page, setPage] = useState(1); // Page number state

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await apiGetVideos(
          `/videos/fetch/public?page=${page}`
        );
        console.log(response);
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

  const handleSearch = async (searchResults) => {
    // Update the videos state with the search results
    setVideos(searchResults);
  };

  const handleFilter = async(dateFilter) => {
    try{
      const response = apiGetVideos(`/videos/searchByDate?search=${dateFilter}`)
    }
    catch(error){
      console.error("Error searching videos:", error);
    }
  }

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
        <div className="flex flex-col justify-center my-8 items-center">
          <SearchBar onSearch={handleSearch} />
          <div className="flex lg:ml-auto mt-4 justify-end items-end">
            <FilterButton handleFilter={handleFilter}/>
            {/* Datepicker built with flatpickr */}
            <Datepicker />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-1 gap-y-4 justify-items-center justify-center">
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
