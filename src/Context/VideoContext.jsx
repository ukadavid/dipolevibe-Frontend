import React, { createContext, useContext, useReducer } from 'react';

const VideoContext = createContext();

// Define the initial state and a reducer
const initialState = {
  video: null, // This will hold the currently displayed video
};

function videoReducer(state, action) {
  switch (action.type) {
    case 'SET_VIDEO':
      return { ...state, video: action.payload };
    default:
      return state;
  }
}

// Create a context provider component
export function VideoProvider({ children }) {
  const [state, dispatch] = useReducer(videoReducer, initialState);

  return (
    <VideoContext.Provider value={{ state, dispatch }}>
      {children}
    </VideoContext.Provider>
  );
}

// Create a custom hook to access the context
export function useVideo() {
  return useContext(VideoContext);
}
