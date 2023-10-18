import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { FaSearch, FaCalendarAlt, FaChevronDown } from 'react-icons/fa';
import { apiGetVideos } from '../../Context/Api/Axios';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  useEffect(() => {
    if (searchTerm.trim() === '') {
      const fetchDefaultVideos = async () => {
        try {
          const response = await apiGetVideos('/videos/fetch/public?page=1');
          onSearch(response.data);
        } catch (error) {
          toast.error(error.response.data.message);
          console.error('Error fetching videos:', error);
        }
      };
      fetchDefaultVideos();
    }
  }, [searchTerm, onSearch]);

  const handleSearch = async () => {
    try {
      const response = await apiGetVideos(`/videos/search?search=${searchTerm}&date=${selectedDate}`);
      onSearch(response.data); 
    } catch (error) {
      toast.error(error.response.data.message);
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <div className="search-box-container flex justify-center mb-3">
      <div className="search-box bg-gray-200 rounded-lg p-2 flex items-center space-x-2">
        <div className="search-icon">
          <FaSearch />
        </div>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {/* <input
          type="date"
          className="date-input outline-none"
          value={ selectedDate }
          onChange={(e) => setSelectedDate(e.target.value)}
        /> */}
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
