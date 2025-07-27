import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  handlePrev,
  handleNext,
  totalItems,
  itemsPerPage = 10,
}) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  return (
    <div className="px-4 py-3 flex justify-between items-center border-t bg-white">
      <span className="text-sm text-gray-600">
        Showing {startIndex + 1}–{endIndex} of {totalItems}
      </span>
      <div className="space-x-2">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default React.memo(Pagination);
