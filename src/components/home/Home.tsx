import React from "react";
import Hero from "./hero/Hero";
import Team from "./team/Team";
import Client from "./client/Client";

export default function Home() {
  return (
    <div>
      <Hero />
      <Team />
      <Client />
    </div>
  );
}
