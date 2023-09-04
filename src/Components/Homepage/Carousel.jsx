/* eslint-disable react/no-unescaped-entities */
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TestimonialCarousel = () => {
  return (
    <section className="bg-gray-900 dark:bg-gray-900 ">

        <div className="lg:py-8">
        <h2 className="text-center text-white text-3xl font-bold">Testimonials</h2>

      <Carousel
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        stopOnHover={false}
      >
        <div className="relative isolate overflow-hidden dark:bg-gray-900 px-6 py-8 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>
                  “Our team has been using this video messaging and AI transcription platform for a while now, and it has truly transformed the way we collaborate. The transcription service is lightning fast and incredibly precise, allowing us to quickly access and search through our meeting notes. Plus, the video messaging feature has improved our remote communication, making it feel like we're all in the same room. It's a game-changer for productivity and teamwork.”
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-white">Michael Chen
</div>
                  <svg
                    viewBox="0 0 2 2"
                    width="3"
                    height="3"
                    aria-hidden="true"
                    className="fill-white"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="text-white">Team Lead</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-8 sm:py-32 lg:px-8">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"></div>
          <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
           
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
                <p>
                  “Our experience with the video messaging and AI transcription platform has been nothing short of amazing. It has become an indispensable tool for our remote team collaboration. The AI transcription service is incredibly efficient, turning our meetings and discussions into searchable, shareable, and actionable content within minutes.
                </p>
              </blockquote>
              <figcaption className="mt-10">
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-white">Jennifer Lee</div>
                  <svg
                    viewBox="0 0 2 2"
                    width="3"
                    height="3"
                    aria-hidden="true"
                    className="fill-white"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <div className="text-white">Project Manager</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>

      </Carousel>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
