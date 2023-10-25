import { useState } from "react";
import { FaSlack, FaGoogle, FaTrash } from "react-icons/fa";

const SettingsSection = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUploadedImage(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-bold">My account</h2>
        <p className="text-sm text-gray-800 my-4">Update your profile</p>
      </div>

      <div className="border-b-2 pb-8">
        <form className="w-full md:w-1/2 mt-8">
          <div className="flex flex-col md:flex-row items-center mb-8">
            {uploadedImage ? (
              <span className="relative">
                <FaTrash
                  className="absolute top-7 right-0 h-4 w-4 m-2 text-red-500 cursor-pointer"
                  onClick={() => setUploadedImage(null)}
                />
                <img
                  src={uploadedImage}
                  alt="Uploaded"
                  className="rounded-full w-16 h-16 md:mr-4 mb-4 md:mb-0"
                />
              </span>
            ) : (
              <span className="relative">
                <FaTrash
                  className="absolute top-7 right-0 h-4 w-4 m-2 text-red-500 cursor-pointer"
                  onClick={() => setUploadedImage(null)}
                />
                <span className="rounded-full text-center w-16 h-16 flex items-center justify-center bg-gray-800 text-white text-lg font-bold mb-4 md:mr-4">
                  TU
                </span>
              </span>
            )}

            <label htmlFor="imageInput" className="cursor-pointer">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <input
                type="file"
                id="imageInput"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
          <div className="mb-4">
            <label htmlFor="firstName" className="block mb-1">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName" className="block mb-1">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="flex items-center gap-2 md:flex-row md:justify-start">
            <button
              type="submit"
              className="bg-blue-500 w-1/4 text-white py-2 px-4 rounded  md:mr-2"
              onClick={handleFormSubmit}
            >
              Save
            </button>
            <button
              type="button"
              className="bg-gray-300 w-1/4 text-gray-800 py-2 px-4 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      <div>
        <h3 className="text-2xl font-bold mt-16">Contact Info</h3>
        <p className="mt-4 mb-16">
          Access your account with any email address, or by connecting an
          account.
        </p>
        <div className="flex flex-col md:flex-row gap-5 border-b-2 pb-8">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <form>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded-md"
                />
              </div>
              <div className="flex gap-2 items-center md:flex-row md:justify-start">
                <button
                  type="submit"
                  className="bg-blue-500 w-1/4 text-white py-2 px-4 rounded md:mr-2"
                  onClick={handleFormSubmit}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-300 text-gray-800 w-1/4  py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
          <div className="flex gap-2 items-center flex-col md:w-1/2">
            <button
              type="submit"
              className="bg-blue-500 w-1/2 flex items-center justify-center text-white py-2 px-4 rounded md:mb-4"
              onClick={handleFormSubmit}
            >
              Connect with Slack <FaSlack className="ml-2" />
            </button>
            <button
              type="submit"
              className="bg-blue-500 flex w-1/2 items-center justify-center text-white py-2 px-4 rounded"
              onClick={handleFormSubmit}
            >
              Connect with Google <FaGoogle className="ml-2" />
            </button>
          </div>
        </div>
        <div>
          <h3 className="mt-16">Delete my account</h3>
          <button
            type="submit"
            className="bg-red-500 mt-4 text-white py-2 px-4 rounded"
            onClick={handleFormSubmit}
          >
            Delete my Account
          </button>
        </div>
      </div>
    </>
  );
};

export default SettingsSection;
