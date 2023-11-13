/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { FaCheckCircle } from "react-icons/fa";

const ResetSuccess = () => {
  return (
    <div className="h-screen flex items-center text-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full text-center sm:max-w-sm">
        <FaCheckCircle color="#4CAF50" size={100} className="mx-auto mb-8" />

        <h1 className="text-2xl dark:text-black font-bold mb-4 text-center">
          Verification Successful
        </h1>

        <div className="mt-6 text-center">
          <a
            href="/login"
            className="block w-full bg-gray-600 text-white text-center py-2 rounded-md font-semibold hover:bg-gray-500 focus:ring focus:ring-indigo-200 focus:ring-offset-2"
          >
            Click to login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResetSuccess;
