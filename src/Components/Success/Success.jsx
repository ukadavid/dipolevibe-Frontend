/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { useLocation, useParams } from "react-router-dom";
import { apiPost } from "../../Context/Api/Axios";
import { toast } from "react-toastify";
import Preloader from "../Preloader/Preloader";
const Success = () => {
  const [verificationStatus, setVerificationStatus] = useState();
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  const verifyToken = async () => {
    try {
      const response = await apiPost(`/User/verify-email${location.search}`);
      const data = response.data;
      setVerificationStatus(data);
      setLoading(false);
      toast(verificationStatus);
    } catch (error) {
      console.error(error.response.data);
      setVerificationStatus(error.response.data);
      setLoading(false);
      toast(verificationStatus);
    }
  };

  useEffect(() => {
    verifyToken();
  }, [verificationStatus]);
  return loading ? (
    <Preloader />
  ) : (
    <div className="h-screen flex items-center text-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full text-center sm:max-w-sm">
        {verificationStatus == "Email Verified Successfully" ? (
          <FaCheckCircle color="#4CAF50" size={100} className="mx-auto mb-8" />
        ) : (
          <FaExclamationCircle
            color="#FF0000"
            size={100}
            className="mx-auto mb-8"
          />
        )}

        <h1 className="text-2xl dark:text-black font-bold mb-4 text-center">
          {verificationStatus === "Email Verified Successfully"
            ? "Verification Successful"
            : "Verification Failed"}
        </h1>

        <div className="mt-6 text-center">
          {verificationStatus == "Email Verified Successfully" ? (
            <a
              href="/login"
              className="block w-full bg-gray-600 text-white text-center py-2 rounded-md font-semibold hover:bg-gray-500 focus:ring focus:ring-indigo-200 focus:ring-offset-2"
            >
              Click to login
            </a>
          ) : (
            <p>Check your Email to verify your account</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Success;
