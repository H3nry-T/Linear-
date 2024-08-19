import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { GridBackground } from "./ui/GridBackground";

export default function Hero() {
  return (
    <section className="pb-20 pt-36">
      <div>
        <Spotlight fill="white" className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"/>
        <Spotlight fill="purple" className="top-10 left-full h-[80vh] w-[50vw]"/>
        <Spotlight fill="blue" className="top-28 left-80 h-[80vh] w-[50vw]"/>
      </div>
      <GridBackground/>
    </section>
  );
}