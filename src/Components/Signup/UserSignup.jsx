import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";

function SignUp() {
  const { registerConfig } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
    };

    registerConfig(formData);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-2 text-center dark:text-white text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register your account
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block dark:text-white text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full dark:text-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  onChange={handleEmailChange}
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block dark:text-white text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>

              <div className="">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full dark:text-white rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full dark:text-white justify-center rounded-md bg-gray-700  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-5 text-center dark:text-white text-sm text-gray-500">
            Are you an Admin?{" "}
            <a
              href="/adminsignup"
              className="font-semibold dark:text-white leading-6 text-gray-900 hover:text-gray-500"
            >
              Sign up here
            </a>
          </p>
          <p className="text-center text-sm text-gray-500">
            <a
              href="/"
              className="font-semibold dark:text-white leading-6 text-gray-900  hover:text-gray-500"
            >
              Back to home
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default SignUp;
