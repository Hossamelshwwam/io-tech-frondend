"use client";

import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomBtn from "../ui/CustomBtn";
import { useTranslations } from "next-intl";

interface SearchProps {
  onSearch: (query: string) => void;
  delay?: number;
  className?: string;
  value: string;
}

const SearchInput = ({
  onSearch,
  delay = 500,
  className,
  value,
}: SearchProps) => {
  const [debouncedValue, setDebouncedValue] = useState("");
  const t = useTranslations("search");

  const formik = useFormik({
    initialValues: { query: value },
    validationSchema: Yup.object({
      query: Yup.string().min(2, t("tooShort")).required(t("required")),
    }),
    onSubmit: (values) => {
      onSearch(values.query);
    },
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(formik.values.query);
    }, delay);

    return () => clearTimeout(handler);
  }, [formik.values.query, delay]);

  useEffect(() => {
    if (debouncedValue) {
      onSearch(debouncedValue);
    }
  }, [debouncedValue, onSearch]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className={`flex max-md:flex-col gap-5 justify-center ${className}`}
    >
      <div>
        <input
          name="query"
          type="text"
          placeholder={t("placeholder")}
          value={formik.values.query}
          onChange={formik.handleChange}
          className="border p-2 rounded-lg md:w-100 w-full"
        />
        {formik.errors.query && (
          <div className="text-red-500 text-sm">{formik.errors.query}</div>
        )}
      </div>
      <CustomBtn className="bg-primary-1 h-fit" type="submit">
        {t("btn")}
      </CustomBtn>
    </form>
  );
};

export default React.memo(SearchInput);
