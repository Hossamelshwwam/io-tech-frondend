import React, { memo } from "react";
import Image from "next/image";
import bgPlaceholder from "@/../public/assets/images/bg-placeholder.jpg";
interface HeroSectionProps {
  className?: string;
  children?: React.ReactNode;
}

const HeroSection = memo(function HeroSection({
  className,
  children,
}: HeroSectionProps) {
  return (
    <div className={`${className} relative`}>
      {children}
      <Image
        src={bgPlaceholder}
        alt="placeholder image"
        className="h-full w-full absolute top-0 left-0 object-cover -z-2"
      />
      <div className="h-full w-full absolute top-0 left-0 bg-gradient-to-l from-primary-1/28 to-primary-1/68 -z-1"></div>
    </div>
  );
});

export default HeroSection;
