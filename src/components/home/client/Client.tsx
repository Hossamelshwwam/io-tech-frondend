"use client";
import React, { useRef } from "react";
import ClientCard from "./ClientCard";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";

export default function Client() {
  const ref = useRef<SwiperClass | null>(null);

  const cliens = [1, 2, 3, 4, 5, 6];

  const t = useTranslations("client");
  return (
    <div className="py-20 bg-primary-1">
      <div className="container">
        <div className="mb-15">
          <h1 className="lg:text-[40px] text-3xl font-bold text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-white/70  text-[18px] max-w-[70ch]">
            {t("description")}
          </p>
        </div>
        <Swiper
          onSwiper={(swiper) => (ref.current = swiper)}
          loop
          spaceBetween={30}
        >
          {cliens.map((_, index) => (
            <SwiperSlide key={index}>
              <ClientCard />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 flex items-center gap-5 sm:justify-end justify-center">
          {" "}
          <button
            className="text-white md:w-17 w-12 md:h-17 h-12 flex flex-center rounded-full bg-white/10 hover:bg-white hover:text-primary-1 duration-300 cursor-pointer"
            onClick={() => ref.current?.slidePrev()}
          >
            <IoArrowBackOutline size={32} />
          </button>
          <button
            className="text-white md:w-17 w-12 md:h-17 h-12 flex flex-center rounded-full bg-white/10 hover:bg-white hover:text-primary-1 duration-300 cursor-pointer"
            onClick={() => ref.current?.slideNext()}
          >
            <IoArrowForwardOutline size={32} />
          </button>
        </div>
      </div>
    </div>
  );
}
