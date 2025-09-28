"use client";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import { GoSearch } from "react-icons/go";
import { useState } from "react";

const SearchButton = () => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Formik
      initialValues={{ q: "" }}
      onSubmit={(values) => {
        if (values.q.trim()) {
          router.push(`/search?q=${encodeURIComponent(values.q)}`);
        }
      }}
    >
      {({ values }) => (
        <Form
          className="flex items-center gap-2 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            if (!values.q.trim()) {
              setIsHovered(false);
            }
          }}
        >
          <Field
            name="q"
            placeholder=""
            className={`
              transition-all duration-300 ease-in-out
              bg-transparent text-white rounded-lg px-3 py-1
              focus:outline-none border border-white
              ${
                isHovered || values.q.trim()
                  ? "w-[200px] opacity-100 ml-2"
                  : "w-0 opacity-0 ml-0"
              }
            `}
          />
          <button type="submit" className="flex items-center justify-center">
            <GoSearch className="text-white" size={24} />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SearchButton;
