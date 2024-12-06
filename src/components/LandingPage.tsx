"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import thumpup from "../app/assets/thumpup.png";


export default function BackgroundBoxesDemo() {
  return (
    <div className="h-[50rem] md:h-[40rem]  relative w-full  overflow-hidden bg-slate-900 flex flex-col items-center justify-center ">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <div className="relative md:-mt-0 -mt-32 flex rounded-full p-[4px] mx-auto border z-40 border-white/10  bg-gradient-to-r  from-transparent via-slate-900 to-black w-[13rem] lg:w-[13.5rem] place-content-center ">
             <Image 
                  src={thumpup}
                  alt="star_image"
                  width="100"
                  height="100"
                  sizes="fit-content"
                  className="thumpup"
              />                
                 <h1 className="text-white mt-[3.5px] md:mt-[3.5px] text-center text-sm lg:text-md font-light ">
                   Welcome to EduTrack
                 </h1>
             </div>
           

      <h1 className={cn("md:text-[3.8rem] md:leading-[4rem]  wrap font1 agdasima  text-[2.5rem] leading-[2.3rem] m-2  text-white relative z-20 text-center ")}>
        Elevate <span className="lawn_color ">Education</span>  with Our All-in One <span className="lawn_color">School Management System</span>
      </h1>
      <p className="text-center  text-[16px] md:text-[18px] mt-2 text-neutral-300 relative z-20">
          One-Platform,Endless Possibilities,simplify school operations enhance student success,
        <br />  We unify your schools ecosystem with our comprehensive management solutions.
      </p>

         
                 <button className=" w-48 h-10 place-content-center  rounded-[4px]  mt-4 md:mt-5  z-20  lawn_color_bg">
                    <span className="text-white ">Get Started</span>
                 </button>

      
    
        
        <Boxes />

    

        {/* ends */}
    </div>
  );
}
