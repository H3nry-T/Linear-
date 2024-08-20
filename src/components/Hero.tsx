import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { GridBackground } from "./ui/GridBackground";
import { GenerateText } from "./ui/GenerateText";
import { TWButton } from './ui/TWButton';
import { FaLocationArrow } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";

export default function Hero() {
  return (
    <section className="pb-20 pt-36">
      <div>
        <Spotlight fill="white" className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"/>
        {/* <Spotlight fill="purple" className="top-10 left-full h-[80vh] w-[50vw]"/> */}
        <Spotlight fill="blue" className="top-28 left-80 h-[80vh] w-[50vw]"/>
      </div>
      <GridBackground/>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-blue-100 text-xs text-center max-w-80 font-medium">Amazing web magic with next.js</h2>
          <GenerateText className="text-center text-[40px] md:text-4xl lg:text-5xl" words={"Transforming concepts into seamless experiences"}/>
          <p className="mt-4 text-white-100 text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">Hi, I'm Henry, a software engineer based in the UK</p>
          <TWButton icon={<CiLocationArrow1 /> } position="right" className="mt-4">Check out my work&nbsp;</TWButton>
        </div>
      </div>
    </section>
  );
}