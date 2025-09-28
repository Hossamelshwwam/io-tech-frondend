"use client";
import React, { useRef, useState } from "react";
import TeamCard from "./TeamCard";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useTranslations } from "next-intl";

export default function Team() {
  const ref = useRef<SwiperClass | null>(null);

  const members = [1, 2, 3, 4, 5, 6];
  const t = useTranslations("team");
  return (
    <div className="py-20 bg-[#f3f3f3]">
      <div className="container relative">
        <h1 className="lg:text-[42px] text-3xl font-bold capitalize text-primary-1 mb-5 text-center">
          {t("team")}
        </h1>
        <p className="text-center lg:text-[18px] text-sm mb-19 w-[75ch] mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s
        </p>

        <div className="relative px-14">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 text-black z-10"
            onClick={() => ref.current?.slidePrev()}
          >
            <IoIosArrowBack size={32} />
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 text-black z-10"
            onClick={() => ref.current?.slideNext()}
          >
            <IoIosArrowForward size={32} />
          </button>

          <Swiper
            onSwiper={(swiper) => (ref.current = swiper)}
            loop
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {members.map((m, idx) => (
              <SwiperSlide key={idx}>
                <TeamCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
