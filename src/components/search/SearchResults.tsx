import React from "react";
import SearchItem from "./SearchItem";
import { useTranslations } from "next-intl";

interface Item {
  title?: string;
  name?: string;
  documentId: string;
}

interface SearchResultsProps {
  items: Item[];
  isLoading: boolean;
  field: "teams" | "services";
}

const ITEMS_PER_PAGE = 5;

const SearchResults = ({ items, isLoading, field }: SearchResultsProps) => {
  const t = useTranslations("search");

  return (
    <div className="space-y-6.5">
      {isLoading ? (
        Array.from({ length: ITEMS_PER_PAGE }).map((_, i) => (
          <div
            key={i}
            className="pb-20 border-b border-[rgb(151,151,151,0.5)] animate-pulse"
          >
            <div className="h-6 bg-gray-300 w-1/2 mb-4 rounded"></div>
            <div className="h-4 bg-gray-200 w-1/4 rounded"></div>
          </div>
        ))
      ) : items.length === 0 ? (
        <div className="py-2 text-center text-gray-500">
          <p className="text-lg font-medium">{t("noResultsTitle")}</p>
          <p className="text-sm">{t("noResultsDesc")}</p>
        </div>
      ) : (
        items.map((it, i) => <SearchItem key={i} item={it} field={field} />)
      )}
    </div>
  );
};

export default SearchResults;
