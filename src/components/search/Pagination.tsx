import { usePagination } from "@/hooks/usePagination";
import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pageNumbers = usePagination({ currentPage, totalPages });
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  if (totalPages <= 1) return null;

  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="flex md:justify-end justify-center items-center mt-20 space-x-2">
      {/* Previous */}
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={isFirstPage}
        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all cursor-pointer ${
          isFirstPage
            ? "text-gray-400 cursor-not-allowed"
            : "text-primary-1 hover:bg-primary-1 hover:text-white"
        }`}
      >
        <IoIosArrowBack />
      </button>

      {/* Pages */}
      {pageNumbers.map((page, index) =>
        page === "..." ? (
          <div
            key={`ellipsis-${index}`}
            className="flex items-center justify-center w-10 h-10 text-gray-400 select-none"
          >
            ...
          </div>
        ) : (
          <button
            key={page}
            onClick={() => handlePageClick(page as number)}
            className={`flex items-center justify-center w-10 h-10 transition-all font-semibold cursor-pointer ${
              currentPage === page
                ? "text-primary-1 border-b-2 border-primary-1"
                : "text-gray-600 hover:text-primary-1"
            }`}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={isLastPage}
        className={`flex items-center justify-center w-10 h-10 rounded-lg transition-all cursor-pointer ${
          isLastPage
            ? "text-gray-400 cursor-not-allowed"
            : "hover:bg-primary-1 hover:text-white"
        }`}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Pagination;
