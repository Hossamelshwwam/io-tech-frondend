import { useLocale } from "next-intl";
import React, { memo } from "react";

type CardProps = {
  title: string;
  desc: string;
  details?: string[];
};

interface SubServiceItemProps {
  className?: string;
  it: CardProps;
}

const SubServiceItem = memo(function SubServiceItem({
  className,
  it,
}: SubServiceItemProps) {
  const locale = useLocale();
  return (
    <div className={`${className}`}>
      {" "}
      <h3 className="text-primary-1 font-bold mb-5">{it.title}</h3>
      <div className={`relative ${locale === "ar" ? "md:pr-10" : "md:pl-10"}`}>
        <span
          className={`absolute h-full w-0.5 bg-[#d9d9d9] rounded-lg ${
            locale === "ar" ? "right-0" : "left-0"
          } top-0 max-md:hidden`}
        ></span>
        <p className="flex gap-2.5 text-[#1E1E1E] font-bold mb-3 max-w-[97ch]">
          <span className="min-w-4 w-4 min-h-4 h-4 inline-block rounded-xs bg-primary-1"></span>
          {it.desc}
        </p>

        <div>
          {it?.details?.map((sub, i) => (
            <p className="text-[#1E1E1E] leading-6" key={i}>
              - {sub}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
});

export default SubServiceItem;
