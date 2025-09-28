import Image from "next/image";
import React from "react";
import bgPattern from "@/../public/assets/images/bg-pattern.png";
import BackBtn from "@/components/ui/BackBtn";
import SubServiceItem from "./SubServiceItem";
import { useTranslations } from "next-intl";

type CardProps = {
  title: string;
  desc: string;
  details?: string[];
};

export default function ServiceDetails() {
  const t = useTranslations("service");

  const data = t.raw("items");
  return (
    <div className="relative py-20 bg-[#f3f3f3]">
      <Image
        src={bgPattern}
        alt="placeholder image"
        className="h-full w-full absolute top-0 left-0 object-cover -z-2 opacity-[1.56%]"
      />

      <div className="container">
        <BackBtn className="mb-15" />

        <div>
          <h1 className="lg:text-[42px] text-2xl text-primary-1 font-medium lg:mb-20 mb-5">
            {t("title")}{" "}
          </h1>
          <p className="text-[rgba(30,30,30,0.70)] mb-9">{t("description")}</p>

          <div className="space-y-10">
            {data.map((it: CardProps, index: number) => (
              <SubServiceItem it={it} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
