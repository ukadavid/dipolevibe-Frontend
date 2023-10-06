import { apiGetVideos } from '../../Context/Api/Axios';
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Import axios

import VideoCard from './VideoCard';

function VideoList() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true); // Initial loading state
  const [error, setError] = useState(null); // Error state, if any

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await apiGetVideos('/videos/fetch/public');
        setVideos(response.data);
        setLoading(false); // Data is loaded, set loading to false
      } catch (error) {
        setError(error); // Handle any errors
        setLoading(false); // Data loading failed, set loading to false
      }
    }

    fetchVideos();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Show an error message
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8 my-14">
      <div className="grid grid-cols-2 gap-4">
        {videos.map(( video, index ) => (
          <VideoCard key={index} video={video} index={index}/>
        ))}
      </div>
      </div>
    </>
  );
}

export default VideoList;
