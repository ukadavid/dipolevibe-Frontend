import { useState } from "react";
import CameraIcon from "../../assets/iconCamera.png";
import RobotIcon from "../../assets/iconRobot.png";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white">
        <header className="relative z-50">
          <nav
            className="flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only"></span>
                <p className="font-semibold">dipoleVibe</p>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={toggleMobileMenu}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 ${mobileMenuOpen ? "hidden" : "block"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${mobileMenuOpen ? "block" : "hidden"}`}
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
            <div className="hidden lg:flex lg:gap-x-12">
              <a
                href="/"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Home
              </a>
              <a
                href="/signup"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Register
              </a>
              <a
                href="/login"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Login
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
                onClick={openModal}
              >
                <img className="w-1/2" src={CameraIcon} alt="Camera Icon" />{" "}
                <span aria-hidden="true"></span>
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                <img className="w-1/2" src={RobotIcon} alt="Robot Icon" />{" "}
                <span aria-hidden="true"></span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden" role="dialog" aria-modal="true">
              <div className="fixed inset-0 z-50"></div>
              <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">dipoleVibe</span>
                  </a>
                  <button
                    type="button"
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={toggleMobileMenu}
                  >
                    <span className="sr-only">Close menu</span>
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
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      <a
                        href="/"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Home
                      </a>
                      <a
                        href="/signup"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Register
                      </a>
                      <a
                        href="/login"
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        Login
                      </a>
                    </div>
                    <div className="py-6">
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900"
                        onClick={openModal}
                      >
                        <img
                          className="h-12 w-auto"
                          src={CameraIcon}
                          alt="Camera Icon"
                        />{" "}
                        <span aria-hidden="true"></span>
                      </a>
                      <a
                        href="#"
                        className="text-sm font-semibold leading-6 text-gray-900"
                      >
                        <img className="h-12 w-auto" src={RobotIcon} alt="" />{" "}
                        <span aria-hidden="true"></span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="modal-bg absolute inset-0 bg-black opacity-80"></div>
          <div className="modal-content z-10 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex justify-end">
              <button
                onClick={closeModal}
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
              <button className="bg-gray-900 hover:bg-gray-500 text-white px-4 py-2 rounded">
                Record Video
              </button>
              <button className="bg-gray-900 hover:bg-gray-500 text-white px-4 py-2 rounded">
                Stop Video
              </button>
              <button className="bg-gray-900 hover:bg-gray-500 text-white px-4 py-2 rounded">
                Transcribe Video
              </button>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-900 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
