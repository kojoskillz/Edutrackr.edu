import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

// import Image from "next/image";
// import client from "../app/assets/client.png";


const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (

       <div className="mt-[5rem] lg:mt-[8rem] md:max-w-[75rem] max-w-[30rem] m-[50px] md:m-auto lg:md:m-auto  ">
        <div className="flex mb-10 relative m-auto border-blue-500 border-[2px] rounded-full w-[8.5rem] place-content-center m-auto ">
                    {/* <Image
                    src={client}
                        alt="star_image"
                        width="100"
                        height="100"
                        sizes="fit-content"
                        className="h-5 w-5 m-1 fit-content"    
                    /> */}
                    <h1 className="text-white sticky font-semibold text-center lawn_color ">
                       Features
                    </h1>
            </div> 
            <div className='mb-10'>
                    <h1 className="text-white sticky font-bold text-4xl md:text-6xl text-center ">
                         Stay Ahead with <span className="lawn_color"> Edutrack</span>
                    </h1>
                    <h1 className="text-gray-300 sticky font-semibold text-normal text-center ">
                        Simplify school-wide communication with Edutrack&apos;s intuitive platform
                    </h1>
            </div>
                            
    
        <div
        className={cn(
            "grid w-full auto-rows-[29rem] grid-cols-3 gap-4",
            className,
        )}
        >
        {children}
        </div>
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
    

    

  <div
    key={name}
    className={cn(
      "group relative text-white  glass1  border-[1px] border-white/5 col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "bg-[#010116FF][box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu  dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#FFFFFFCD_inset]",
      className,
    )}
  >
    
    <div>{background}</div>
    <div className="pointer-events-none  z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-6 w-6  text-white origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
        {name}
      </h3>
      <p className="max-w-lg text-white ">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
      )}
    >
      <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none  absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);

export { BentoCard, BentoGrid };
