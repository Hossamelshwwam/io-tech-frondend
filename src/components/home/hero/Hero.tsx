"use client";
import React, { memo, useRef, useState } from "react";
import Image from "next/image";
import bgPlaceholder from "@/../public/assets/images/bg-placeholder.jpg";
import HeroSlide from "./HeroSlide";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import HeroSection from "@/components/ui/HeroSection";
import { useTranslations } from "next-intl";

interface HeroProps {
  className?: string;
}

const Hero = memo(function Hero({ className }: HeroProps) {
  const ref = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = [0, 1, 2, 3, 4];

  return (
    <HeroSection className={`${className} relative`}>
      <div className="container px-20 relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <button
            className="text-white"
            onClick={() => ref.current?.slidePrev()}
          >
            <IoIosArrowBack size={32} />
          </button>
          <div className="space-y-1 absolute top-full left-1/2 -translate-x-1/2 mt-5">
            {slides.map((_, index) => (
              <div
                key={index}
                onClick={() => ref.current?.slideToLoop(index)}
                className={`w-4 h-4 rounded-full border-2 border-white cursor-pointer duration-300 ${
                  activeIndex === index ? "bg-white" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
          onClick={() => ref.current?.slideNext()}
        >
          <IoIosArrowForward size={32} />
        </button>

        <Swiper
          onSwiper={(swiper) => (ref.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          loop
          spaceBetween={50}
        >
          {slides.map((s) => (
            <SwiperSlide key={s}>
              <HeroSlide />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </HeroSection>
  );
});

export default Hero;
