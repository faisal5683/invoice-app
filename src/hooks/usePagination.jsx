import { useState } from "react";

export function usePagination(data, itemsPerPage) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  const goToNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));
  const goToPrev = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return {
    currentPage,
    totalPages,
    currentData,
    goToNext,
    goToPrev,
    startIndex,
  };
}
