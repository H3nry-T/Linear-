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
    <BentoGrid className={ cn( "max-w-4xl mx-auto", className ) }>
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