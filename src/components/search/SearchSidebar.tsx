import { useTranslations } from "next-intl";
import React from "react";

interface SearchSidebarProps {
  field: "teams" | "services";
  setField: (f: "teams" | "services") => void;
  setCurrentPage: (p: number) => void;
}

const SearchSidebar = ({
  field,
  setField,
  setCurrentPage,
}: SearchSidebarProps) => {
  const t = useTranslations("search");

  const types: { label: string; value: "teams" | "services" }[] = [
    { label: t("services"), value: "services" },
    { label: t("teams"), value: "teams" },
  ];

  return (
    <div className="p-10 bg-[#fafafa] flex items-center flex-col gap-y-10 h-fit">
      {types.map((it, i) => (
        <button
          key={i}
          className={`${
            field === it.value ? "underline" : ""
          } text-primary-1 text-xl font-semibold capitalize`}
          onClick={() => {
            setField(it.value);
            setCurrentPage(1);
          }}
        >
          {it.label}
        </button>
      ))}
    </div>
  );
};

export default SearchSidebar;
