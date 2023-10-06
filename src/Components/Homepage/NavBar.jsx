import { useState } from "react";
import {  FaDesktop } from "react-icons/fa";
import {RecorderComponent} from "../RecorderModals/RecorderModal";


const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [isScreenModalOpen, setScreenModalOpen] = useState(false);


  // toggle menu section
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  const openScreenModal = () => {
    setScreenModalOpen(true);
  };

  const closeScreenModal = () => {
    setScreenModalOpen(false);
  };


  return (
    <>
      <div>
        <header className="relative z-10">
          <nav
            className="fixed bg-white bg-opacity-90 top-0 left-0 right-0 z-10 flex items-center justify-between p-6 lg:px-8"
            aria-label="Global"
          >
            <div className="flex lg:flex-1">
              <a href="/" className="-m-1.5 p-1.5">
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
                className="text-sm hover:text-blue-500 transition font-semibold leading-6 text-gray-900"
              >
                Home
              </a>
              <a
                href="/signup"
                className="text-sm hover:text-blue-500 transition font-semibold leading-6 text-gray-900"
              >
                Register
              </a>
              <a
                href="/login"
                className="text-sm hover:text-blue-500 transition font-semibold leading-6 text-gray-900"
              >
                Login
              </a>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <a
                href="#"
                className="text-sm hover:text-blue-500 transition font-semibold leading-6 text-gray-900"
                onClick={openScreenModal}
              >
                <FaDesktop /> <span aria-hidden="true"></span>
              </a>
            </div>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden" role="dialog" aria-modal="true">
              <div className="fixed inset-0 z-10"></div>
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
                        onClick={openScreenModal}
                      >
                        <FaDesktop /> <span aria-hidden="true"></span>
                      
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
      {isScreenModalOpen && <RecorderComponent closeScreenModal={closeScreenModal} />}
    </> 
  );
};

export default NavBar;
