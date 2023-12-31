import { useState } from "react";
import { toast } from "react-toastify";
import { FaSearch } from "react-icons/fa";
import { apiGetVideos } from "../../Context/Api/Axios";

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleSearch = async () => {
    try {
      // const currentDate = new Date().getTime();
      // const selectedDateValue = new Date(selectedDate).getTime(); // Assuming selectedDateInput is the selected date from your input field

      // if (selectedDateValue > currentDate) {
      //   toast.error("Selected date cannot be in the future.");
      //   return; // Stop processing if the selected date is in the future
      // }

      const response = await apiGetVideos(
        `/videos/search?search=${searchTerm}&date=${selectedDate}`
      );
      onSearch(response.data);
    } catch (error) {
      toast.error(error.response.data.message);
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="search-box-container flex justify-center mb-3 ">
      <div className="search-box bg-gray-200 rounded-lg flex items-center space-x-2 pl-4 bg-white border border-blue-400">
        <div className="search-icon">
          <FaSearch />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="search-input py-1 outline-0"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
