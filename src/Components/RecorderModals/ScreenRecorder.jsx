/* eslint-disable react/prop-types */
import { ReactMediaRecorder } from "react-media-recorder";
import VideoPreview from "../VideoPreviewer/VideoPreviewer";
import axios from "axios";

const ScreenRecorderModal = ({ closeScreenModal }) => {

  const handleTranscription = async (mediaBlobUrl) => {
    try {
      const response = await fetch(mediaBlobUrl);
      const blob = await response.blob();
      const formData = new FormData();
      formData.append("file", blob, "recording.mp4");
  
      const result = await axios.post("http://localhost:5000/transcribe/transcribe", formData);
      console.log(result.data.transcript);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="modal-bg absolute inset-0 bg-black opacity-90"></div>
      <div className="modal-content z-10 bg-white p-4 rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button
            onClick={closeScreenModal}
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
            screen
            render={({
              status,
              mediaBlobUrl,
              startRecording,
              stopRecording,
              previewStream,
            }) => (
              <div>
                {status === "idle" && (
                  <button
                    className="bg-gray-900 hover:bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={startRecording}
                  >
                    Start Recording
                  </button>
                )}
                {status === "recording" && (
                  <button
                    className="bg-gray-900 hover:bg-gray-500 text-white px-4 py-2 rounded"
                     onClick={() => {
                  stopRecording();
                  handleTranscription(mediaBlobUrl);}}
                  >
                    Stop Recording
                  </button>
                )}
                {mediaBlobUrl && (
                  <div className="max-w-screen-md mx-auto">
                    <video
                      src={mediaBlobUrl}
                      controls
                      autoPlay
                      loop
                      className="w-full"
                    />
                  </div>
                )}
                {status === "recording" && (
                  <VideoPreview stream={previewStream} />
                )}
                {mediaBlobUrl && (
                  <a
                    className="text-gray-900 hover:underline"
                    href={mediaBlobUrl}
                    download="screen_recording.mp4"
                  >
                    Download Recording
                  </a>
                )}
              </div>
            )}
          />
        </div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={closeScreenModal}
            className="px-4 py-2 bg-gray-500 hover:bg-gray-900 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScreenRecorderModal;
