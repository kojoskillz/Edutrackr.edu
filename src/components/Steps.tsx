'use client'
import { useTheme } from "next-themes";
import Image from "next/image";
import { MagicCard } from "../components/ui/magic-card";
import star from "../app/assets/starX.png"
import client from "../app/assets/client.png";

export default function Steps() {
  const { theme } = useTheme();
  return (
    <div
      className={
        " mt-[10rem] mb-[2rem] grid place-content-center "
      }
    >


<div className="flex relative m-auto border-blue-500 border-[2px] rounded-full w-[8.5rem] place-content-center m-auto ">
                    <Image
                    src={client}
                        alt="star_image"
                        width="100"
                        height="100"
                        sizes="fit-content"
                        className="h-5 w-5 m-1 fit-content"    
                    />
                   <h1 className="text-white sticky font-semibold text-center lawn_color ">
                      The Approach
                    </h1>
            </div>
{/* headline for steps*/}
<div className="mb-10 mt-5 ">
      <h1 className="text-4xl md:text-6xl text-white text-center font-bold text-wrap">
        3 Simple Steps to Seamless <br /> <span className="lawn_color">Data Management</span>
      </h1>
      <p className="text-xl mt-2 text-gray-300 text-center font-normal text-wrap">
         Optimize our school management system by following these simple steps
      </p>
</div>

<div className="m-auto grid md:grid-cols-3 md:gap-8 gap-4 m-auto ">

      <MagicCard
        className="w-[23rem] h-[18rem]  glass cursor-pointer border-white/10 grid items-center justify-center shadow-2xl whitespace-wrap "
        gradientColor={theme === "dark" ? "#30394AFF" : "#182A4BFF"}
      >
        <div className="grid p-5">
            <h1 className="text-gray-300  pb-1 text-[21px] font-bold text-gray-300">
                 Step 1: Simplify Student Data Management
            </h1>
         
            <h3 className=" text-sm text-gray-300"> 
               Unify student information in a single, secure platform, consolidating data from multiple sources, ensuring accuracy and integrity. 
            </h3>

        </div>

      </MagicCard>
      <MagicCard
        className="w-[23rem] h-[18rem]  glass cursor-pointer border-white/10 grid items-center justify-center shadow-2xl whitespace-wrap "
        gradientColor={theme === "dark" ? "#30394AFF" : "#182A4BFF"}
      >
        <div className="grid p-5">
            <h1 className="text-gray-300  pb-1 text-[21px] font-bold text-gray-300">
                  Step 2: Optimize Student Workflows
            </h1>
         
            <h3 className=" text-sm text-gray-300"> 
            Foster seamless collaboration and communication among educators, administrators, parents, and guardians through secure, real-time messaging, notifications, and progress updates.
            </h3>

        </div>

      </MagicCard>
      <MagicCard
        className="w-[23rem] h-[18rem]  glass cursor-pointer border-white/10 grid items-center justify-center shadow-2xl whitespace-wrap "
        gradientColor={theme === "dark" ? "#30394AFF" : "#182A4BFF"}
      >
        <div className="grid p-5">
            <h1 className="text-gray-300  pb-1 text-[21px] font-bold text-gray-300">
                  Step 3: Analyze and Act
            </h1>
         
            <h3 className=" text-sm text-gray-300"> 
                 Empower educators and administrators with actionable insights, enabling data-informed decisions that drive student success, improve academic outcomes, and streamline school operations for maximum efficiency.
            </h3>

        </div>

      </MagicCard>

      

      
     
    </div>
        
</div>
  );
}
