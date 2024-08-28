"use client"
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBackground";
import { Globe, World } from "./Globe";
import { GlobeBento } from "../GlobeBento";
import { Dispatch, SetStateAction, useState } from "react";
import animationData from "../../data/confetti.json";
import Lottie from "react-lottie";
import { TWButton } from "./TWButton";
import { IoCopyOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

function handleCopy(copied: boolean, setCopied:Dispatch<SetStateAction<boolean>> ) {
  navigator.clipboard.writeText('random@gmail.com')
  setCopied(!copied);
}

export const BentoGridItem = ({
  id, 
  className,
  title,
  description,
  imgClassName,
  titleClassName,
  img,
  spareImg,
}: {
  id: number;
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  imgClassName?: string,
  titleClassName?: string,
  img?: string,
  spareImg?: string,
}) => {
  const [copied, setCopied] = useState(false); 
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col gap-4 relative overflow-hidden",
        className
      )}
      style={{
        background: 'linear-gradient(90deg, rgba(24,23,37,1) 0%,rgba(28,33,53,0.6)  50%, rgba(24,24,36,1)  100%)',
      }}
    >
      <div className={id === 6 ? 'flex justify-center h-full' : ''}>
        <div className='w-full h-full absolute left-0 top-0'>
          {img && <img src={img} alt={img} className={cn(imgClassName, 'object-cover object-center')}/>}
        </div>
      </div>
      <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
        {spareImg && <img src={spareImg} alt={spareImg} className={cn('object-cover object-center w-full h-full')}/>}
      </div>
      {id === 6 && (<BackgroundGradientAnimation containerClassName="absolute w-full h-full inset-0">
        <div className="flex justify-center items-center text-white font-bold"/>
      </BackgroundGradientAnimation>)}
      {id === 2 && <GlobeBento/>}
      {id === 3 && <div className="text-neutral-400/80 absolute top-6 sm:top-[50px] -right-12 font-sans text-lg tracking-wide grid grid-rows-4 gap-2 text-center font-semibold grid-flow-col lg:text-xl lg:top-[360px] xl:top-[320px] lg:-right-16"> 
          {["React.js", "Typescript", "Python", "",  "", "Tailwind.css", "Framermotion", "Three.js"].map((item) => {
            if (item.length <= 0) {
              return <span className="rounded-3xl border border-white/[0.1] py-2 px-4 bg-[#3f3f4b]/[0.9] min-w-32 min-h-4">&nbsp;</span>
            }
            else {
              return <div className="rounded-3xl border border-white/[0.1] py-2 px-4 bg-[#3f3f4b]/[0.4] min-w-32 min-h-4">
                { item } 
              </div>
            }
          })}
       </div>}
      <div className={ cn('absolute inset-0 w-full h-full bg-gray-500/0 group-hover/bento:bg-gray-500/20 transition-all ease-in-out') }></div>
      <h2 className={cn(titleClassName, 'relative text-white font-semibold text-lg transition-transform ease-in-out md:h-full min-h-40 flex flex-col p-5 lg:p-10')}>
        <div className="font-extralight font-sans text-sm md:text-xs text-[#c1c2d3] lg:text-base relative">{description}</div>
        <div className="font-bold tracking-wide text-lg md:text-2xl max-w-96">{title}</div>
      </h2>
       {id === 6 && <div className="relative">
          <div className={`absolute -bottom-64 right-0`}>
            <Lottie options={{
              loop: copied, 
              autoplay: copied, 
              animationData: animationData, 
              rendererSettings: {
                preserveAspectRatio: 'xMidyMid slice', 
              }
            }}/>
          </div>
        </div>}
      {id === 6 && 
        <TWButton className="relative max-w-xs block mx-auto px-4 py-2" icon={<IoCopyOutline/>} position="right" onClick={() => handleCopy(copied, setCopied)}>{copied ? 'copied' : 'copy email'}&nbsp;</TWButton>
      }
    </div>
  );
};
