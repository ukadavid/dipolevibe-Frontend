/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Draggable from "react-draggable";
import {
  FaVideo,
  FaPause,
  FaTv,
  FaTrash,
  FaStop,
  FaAdjust,
  FaPaintBrush,
  FaMagic,
  FaVideoSlash
} from "react-icons/fa";
import { stopRecordingAfterOneMinute } from "../../utils/recordingUtils"

let recordedChunks = []; // Initialize recordedChunks

export const RecordingModal = ({ videoRef, startRecording }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal bg-white p-4 shadow-lg justify-center rounded w-280">
        <button className="w-full mx-auto my-4 bg-blue-500 text-white font-bold py-2 px-4 rounded">
          <FaTv className="inline-block mr-2" /> Full Screen
        </button>
        <button className="w-full mx-auto my-4 bg-blue-500 text-white font-bold py-2 px-8 rounded">
          <FaVideo className="inline-block mr-2" /> Video Camera
        </button>
        <button
          onClick={startRecording}
          className=" block w-full mx-auto font-bold bg-green-500 text-white px-4 py-2 rounded text-center"
        >
          Start Recording
        </button>
        <hr className="my-4" />
        <div className="flex justify-between">
          <div className="w-1/3 text-center">
            <span className="bg-blue-500 text-white rounded-full h-10 w-10 inline-flex items-center justify-center">
              <FaMagic />
            </span>
            <p>Effects</p>
          </div>
          <div className="w-1/3 text-center">
            <span className="bg-blue-500 text-white rounded-full h-10 w-10 inline-flex items-center justify-center">
              <FaAdjust />
            </span>
            <p>Blur</p>
          </div>
          <div className="w-1/3 text-center">
            <span className="bg-blue-500 text-white rounded-full h-10 w-10 inline-flex items-center justify-center">
              <FaPaintBrush />
            </span>
            <p>Canvas</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const RecorderComponent = ({ closeScreenModal }) => {
  const videoRef = useRef();
  const [screenRecorder, setScreenRecorder] = useState(null);
  const [screenStream, setScreenStream] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const [cameraStream, setCameraStream] = useState(null);
  const [isVideoOn, setIsVideoOn] = useState(true);

  const [isRecording, setIsRecording] = useState(false);



const startRecording = async () => {
  try {
    setIsRecording(true);

    const newScreenStream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true,
    });

    const newAudioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });

    const audioContext = new AudioContext();
    const source = audioContext.createMediaStreamSource(newAudioStream);
    const destination = audioContext.createMediaStreamDestination();
    source.connect(destination);
    const audioTrack = destination.stream.getAudioTracks()[0];
    newScreenStream.addTrack(audioTrack);

    setScreenStream(newScreenStream); // Use useState to set streams
    setAudioStream(newAudioStream);

    const recorder = new MediaRecorder(
      new MediaStream([...newScreenStream.getTracks()]),
      { mimeType: "video/webm" }
    );

    recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };

    recorder.onstop = () => {
      clearTimeout(stopRecordingAfterOneMinute);
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      const videoURL = URL.createObjectURL(blob);

      // const a = document.createElement("a");
      // a.href = videoURL;
      // a.download = "screenRecording.webm";
      // a.click();
      storeVideoInIndexedDB(blob);

      recordedChunks = [];
      setIsRecording(false);
    };

    setScreenRecorder(recorder);
    recorder.start();

    const newCameraStream = await navigator.mediaDevices.getUserMedia({
      video: isVideoOn, // Use the isVideoOn state here
    });
    setCameraStream(newCameraStream);

    if (isVideoOn) {
      videoRef.current.srcObject = newCameraStream;
      videoRef.current.play();
    }
  } catch (error) {
    console.error(error);
  }
};


const storeVideoInIndexedDB = (blob) => {
  const dbName = "recordingsDB";
  const dbVersion = 1;
  const objectStoreName = "recordings";

  const request = indexedDB.open(dbName, dbVersion);

  request.onupgradeneeded = (event) => {
    const db = event.target.result;

    if (!db.objectStoreNames.contains(objectStoreName)) {
      db.createObjectStore(objectStoreName, { autoIncrement: true });
    }
  };

  request.onsuccess = (event) => {
    const db = event.target.result;

    const transaction = db.transaction(objectStoreName, "readwrite");
    const objectStore = transaction.objectStore(objectStoreName);

    // Add a timestamp to the video object before storing it
    const timestamp = Date.now();
    const videoObject = { blob, timestamp };

    const request = objectStore.add(videoObject);

    request.onsuccess = () => {
      console.log("Video stored in IndexedDB");
      window.location.replace("/views");
      // Stop recording
      stopRecording();
    };

    request.onerror = (error) => {
      console.error("Error storing video in IndexedDB:", error);
    };
  };

  request.onerror = (error) => {
    console.error("Error opening IndexedDB:", error);
  };
};

  let views = "/views";
  const stopRecording = () => {
    console.log("Stop recording called");
    if (screenRecorder && screenRecorder.state !== "inactive") {
      screenRecorder.stop();
      screenStream.getTracks().forEach((track) => track.stop());
      cameraStream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      const blob = new Blob(recordedChunks, { type: "video/webm" });
      recordedChunks = [];
      setIsRecording(false);

      // Clear the timeout that was set in the startRecording() function
      clearTimeout(stopRecordingAfterOneMinute);

      // Store the video in the indexedDB
      storeVideoInIndexedDB(blob);

      // Redirect the user to the views page after one second
      setTimeout(() => {
        console.log("Redirecting...");
        window.location.replace(views);
      }, 1000); 
    }
  };

  const toggleVideo = () => {
    setIsVideoOn((prev) => !prev);

    if (isVideoOn) {
      videoRef.current.srcObject = null;
    } else {
      videoRef.current.srcObject = cameraStream;
    }
  };

  const discardRecording = () => {
    if (screenRecorder && screenRecorder.state !== "inactive") {
      screenRecorder.stop();
      screenStream.getTracks().forEach((track) => track.stop());
      cameraStream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      recordedChunks = [];
      setIsRecording(false);
    }
  };

  return (
    <Draggable>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        {isRecording ? (
          <>
            <video
              // className="rounded-full "
              style={{ height: "150px", width: "150px" }}
              ref={videoRef}
              autoPlay
              playsInline
              muted
            ></video>
            <div className="flex mt-4 border border-sky-blue-500 bg-gray-900 p-2">
              <button className="mx-2 text-white" >
                <FaPause />
              </button>
              <button
                onClick={toggleVideo}
                className="mx-2 text-white"
              >
                {isVideoOn ? (
                  <FaVideo className="inline-block mr-2" />
                ) : (
                  <FaVideoSlash className="inline-block mr-2" />
                )}{" "}
              </button>

              <button className="mx-2 text-white" onClick={discardRecording}>
                <FaTrash />
              </button>
              <button onClick={stopRecording} className="mx-2 text-white">
                <FaStop />
              </button>
            </div>
          </>
        ) : (
          <RecordingModal
            videoRef={videoRef}
            startRecording={startRecording}
            stopRecording={stopRecording}
          />
        )}
      </div>
    </Draggable>
  );
};