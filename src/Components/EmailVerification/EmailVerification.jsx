import { FaCheckCircle } from "react-icons/fa";

const EmailVerification = () => {
  return (
    <div className="h-screen flex items-center text-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full text-center sm:max-w-sm">
        <FaCheckCircle color="#4CAF50" size={100} className="mx-auto mb-8" />

        <h1 className="text-2xl dark:text-black font-bold mb-4 text-center">
          Login to your email account to verify your account
        </h1>
      </div>
    </div>
  );
};

export default EmailVerification;
