import React, { memo } from "react";
import Image from "next/image";
import image from "@/../public/assets/images/placeholder.png";
import { FaWhatsapp } from "react-icons/fa6";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { useTranslations } from "next-intl";
interface TeamCardProps {
  className?: string;
}

const TeamCard = memo(function TeamCard({ className }: TeamCardProps) {
  const t = useTranslations("team");

  return (
    <div className={`${className}`}>
      <div className="bg-primary-2 sm:h-60 h-40 w-full mb-4">
        <Image
          src={image}
          alt={t("alt")}
          className="object-contain h-full w-full"
        />
      </div>
      <div>
        <h3 className="text-center text-primary-1 font-medium text-[22px] mb-2.5">
          {t("name")}
        </h3>
        <p className="text-center text-gray-400 font-medium text-sm mb-2.5 tracking-[2px] uppercase">
          {t("position")}
        </p>
        <div className="flex items-center justify-center gap-1">
          <a href="">
            <FaWhatsapp className="text-gray-400" />
          </a>
          <a href="">
            <FiPhone className="text-gray-400" />
          </a>
          <a href="">
            <IoMailOutline className="text-gray-400" />
          </a>
        </div>
      </div>
    </div>
  );
});

export default TeamCard;
