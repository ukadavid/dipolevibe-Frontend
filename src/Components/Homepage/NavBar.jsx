import { useState } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // toggle menu section
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToHome = () => {
    
    scroll.scrollTo("home", {
      smooth: true,
      duration: 500,
    });
    toggleMobileMenu(); // Close mobile menu after clicking on the link
  };

  const scrollToFeatures = () => {
    
    scroll.scrollTo("features", {
      smooth: true,
      duration: 500,
    });
    toggleMobileMenu(); // Close mobile menu after clicking on the link
  };

  const scrollToPricing = () => {
    console.log("scroll to pricing")
    scroll.scrollTo("pricing", {
      smooth: true,
      duration: 500,
    });
    toggleMobileMenu(); // Close mobile menu after clicking on the link
  };

  return (
    <>
      <div>
        <header className="relative z-10">
          <nav
            className="fixed top-0 left-0 right-0 px-8 py-5 bg-white shadow lg:py-8 lg:px-12"
            aria-label="Global"
          >
            <div className="flex items-center justify-between">
              {/*  */}
              <div className="flex lg:flex-1">
                <Link className="ml-10" to="/">
                  <span className="flex items-center justify-center w-8 h-8 px-3 py-1 text-sm font-medium text-right text-black rounded-full bg-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600/80">
                    Dip <span className="text-white mx-0.5">olev</span>ibe
                  </span>
                </Link>
              </div>

              {/*  */}
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

              {/*  */}
              <div className="items-center hidden text-sm lg:flex lg:gap-x-12 lg:flex-2 lg:justify-end ">
                <ScrollLink 
                className="text-gray-900 hover:text-gray-600" 
                to="home"
                spy={true}
                smooth={true}
                offset={-50} 
                duration={500}
                onClick={scrollToHome}
                >
                  Home
                </ScrollLink>
                <ScrollLink 
                className="text-gray-900 hover:text-gray-600" 
                to="features"
                spy={true}
                smooth={true}
                offset={-50} 
                duration={500}
                onClick={scrollToFeatures}
                >
                  Features
                </ScrollLink>
                <ScrollLink
                 className="text-gray-900 hover:text-gray-600"
                 to="pricing"
                 spy={true}
                 smooth={true}
                 offset={-50} 
                 duration={500}
                 onClick={scrollToPricing}
                 >
                  Pricing
                </ScrollLink>
                <Link
                  className="text-gray-900 hover:text-gray-600"
                  to="/videolist"
                >
                  Video Stash
                </Link>
                <Link className="text-white bg-blue-500 btn" to="/signup">
                  Get started
                </Link>
              </div>
            </div>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden" role="dialog" aria-modal="true">
              <div className="fixed inset-0 z-10"></div>
              <div className="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
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
                      className="w-6 h-6"
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
                <div className="flow-root mt-6">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="py-6 flex-col space-y-2">
                      <Link
                        className="text-gray-900 hover:text-gray-600"
                        to="/"
                      >
                        Home
                      </Link>
                      <Link
                        className="text-gray-900 hover:text-gray-600 block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                        to="/"
                      >
                        Features
                      </Link>
                      <Link
                        className="text-gray-900 hover:text-gray-600 block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                        to="/"
                      >
                        Pricing
                      </Link>
                      <Link
                        className="text-gray-900 hover:text-gray-600 block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-gray-900 rounded-lg hover:bg-gray-50"
                        to="/videolist"
                      >
                        Video Stash
                      </Link>
                      <Link
                        className="text-white bg-blue-500 btn "
                        to="/signup"
                      >
                        Get started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default NavBar;
