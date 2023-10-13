import React, { createContext, useContext, useState } from "react";

// Create a context
export const VideoContext = createContext();

// Create a provider component to set and share the video object
export const VideoProvider = ({ children }) => {
  const [videoObject, setVideoObject] = useState(null);

  return (
    <VideoContext.Provider value={{ videoObject, setVideoObject }}>
      {children}
    </VideoContext.Provider>
  );
};

// Create a custom hook to access the video object
export const useVideo = () => {
  return useContext(VideoContext);
};
