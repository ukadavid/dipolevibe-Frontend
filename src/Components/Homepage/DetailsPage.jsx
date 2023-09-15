import DetailsImage from "../../assets/DetailsImage.png";
import VideoIcon from "../../assets/VideoIcon.png";
import { motion } from "framer-motion";

const DetailsPage = () => {
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-16 mx-auto lg:px-6">
        {/* Row */}
        <motion.div className="items-center lg:grid lg:grid-cols-2 xl:gap-16" 
          initial={{ x: -500, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}>
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <img src={DetailsImage} alt="Video Call UI" />
          </div>
        </motion.div>
        {/* Row */}
        <div className="items-center lg:grid lg:grid-cols-2 pt-5 sm:gap-4">
          <div className="hidden w-full rounded-lg lg:mb-0 lg:flex"> </div>
          <motion.div 
            className="text-gray-500 lg:relative lg:bottom-12 lg:z-30 bg-white rounded-xl right-40 sm:text-lg dark:text-gray-400"
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-16">
              <h2 className="mb-4 text-3xl text-black-500 font-extrabold tracking-tight dark:text-black flex items-center">
                <img
                  className="h-8 w-auto mr-2"
                  src={VideoIcon}
                  alt="Video Icon"
                />
                Lighting fast recording
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Easy record your screen and camera on any device using Vibe
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </>
  );
};

export default DetailsPage;
