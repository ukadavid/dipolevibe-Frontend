/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import Transition from '../utils/Transition';

function DropdownFilter({
  align,
  handleFilter
}) {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [checkbox, setCheckbox] = useState({
    today: false,
    thisWeek: false,
    lastWeek: false,
    thisMonth: false,
    lastMonth: false
  });

  const trigger = useRef(null);
  const dropdown = useRef(null);

  const handleClearButton = async() => {
    setCheckbox({
      today: false,
      thisWeek: false,
      lastWeek: false,
      thisMonth: false,
      lastMonth: false
    });
  }

  const handleApplyButton = async() => {
    setDropdownOpen(false);
    const dateRange = calculateDateRange()

    // handleFilter(dateRange);

    // console.log("dateRange "+JSON.stringify(dateRange))
  }

  const toggleCheck = async(e) => {
    const ele = e.target;
    ele.checked == true ?
     setCheckbox((checkbox) => ({
      ...checkbox,
      [ele.name]: ele.checked
    })) : 
    setCheckbox((checkbox) =>({
      ...checkbox,
      [ele.name]: false
    }))
  }

  const calculateDateRange = () => {
    let startDate, endDate;
  
    const today = moment();
    const startOfToday = today.startOf('day');
    const endOfToday = today.endOf('day');
  
    for (const key in checkbox) {
      if (checkbox[key]) {
        switch (key) {
          case 'today':
            startDate = startOfToday;
            endDate = endOfToday;
            break;
          case 'thisWeek':
            startDate = startDate ? moment.min(startDate, today.startOf('week')) : today.startOf('week');
            endDate = endDate ? moment.max(endDate, today.endOf('week')) : today.endOf('week');
            break;
          case 'lastWeek':
            startDate = startDate ? moment.min(startDate, today.subtract(1, 'week').startOf('week')) : today.subtract(1, 'week').startOf('week');
            endDate = endDate ? moment.max(endDate, today.subtract(1, 'week').endOf('week')) : today.subtract(1, 'week').endOf('week');
            break;
          case 'thisMonth':
            startDate = startDate ? moment.min(startDate, today.startOf('month')) : today.startOf('month');
            endDate = endDate ? moment.max(endDate, today.endOf('month')) : today.endOf('month');
            break;
          case 'lastMonth':
            startDate = startDate ? moment.min(startDate, today.subtract(1, 'month').startOf('month')) : today.subtract(1, 'month').startOf('month');
            endDate = endDate ? moment.max(endDate, today.subtract(1, 'month').endOf('month')) : today.subtract(1, 'month').endOf('month');
            break;
          // Handle additional cases if needed
          default:
            // Handle default case or additional cases
            break;
        }
      }
    }
  
    return { startDate, endDate };
  };
  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (!dropdownOpen || dropdown.current.contains(target) || trigger.current.contains(target)) return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="btn bg-white dark:bg-slate-800 border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600 text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}
      >
        <span className="sr-only">Filter</span>
        <wbr />
        <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
          <path d="M9 15H7a1 1 0 010-2h2a1 1 0 010 2zM11 11H5a1 1 0 010-2h6a1 1 0 010 2zM13 7H3a1 1 0 010-2h10a1 1 0 010 2zM15 3H1a1 1 0 010-2h14a1 1 0 010 2z" />
        </svg>
      </button>
      <Transition
        show={dropdownOpen}
        tag="div"
        className={`origin-top-right z-10 absolute top-full left-0 right-auto min-w-56 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 pt-1.5 rounded shadow-lg overflow-hidden mt-1 ${
          align === 'right' ? 'md:left-auto md:right-0' : 'md:left-0 md:right-auto'
        }`}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
      >
        <div ref={dropdown}>
          <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase pt-1.5 pb-2 px-3">Filters</div>
          <ul className="mb-4">
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  name="today"
                  className="form-checkbox"
                  checked={checkbox.today}
                  onChange={toggleCheck} />
                <span className="text-sm font-medium ml-2">Today</span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input 
                type="checkbox"
                name="thisWeek" 
                className="form-checkbox"
                checked={checkbox.thisWeek}
                onChange={toggleCheck} />
                <span className="text-sm font-medium ml-2">This week</span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input 
                type="checkbox" 
                name="lastWeek"
                className="form-checkbox"
                checked={checkbox.lastWeek}
                onChange={toggleCheck}
                />
                <span className="text-sm font-medium ml-2">Last Week</span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input 
                type="checkbox"
                name="thisMonth" 
                className="form-checkbox"
                checked={checkbox.thisMonth}
                onChange={toggleCheck} 
                />
                <span className="text-sm font-medium ml-2">This month</span>
              </label>
            </li>
            <li className="py-1 px-3">
              <label className="flex items-center">
                <input 
                type="checkbox"
                name="lastMonth" 
                className="form-checkbox"
                checked={checkbox.lastMonth}
                onChange={toggleCheck} 
                />
                <span className="text-sm font-medium ml-2">Last Month</span>
              </label>
            </li>
          </ul>
          <div className="py-2 px-3 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700/20">
            <ul className="flex items-center justify-between">
              <li>
                <button 
                  className="btn-xs bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-500 dark:text-slate-300 hover:text-slate-600 dark:hover:text-slate-200"
                  onClick={handleClearButton}
                  >
                  Clear
                </button>
              </li>
              <li>
                <button
                  className="btn-xs bg-indigo-500 hover:bg-indigo-600 text-white"
                  onClick={() => handleApplyButton()}
                  onBlur={() => setDropdownOpen(false)}
                >
                  Apply
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default DropdownFilter;
