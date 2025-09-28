import React from "react";
import image from "@/../public/assets/images/placeholder.png";
import Image from "next/image";
import CustomBtn from "@/components/ui/CustomBtn";
import { useTranslations } from "next-intl";
const HeroSlide = () => {
  const t = useTranslations("global");

  return (
    <div className="flex items-center max-lg:flex-col-reverse justify-center gap-10 relative z-10 lg:h-screen h-[70vh]">
      <div className="text-white lg:flex-1">
        <h1 className="md:text-[40px] text-3xl font-bold mb-9">Lorem Ipsum </h1>
        <p className="font-medium md:text-[18px] text-sm mb-16.5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s
        </p>

        <CustomBtn
          variant="filled"
          className="text-base px-8 hover:bg-white/80"
        >
          {t("readMore")}
        </CustomBtn>
      </div>
      <div className="w-95 lg:h-95 h-50 bg-primary-2">
        <Image
          src={image}
          alt="hero image"
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
};

export default HeroSlide;
