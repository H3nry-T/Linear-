import { cn } from "@/lib/utils";
import React from "react";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export function Grid({items, className}: {items: GridItem[], className?: string}) {
  return (
    <BentoGrid className={ cn( "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto", className ) }>
      {items.map((item, i) => (
        <BentoGridItem
          id={item.id}
          key={item.id}
          title={item.title}
          description={item.description}
          className={item.className}
          img={item.img}
          imgClassName={item.imgClassName}
          titleClassName={item.titleClassName}
          spareImg={item.spareImg}
          
        />
      ))}
    </BentoGrid>
  );
}