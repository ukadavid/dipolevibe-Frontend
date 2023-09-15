import { useEffect, useRef } from 'react';

const VideoPreview = ({ stream }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.srcObject = stream;
    }
  }, [stream]);

  return <video ref={videoRef} autoPlay muted />;
};

export default VideoPreview;
