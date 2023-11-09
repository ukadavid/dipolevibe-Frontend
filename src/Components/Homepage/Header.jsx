import HeaderPicture from "../../assets/pictureHeader.png";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RecorderComponent } from "../RecorderModals/RecorderModal";
import { Link } from "react-router-dom";

import "./css/animate.css";

const Header = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  const [isScreenModalOpen, setScreenModalOpen] = useState(false);

  const openScreenModal = () => {
    setScreenModalOpen(true);
  };

  const closeScreenModal = () => {
    setScreenModalOpen(false);
  };
  return (
    <>
      <div className="relative overflow-hidden bg-white">
        <div className="pt-40 mx-auto xl:gap-0 lg:pt-50 lg:pb-40">
          <div className="relative items-center justify-between lg:flex lg:px-20">
            <div className="mt-4xl w-full lg:w-0.9/2">
              <div className="flex justify-center mb-8 lg:justify-start">
                <div className="relative px-3 py-1 text-sm leading-6 text-gray-600 rounded-full ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Want to catch up with our story?
                  <Link
                    href="#Stories"
                    className="mx-1 font-semibold text-blue-500"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    Read more
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
              <div className="text-center lg:text-left">
                <motion.h1
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                  className="text-4xl font-semibold leading-10 tracking-tight text-gray-900 lg:text-5xl"
                >
                  Record your next big thing
                </motion.h1>

                <motion.p
                  ref={ref}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="px-5 mt-6 leading-8 text-gray-600 lg:px-0"
                >
                  DipoVibe empowers you to capture video, audio, and screen
                  recordings effortlessly, allowing seamless sharing. <br /> Our
                  advanced transcription feature eliminates distractions,
                  enabling you to focus and work more efficiently.
                </motion.p>

                <div className="flex items-center justify-center mt-10 lg:justify-start gap-x-6">
                  <motion.p
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    href="#"
                    onClick={openScreenModal}
                    className="flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-500 rounded-md shadow-sm cursor-pointer"
                  >
                    Record video for free
                  </motion.p>
                </div>
              </div>
            </div>

            <div className="flex justify-center w-full lg:w-1/2">
              <img
                src={HeaderPicture}
                alt="hero image"
                className="w-full h-auto mt-10 mt-7xl lg:mt--10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isScreenModalOpen && (
        <RecorderComponent closeScreenModal={closeScreenModal} />
      )}
    </>
  );
};

export default Header;
