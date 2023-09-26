import { useState, useEffect } from "react";
import NavBar from "../Homepage/NavBar";
import Footer from "../Homepage/Footer";

const RecordingSection = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [mostRecentVideo, setMostRecentVideo] = useState(null);
  const [db, setDb] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!file) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('video', file);

    console.log(formData.title, formData.video, formData.description);

    // try {
    //   const response = await fetch('YOUR_BACKEND_UPLOAD_URL', {
    //     method: 'POST',
    //     body: formData,
    //   });

    //   if (response.ok) {
    //     console.log('Video uploaded successfully!');
    //   } else {
    //     console.error('Error uploading video:', response.statusText);
    //   }
    // } catch (error) {
    //   console.error('Error uploading video:', error);
    // }
  };

  const handleTranscribe = () => {
    // Add code for transcribe functionality
  };

  const handleDownload = () => {
    if (!db) return;
    const transaction = db.transaction(["recordings"], "readonly");
    const objectStore = transaction.objectStore("recordings");
    const request = objectStore.get(1); // Change 1 to the ID of the video file you want to download
    request.onsuccess = (event) => {
      const blob = event.target.result;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "video.mp4"; // Change the filename to the name you want to give the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };
  };

  useEffect(() => {
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
      setDb(db);

      const transaction = db.transaction(["recordings"], "readonly");
      const objectStore = transaction.objectStore("recordings");
      const request = objectStore.getAll(); // Get all videos
      request.onsuccess = (event) => {
        const videos = event.target.result;
        if (videos.length > 0) {
          videos.sort((a, b) => b.timestamp - a.timestamp);
          setMostRecentVideo(videos[0]); // Set the most recent video in state
        }
      };
    };
  }, []);

  const paragraphs = ["Paragraph 1", "Paragraph 2", "Paragraph 3"];

  return (
    <>
      <div 
      className="bg-gray-50 dark:bg-gray-800"
      >
        <NavBar />
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row p-4 py-16">
          <div className="md:w-3/5 p-4 mb-8 pt-20 pb-8">
            <form
              onSubmit={handleSubmit}
              className="p-6 text-white border shadow-md"
            >
              <div className="mb-4 ">
                <label htmlFor="title" className="block font-bold mb-1">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block font-bold mb-1">
                  Description
                </label>
                <textarea
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                  className="w-full p-2 border rounded"
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="file" className="block font-bold mb-1">
                  Video Upload
                </label>
                {mostRecentVideo ? (
                  <video
                    width="320"
                    height="240"
                    controls
                    src={URL.createObjectURL(mostRecentVideo.blob)}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <input
                    type="file"
                    id="file"
                    onChange={handleFileChange}
                    className="w-full p-2 border rounded"
                    accept=".mp4, .avi, .mkv"
                    required
                  />
                )}
              </div>
              <div className="flex justify-between mt-4">
      <button
        type="submit"
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Publish
      </button>
      <button
        onClick={handleTranscribe}
        className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded"
      >
        Transcribe
      </button>
      <button
        onClick={handleDownload}
        className="bg-indigo-500 hover:bg-indigo-700 text-white px-4 py-2 rounded"
      >
        Download
      </button>
    </div>
            </form>
          </div>
          <div className="md:w-2/5 text-white p-16">
            <h2 className="mb-8 font-bold">Open Transcription Links</h2>
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default RecordingSection;
