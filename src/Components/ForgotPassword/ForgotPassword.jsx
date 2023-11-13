import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";

const ForgotPassword = () => {
  const { EmailResetConfig } = useAuth();
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailData = {
      email,
    };
    EmailResetConfig(emailData);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage:
          'url("  https://images.unsplash.com/photo-1632454005865-1ea2afe2074f?auto=format&fit=crop&q=80&w=1528&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
      }}
    >
      <a href="/" className="mb-4">
        <span className="font-medium text-sm text-black py-1 px-3 w-8 h-8 flex items-center justify-center bg-slate-700 hover:bg-slate-200 dark:text-white dark:bg-slate-700 dark:hover:bg-slate-600/80 rounded-full">
          Dip <span className="text-white dark:text-gray-900 mx-0.5">olev</span>
          ibe
        </span>
      </a>
      <p className="mb-8">
        Enter the email address associated with your account <br></br> and we
        will send you a link to reset your password
      </p>

      <div className="max-w-md w-full bg-white py-8 px-4 rounded-lg  sm:px-10">
        <h2 className="text-center text-2xl font-bold leading-9 text-gray-900 mb-6">
          Input your Email Address
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={handleEmailChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:bg-white dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Submit
            </button>
          </div>
        </form>
        <p className="mt-6 text-center">
          Don&apos;t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
