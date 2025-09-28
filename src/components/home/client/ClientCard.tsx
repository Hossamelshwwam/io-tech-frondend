import React, { memo } from "react";
import Image from "next/image";
import image from "@/../public/assets/images/placeholder.png";
import { useTranslations } from "next-intl";
interface ClientCardProps {
  className?: string;
}

const ClientCard = memo(function ClientCard({ className }: ClientCardProps) {
  const t = useTranslations("client");
  return (
    <div
      className={`flex max-lg:flex-col max-lg:items-center gap-12 ${className}`}
    >
      {" "}
      <div className="sm:w-95 w-70 lg:h-95 h-50 bg-primary-2">
        <Image
          src={image}
          alt="hero image"
          className="object-contain w-full h-full"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between gap-y-10">
        <p className="text-white/60 md:leading-10 leading-7 lg:text-2xl text-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur quam
          quibusdam, iste voluptates, at odio animi facere magnam cumque qui
          laborum impedit fuga! Harum recusandae autem earum error placeat
          vitae!
        </p>

        <div>
          <h3 className="text-white lg:text-2xl text-xl font-semibold mb-5">
            {t("name")}
          </h3>
          <span className="text-white">{t("position")}</span>
        </div>
      </div>
    </div>
  );
});

export default ClientCard;
