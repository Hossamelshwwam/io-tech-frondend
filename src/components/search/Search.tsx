"use client";
import React, { memo, useState } from "react";
import HeroSection from "../ui/HeroSection";
import BackBtn from "../ui/BackBtn";
import Pagination from "./Pagination";
import SearchInput from "./SearchInput";
import { useQuery } from "@tanstack/react-query";
import { searchApi } from "@/services/api/searchApi";
import SearchSidebar from "./SearchSidebar";
import SearchResults from "./SearchResults";
import { useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";

interface SearchProps {
  className?: string;
}

const ITEMS_PER_PAGE = 5;

const Search = memo(function Search({ className }: SearchProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [field, setField] = useState<"teams" | "services">("services");
  const searchParams = useSearchParams();
  const text = searchParams.get("q");
  const [q, setQ] = useState(text || "");
  const locale = useLocale();

  const { data, isLoading } = useQuery({
    queryKey: [
      `search-${field}`,
      { field, q, page: currentPage, pageSize: ITEMS_PER_PAGE },
    ],
    queryFn: () =>
      searchApi.getSearch({
        field,
        q,
        pageSize: ITEMS_PER_PAGE,
        page: currentPage,
        locale,
      }),
    enabled: q.length > 1,
  });

  const items = data?.data || [];

  const totalPages = data?.meta?.pagination?.pageCount || 1;

  return (
    <div className={`${className}`}>
      <HeroSection className="lg:h-[70vh] h-[50vh]" />

      <div className="container py-20">
        <SearchInput
          className="mb-20"
          value={q}
          onSearch={(text) => {
            setQ(text);
            if (q !== text) setCurrentPage(1);
          }}
        />

        <div className="flex max-lg:flex-col gap-8">
          <SearchSidebar
            field={field}
            setField={setField}
            setCurrentPage={setCurrentPage}
          />

          <div className="flex-1">
            <BackBtn className="mb-13" />

            <SearchResults items={items} isLoading={isLoading} field={field} />

            {totalPages > 1 && (
              <Pagination
                totalItems={totalPages * ITEMS_PER_PAGE}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Search;
