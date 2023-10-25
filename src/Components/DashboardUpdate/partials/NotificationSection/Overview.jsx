const Overview = () => {
  return (
    <div>
      <p className="text-sm text-gray-500 mb-8">Reminder to record</p>
      <div className="rounded-lg w-4/5 overflow-hidden border border-gray-300 p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gray-800 rounded-full"></div>
          <div className="ml-4">
            <p className="font-bold mt-6 text-xl">
              Record a video to add a personal touch to your messages
            </p>
            <p className="text-gray-600 mt-2">
              Add a personal touch to your communication by sending a video.
              Discover all the ways you can use DipoleVibe
            </p>
            <button className=" mt-4 rounded">
              <span className="inline-flex items-center justify-center text-black w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-full sm:w-auto hover:text-black hover:bg-gray-100 focus:ring-4 focus:ring-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:animate-bounce">
                Record now
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
