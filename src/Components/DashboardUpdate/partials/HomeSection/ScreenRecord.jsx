import { useState } from "react";
import { RecorderComponent } from "../../../RecorderModals/RecorderModal";

function ScreenRecord() {
  const [hoveredRecord, setHoveredRecord] = useState(false);
  const [hoveredMeet, setHoveredMeet] = useState(false);

  const [isScreenModalOpen, setScreenModalOpen] = useState(false);

  const openScreenModal = () => {
    setScreenModalOpen(true);
  };

  const closeScreenModal = () => {
    setScreenModalOpen(false);
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-12 xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="flex justify-center items-center px-3 flex-col sm:flex-row">
        <div className="flex-1 p-4">
          <div className="mb-4 ">
            <h2 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-1">
              Schedule your meeting and record videos{" "}
            </h2>
            <p className="text-sm text-gray-600">
              Meet your friends and collaborate
            </p>
          </div>
          <div className="mb-4 flex items-center">
            <div className="relative">
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-700 mr-4"
                data-id="uploadRecommendationBannerBtn"
                onMouseEnter={() => setHoveredMeet(true)}
                onMouseLeave={() => setHoveredMeet(false)}
                disabled
              >
                <span className="flex items-center">
                  <i
                    className="fa fa-video-camera"
                    style={{ fontSize: "1.5rem" }}
                  />
                </span>
              </button>
              {hoveredMeet && (
                <span className=" ml-2 absolute bg-blue-300 text-sm font-semibold p-1 whitespace-nowrap rounded-full top-10 left-8">
                  Schedule Meeting
                </span>
              )}
            </div>
            <div className="relative">
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-700 ml-4"
                data-id="uploadRecommendationBannerBtn"
                onClick={openScreenModal}
                onMouseEnter={() => setHoveredRecord(true)}
                onMouseLeave={() => setHoveredRecord(false)}
              >
                <span className="flex items-center">
                  <i
                    className="fas fa-desktop"
                    style={{ fontSize: "1.5rem" }}
                  />
                </span>
              </button>
              {hoveredRecord && (
                <span className=" ml-2 absolute bg-blue-300 text-sm font-semibold p-1 whitespace-nowrap rounded-full top-10 left-8">
                  Screen Record
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex-1 p-4">
          <div className="aspect-w-16 aspect-h-9 w-full h-64">
            <div className="skeleton-loader"></div>
            <iframe
              src="https://player.vimeo.com/video/856763890?background=1"
              frameBorder="0"
              title="Upload an existing video"
              data-airgap-id="0"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
      {/* Modal */}
      {isScreenModalOpen && (
        <RecorderComponent closeScreenModal={closeScreenModal} />
      )}
    </div>
  );
}

export default ScreenRecord;
