import Datepicker from "../../navComponent/Datepicker";
import { FaAngleDown, FaArrowRight } from "react-icons/fa";
import "./Analytics.css";
import WorldMap from "./WorldMap";

const AnalyticsComponent = () => {
  return (
    <div>
      <h2 className=" text-2xl font-bold mb-2 md:mb-0">Analytics</h2>
      <div className="flex gap-2 flex-col md:flex-row items-center my-4">
        <Datepicker className="mb-2 md:mb-0" />{" "}
        {/* Use mb-2 to add margin between elements */}
        <div className="md:ml-4 dark:bg-slate-800 dark:hover:bg-slate-600 text-slate-500 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-200 font-medium py-2 px-4 border rounded-md mb-2 md:mb-0">
          <p className="flex items-center">
            Content <FaAngleDown className="ml-4" />
          </p>
        </div>
        <div className="md:ml-4 dark:bg-slate-800 dark:hover:bg-slate-600 text-slate-500 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-200 font-medium py-2 px-4 border rounded-md mb-2 md:mb-0">
          <p className="flex items-center">
            Region <FaAngleDown className="ml-4" />
          </p>
        </div>
        <div className="md:ml-4 dark:bg-slate-800 dark:hover:bg-slate-600 text-slate-500 hover:text-slate-600 dark:text-slate-300 dark:hover:text-slate-200 font-medium py-2 px-4 border rounded-md">
          <p className="flex items-center">
            Type <FaAngleDown className="ml-4" />
          </p>
        </div>
      </div>

      {/* End of the first row */}

      <div className="flex flex-wrap  mt-8 justify-center border-b-2 pb-8 ">
        <div className="w-64 h-32 dark:bg-slate-800 dark:hover:bg-slate-600 bg-slate-500 hover:bg-slate-600 text-white rounded-md p-4 m-2 flex flex-col justify-center items-center">
          <div className="text-lg font-bold mb-2">Views</div>
          <div>0</div>
        </div>
        <div className="w-64 h-32 dark:bg-slate-800 dark:hover:bg-slate-600 bg-slate-500 hover:bg-slate-600 text-white rounded-md p-4 m-2 flex flex-col justify-center items-center">
          <div className="text-lg font-bold mb-2">Unique viewers</div>
          <div>0</div>
        </div>
        <div className="w-64 h-32 dark:bg-slate-800 dark:hover:bg-slate-600 bg-slate-500 hover:bg-slate-600 text-white rounded-md p-4 m-2 flex flex-col justify-center items-center">
          <div className="text-lg font-bold mb-2">Finishes</div>
          <div>0</div>
        </div>
        <div className="w-64 h-32 dark:bg-slate-800 dark:hover:bg-slate-600 bg-slate-500 hover:bg-slate-600 text-white rounded-md p-4 m-2 flex flex-col justify-center items-center">
          <div className="text-lg font-bold mb-2">Avg. % watched</div>
          <div>0.0%</div>
        </div>
      </div>
      {/* End of the second row */}

      <div className="flex items-center justify-center border-b-2 gap-1 flex-col md:flex-row">
        {/* First Column */}
        <div className=" w-auto">
          <div className="mb-2 text-2xl font-bold">Most views by city</div>
          <div className="text-lg mb-2">0</div>
          <div className="mb-4">Country</div>
          <button className=" width dark:bg-slate-800 dark:hover:bg-slate-600 bg-slate-500 hover:bg-slate-600 text-white flex items-center py-2 px-4 align-center rounded">
            View region report <FaArrowRight className="ml-4" />
          </button>
        </div>

        {/* Second Column */}
        <div className="w-full">
          <WorldMap />
        </div>
      </div>

      {/* Third Column */}
      <div className="flex flex-col">
        <div className="my-4">
          <h2 className="text-2xl font-bold">Total time watched</h2>
          <p className="text-lg ">0 seconds</p>
        </div>
        <div className="my-4">
          <h2 className="text-2xl font-bold">Average view duration</h2>
          <p className="text-lg ">0 seconds</p>
        </div>
        <button className=" width dark:bg-slate-800 dark:hover:bg-slate-600 hover:bg-slate-600 text-white flex items-center py-2 px-4 align-center rounded">
          View region report <FaArrowRight className="ml-4" />
        </button>
      </div>
    </div>
  );
};

export default AnalyticsComponent;
