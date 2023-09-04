import HeaderPicture from "../../assets/pictureHeader.png";
const Header = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              One video is worth
              <br />a thousand words
            </h1>
            <p className="max-w-xs lg:max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-gray-500 dark:text-gray-400">
              dipoVibe video messaging and transcription cuts off distractions
              to help you work better.
            </p>

            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-full sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              >
                dipoVibe for free
              </a>
            </div>
          </div>
          <div className="lg:mt-0 lg:col-span-5 lg:flex mt-8">
            <img src={HeaderPicture} alt="hero image" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
