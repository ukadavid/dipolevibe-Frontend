import DetailsImage from "../../assets/DetailsImage.png";
DetailsImage
import {motion} from "framer-motion"
import { useInView } from "react-intersection-observer";

export default function CTA() {

  const [ref, inView] = useInView({triggerOnce: true})
    return (
      <div ref={ref} className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <motion.h2
              ref={ref}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 20}}
              transition={{delay: 1, duration: 1}}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Start using our app today.
              </motion.h2>
              <motion.p 
              ref={ref}
              initial={{opacity: 0, y: 30}}
              animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 20}}
              transition={{delay: 2, duration: 1}}
              className="mt-6 text-lg leading-8 text-gray-300">
              Access a suite of powerful tools designed to streamline your workflow. From screen and video recording to lightning-fast transcriptions, our app has you covered. Elevate your efficiency and get more done.
              </motion.p>
              <motion.div 
              ref={ref}
              initial={{opacity: 0, y: 40}}
              animate={{opacity: inView ? 1 : 0, y: inView ? 0 : 20}}
              transition={{delay: 3, duration: 1}}
              className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Get started
                </a>
                <a href="#" className="text-sm font-semibold leading-6 text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </motion.div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
            <motion.img 
            whileHover={{
                scale: 1.05,
                rotate: "2.5deg"
            }}
            transition={{
                duration: 0.25,
                ease: "easeInOut"
            }}
            whileTap={{scale: 1.05,
            rotate: "2.5deg"}}
            className="absolute left-0 top-0 w-[48rem] max-w-none rounded-md" alt="App screenshot"
                width={1824}
                height={1080}
                src={DetailsImage} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  

