
import FilterButton from '../../navComponent/DropdownFilter';
import Datepicker from '../../navComponent/Datepicker';

const MyFeed = () => {
  return (
    <div className="flex flex-col font-bold mt-4 col-span-full sm:col-span-12 xl:col-span-12   ">
        <h2 className='text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6'>My Feed</h2>

        <div className="sm:flex sm:justify-between sm:items-center mb-2">

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton />
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                    <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span className="hidden xs:block ml-2">Add view</span>
                </button>                
              </div>

            </div>
        </div>
  )
}

export default MyFeed