import { useMemo } from "react";

const MAX_VISIBLE_PAGES = 3;

interface UsePaginationProps {
  currentPage: number;
  totalPages: number;
}

export const usePagination = ({
  currentPage,
  totalPages,
}: UsePaginationProps): (number | string)[] => {
  return useMemo(() => {
    if (totalPages <= 1) return [];

    if (totalPages <= MAX_VISIBLE_PAGES + 2) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [1];

    let startPage = Math.max(
      2,
      currentPage - Math.floor(MAX_VISIBLE_PAGES / 2)
    );
    let endPage = Math.min(
      totalPages - 1,
      currentPage + Math.floor(MAX_VISIBLE_PAGES / 2)
    );

    if (endPage - startPage + 1 < MAX_VISIBLE_PAGES) {
      if (currentPage < totalPages / 2) {
        endPage = Math.min(totalPages - 1, startPage + MAX_VISIBLE_PAGES - 2);
      } else {
        startPage = Math.max(2, endPage - MAX_VISIBLE_PAGES + 2);
      }
    }

    if (startPage > 2) pages.push("...");

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) pages.push("...");

    pages.push(totalPages);

    return pages;
  }, [currentPage, totalPages]);
};
