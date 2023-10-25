import FilterButton from "../../navComponent/DropdownFilter";
import Datepicker from "../../navComponent/Datepicker";

const MyFeed = () => {
  return (
    <div className="flex flex-col font-bold mt-4 col-span-full sm:col-span-12 xl:col-span-12   ">
      <h2 className="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">
        My Feed
      </h2>

      <div className="sm:flex sm:justify-between sm:items-center mb-2">
        {/* Right: Actions */}
        <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
          {/* Filter button */}
          <FilterButton />
          {/* Datepicker built with flatpickr */}
          <Datepicker />
        </div>
      </div>
    </div>
  );
};

export default MyFeed;
