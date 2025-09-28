"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("notFound");

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50 text-center px-4">
      <h1 className="text-7xl font-bold text-primary-1 mb-6">404</h1>
      <h2 className="text-2xl font-semibold mb-4">{t("title")}</h2>
      <p className="text-gray-600 mb-8">{t("desc")}</p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary-1 text-white rounded-lg font-medium hover:bg-primary-2 transition"
      >
        {t("back")}
      </Link>
    </div>
  );
}
