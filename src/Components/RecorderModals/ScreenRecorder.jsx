import { ReactMediaRecorder } from "react-media-recorder";
import { useState, useRef } from "react";
import VideoPreview from "../VideoPreviewer/VideoPreviewer";
import { FaVideo, FaTv, FaVideoSlash } from "react-icons/fa";

const VideoRecorderModal = ({ closeVideoModal }) => {
  const [screenRecording, setScreenRecording] = useState(null);
  const [cameraRecording, setCameraRecording] = useState(null);
  const [isScreenRecording, setIsScreenRecording] = useState(false);
  const [isCameraRecording, setIsCameraRecording] = useState(false);
  const videoRef = useRef();
  const canvasRef = useRef();
  const screenRecorderRef = useRef();
  const cameraRecorderRef = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleScreenStop = (blob) => {
    setScreenRecording(blob);
    setIsScreenRecording(false);
  };

  const handleCameraStop = (blob) => {
    setCameraRecording(blob);
    setIsCameraRecording(false);
  };

  const toggleRecording = () => {
    if (!isScreenRecording && !isCameraRecording) {
      screenRecorderRef.current.startRecording();
      cameraRecorderRef.current.startRecording();
      setIsScreenRecording(true);
      setIsCameraRecording(true);
    } else {
      screenRecorderRef.current.stopRecording();
      cameraRecorderRef.current.stopRecording();
      setIsScreenRecording(false);
      setIsCameraRecording(false);
    }
  };

  const handleFullScreen = () => {
    // TODO: Implement full screen functionality
  };

  const handleHDCamera = () => {
    // TODO: Implement HD camera functionality
  };

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setDragOffset({
      x: event.clientX - canvasRef.current.offsetLeft,
      y: event.clientY - canvasRef.current.offsetTop,
    });
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      canvasRef.current.style.left = event.clientX - dragOffset.x + "px";
      canvasRef.current.style.top = event.clientY - dragOffset.y + "px";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="modal-bg absolute inset-0 bg-black opacity-90"></div>
      <div
        className="modal-content z-10 bg-white p-4 rounded-lg shadow-lg"
        style={{
          zIndex: 9999,
          cursor: "move",
          resize: "both",
          overflow: "auto",
          position: "absolute",
          width: "400px",
        }}
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <div className="flex justify-end">
          <button
            onClick={closeVideoModal}
            className="text-gray-700 hover:text-gray-900"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-4 mb-8 space-x-4">
          <ReactMediaRecorder
            video
            screen
            render={({ status, startRecording, stopRecording, previewStream }) => (
              <div className="text-center">
                {status === "idle" ? (
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded flex items-center" onClick={() => {
                    startRecording();
                    setIsScreenRecording(true);
                  }}>
                    <FaTv className="mr-2" /> Full Screen
                  </button>
                ) : (
                  <>
                    <VideoPreview stream={previewStream} />
                    <button onClick={() => {
                      stopRecording();
                      setIsScreenRecording(false);
                    }}>
                      <FaVideoSlash />
                    </button>
                  </>
                )}
              </div>
            )}
            onStop={handleScreenStop}
            ref={screenRecorderRef}
          />
          <ReactMediaRecorder
            video
            render={({ status, startRecording, stopRecording, previewStream }) => (
              <div className="text-center">
                {status === "idle" ? (
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded flex items-center" onClick={() => {
                    startRecording();
                    setIsCameraRecording(true);
                  }}>
                    <FaVideo className="mr-2" /> Video Recording
                  </button>
                ) : (
                  <>
                    {isCameraRecording && (
                      <VideoPreview stream={previewStream} />
                    )}
                    <button onClick={() => {
                      stopRecording();
                      setIsCameraRecording(false);
                    }}>
                      <FaVideoSlash />
                    </button>
                  </>
                )}
              </div>
            )}
            onStop={handleCameraStop}
            ref={cameraRecorderRef}
          />
        </div>
        {screenRecording && (
          <div>
            <h2>Screen Recording</h2>
            <video src={screenRecording} controls autoPlay />
          </div>
        )}
        {cameraRecording && (
          <div>
            <h2>Camera Recording</h2>
            <video src={cameraRecording} controls autoPlay />
          </div>
        )}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded flex items-center" onClick={toggleRecording}>Start to record</button>
      </div>
    </div>
  );
};

export default VideoRecorderModal;
