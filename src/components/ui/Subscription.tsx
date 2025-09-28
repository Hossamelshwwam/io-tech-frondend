"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomBtn from "./CustomBtn";
import { api } from "@/lib/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import CustomToaster from "./toaster/CustomToaster";
import { useTranslations } from "next-intl";

// ✅ Validation Schema

const addSubscription = async (email: string) => {
  const res = await api.post("/api/subscriptions", { data: { email } });
  return res.data;
};

export default function Subscription() {
  const t = useTranslations("subscription");

  const SubscriptionSchema = Yup.object().shape({
    email: Yup.string().email(t("invalid")).required(t("required")),
  });
  let toastId: string;
  const { mutate, isPending } = useMutation({
    mutationFn: addSubscription,
    onMutate: () => {
      toastId = toast.loading(t("loading"));
    },
  });

  return (
    <>
      <Formik
        initialValues={{ email: "" }}
        validationSchema={SubscriptionSchema}
        onSubmit={(values, { resetForm }) => {
          mutate(values.email, {
            onSuccess: () => {
              toast.dismiss(toastId);
              toast.success(t("success"));
              resetForm();
            },
            onError: (error: any) => {
              toast.dismiss(toastId);
              toast.error(error?.response.data.error.message);
            },
          });
        }}
      >
        {({ values: { email } }) => (
          <Form className="">
            {/* Email Input */}
            <div
              className={`flex items-center bg-white rounded-md overflow-hidden px-1 py-1`}
            >
              <Field
                type="email"
                name="email"
                placeholder={t("placeholder")}
                className={`${
                  email.length > 1
                    ? "sm:w-60 w-full"
                    : "w-30 sm:focus:w-60 focus:w-full"
                } flex-1 px-4 text-black outline-none duration-300`}
              />

              {/* Subscribe Button */}
              <CustomBtn
                type="submit"
                disabled={isPending}
                variant="filled"
                className="!bg-primary-1 text-white"
              >
                {t("button")}
              </CustomBtn>
            </div>

            {/* Error Message تحت الـ form */}
            <div className="absolute text-red-500 text-sm">
              <ErrorMessage name="email" />
            </div>
          </Form>
        )}
      </Formik>
      <CustomToaster />
    </>
  );
}
