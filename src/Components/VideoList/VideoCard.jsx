import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'; 
import  CardContext  from './CardContext';

function VideoCard({ video, index }) {
  const [hovered, setHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = `video-${index}`; // Generate a unique identifier based on the index

  const toggleControls = () => {
    setHovered(!hovered);
  };

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
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
      <video
        id={videoId} // Use the unique identifier for the video element
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
      <CardContext/>

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
            console.log(videoId);
            const videoElement = document.getElementById(videoId);
            videoElement.play();
            setIsPlaying(true);
          }}
        >
          <FontAwesomeIcon icon={faPlay} style={{ color: 'white' }} />
        </div>
      )}
     </div>
    </div>
  );
}

export default VideoCard;
