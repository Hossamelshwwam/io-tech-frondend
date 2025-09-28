import React from "react";
import HeroSection from "../ui/HeroSection";
import ServiceDetails from "./ServiceDetails/ServiceDetails";

export default function Service() {
  return (
    <div>
      <HeroSection className="lg:h-[70vh] h-[50vh]" />
      <ServiceDetails />
    </div>
  );
}
