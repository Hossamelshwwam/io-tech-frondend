import React from "react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface Item {
  title?: string;
  name?: string;
  documentId: string;
}

const SearchItem = ({
  item,
  field,
}: {
  item: Item;
  field: "teams" | "services";
}) => {
  const t = useTranslations("global");

  return (
    <div className="lg:pb-20 pb-10 border-b border-[rgb(151,151,151,0.5)]">
      <h3 className="text-primary-1 font-medium mb-8">
        {"title" in item ? item.title : item.name}
      </h3>
      <Link
        href={`/${field}/${item.documentId}`}
        className="underline font-medium text-primary-1 capitalize"
      >
        {t("readMore")}
      </Link>
    </div>
  );
};

export default SearchItem;
