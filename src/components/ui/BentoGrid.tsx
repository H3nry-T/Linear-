import { cn } from "@/lib/utils";

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
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 relative overflow-hidden",
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
        <div className={id === 5 ? `absolute right-0 -bottom-5` : ''}>

        </div>
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2 relative">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
