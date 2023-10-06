import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'; 
import { MdExitToApp } from "react-icons/md";
import  CardContext  from './CardContext';

function VideoCard({ video, index }) {
  const [hovered, setHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = video._id; // Generate a unique identifier based on the index

  const toggleControls = () => {
    setHovered(!hovered);
  };
//   console.log(video);

  const handleViewButtonClick = () => {
    let videoViewPage = '/VideoViewPage'
    localStorage.setItem('videoURL', JSON.stringify(video.videoURL))
    console.log(video.videoURL);

    setTimeout(() => {
        window.location.replace(videoViewPage);
      }, 1000); 
  };

  return (
    <div style={{
        display: 'inline-block',
        marginBottom: '10px',
        width: '100%',
        marginRight: '10px',
        position: 'relative',
      }}>
    <div
      style={{
        marginBottom: '10px',
        width: '100%',
        marginRight: '10px',
        position: 'relative',
      }}
      onMouseEnter={toggleControls}
      onMouseLeave={toggleControls}
    >
        <div       
         style={{
         marginBottom: '10px',
         width: '30%',
         marginRight: '10px',
         position: 'absolute',
         top: '5px',
         zIndex: '2'
        }}
        onClick= {() => {
            console.log("icon clicked");
            handleViewButtonClick();
        }}
        >
            <MdExitToApp />
        </div>
      <video
        id={video._id} // Use the unique identifier for the video element
        controls={isPlaying}
        autoPlay={isPlaying}
        width="100%"
        height="auto"
        loop // Keep the loop attribute for continuous looping
        onMouseEnter={toggleControls}
        onMouseLeave={toggleControls}
      >
        <source src={video.videoURL} type="video/mp4" />
      </video>
      <CardContext context={video}/>

      {!isPlaying && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(0, 0, 0, 0.5)', // Transparent background
            borderRadius: '50%',
            padding: '15px',
            cursor: 'pointer',
            zIndex: 1,
          }}
          onClick={() => {
            // console.log(videoId);
            const videoElement = document.getElementById(videoId);
            videoElement.play();
            setIsPlaying(true);
          }}
        >
          <FontAwesomeIcon icon={faPlay} style={{ color: 'white', width: '50px', height: '50px' }} />
        </div>
      )}
     </div>
    </div>
  );
}

export default VideoCard;
