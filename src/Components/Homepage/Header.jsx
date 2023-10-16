import HeaderPicture from "../../assets/pictureHeader.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import "./css/animate.css";
const Header = () => {
  const [ref, inView] = useInView({triggerOnce: true})
  return (
    <>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="grid max-w-screen-xl px-4 pt-24 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <motion.h1
            ref={ref}
            initial={{opacity: 0, y: 50}}
            animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 20}}
            transition={{delay: 0.1, duration: 0.5}}
            className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              One video is worth
              <br />a thousand words
            </motion.h1>
            <motion.p 
            ref={ref}
            initial={{opacity: 0, y: 50}}
            animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 20}}
            transition={{delay: 0.2, duration: 0.5}}
            className="max-w-xs lg:max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-500 dark:text-gray-400">
              DipoVibe empowers you to capture video, audio, and screen
              recordings effortlessly, allowing seamless sharing. Our advanced
              transcription feature eliminates distractions, enabling you to
              focus and work more efficiently.
            </motion.p>

            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <motion.a
              ref={ref}
              initial={{opacity: 0, y: 50}}
              animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 20}}
              transition={{delay: 0.3, duration: 0.5}}
                href="#"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-full sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:animate-bounce"
              >
                dipoVibe for free
              </motion.a>
            </div>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex mt-8">
            <motion.div
              initial={{
                rotate: "0deg",
                scale: 0,
              }}
              animate={{
                rotate: "360deg",
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <img src={HeaderPicture} alt="hero image" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
