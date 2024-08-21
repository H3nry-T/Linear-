import Image from "next/image";
import Hero from '@/components/Hero';
import { FloatingNavBar } from '../components/ui/FloatingNavBar';
import { IconArrowWaveRightUp, IconBoxAlignRightFilled, IconBoxAlignTopLeft, IconClipboardCopy, IconFileBroken, IconHome, IconMessage, IconSignature, IconTableColumn, IconUser } from "@tabler/icons-react";
import { BentoGrid } from "@/components/ui/BentoGrid";
import { Grid } from "@/components/Grid";
import { gridItems, navItems } from "@/data";

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full rounded-xl "></div>
);
export default function Home() {

  return (
    <main className="bg-black-100 flex flex-col justify-center items-center overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNavBar navItems={navItems}/>
        <Hero />
        <Grid items={gridItems} className=""/>
      </div>
    </main>
  );
}
