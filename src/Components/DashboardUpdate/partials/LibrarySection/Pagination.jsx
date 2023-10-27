/* eslint-disable react/prop-types */
export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <ul className="flex mt-8 justify-center space-x-2">
      <li
        className={`inline-block px-2 py-1 text-white rounded ${
          currentPage === 1 ? "bg-gray-800" : "bg-white"
        } cursor-pointer`}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </li>

      {pages.map((page) => (
        <li
          key={page}
          className={`inline-block px-2 py-1 rounded ${
            page === currentPage
              ? "bg-gray-500 text-white"
              : "text-black dark:text-white dark:border-white border border-black "
          } cursor-pointer`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </li>
      ))}

      <li
        className={`inline-block px-2 py-1 rounded text-white ${
          currentPage === totalPages ? "bg-gray-800" : "bg-gray-800"
        } cursor-pointer`}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </li>
    </ul>
  );
};
