"use client";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React, { memo } from "react";
import { IoIosArrowBack } from "react-icons/io";

interface BackBtnProps {
  className?: string;
}

const BackBtn = memo(function BackBtn({ className }: BackBtnProps) {
  const route = useRouter();
  const t = useTranslations("global");
  const locale = useLocale();
  return (
    <button
      className={`flex items-center gap-1 capitalize text-primary-1 ${className}`}
      onClick={() => route.back()}
    >
      <IoIosArrowBack className={locale === "ar" ? "rotate-180" : ""} />
      <span className="text-primary-1/70 font-bold">{t("back")}</span>
    </button>
  );
});

export default BackBtn;
