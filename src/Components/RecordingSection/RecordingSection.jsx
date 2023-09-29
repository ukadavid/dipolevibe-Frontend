import { useState} from "react";
import NavBar from "../Homepage/NavBar";
import Footer from "../Homepage/Footer";

const RecordingSection = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

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
                  Summary
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
                  <input
                    type="file"
                    id="file"
                    onChange={handleFileChange}
                    className="w-full p-2 border rounded"
                    accept=".mp4, .avi, .mkv"
                    required
                  />
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
