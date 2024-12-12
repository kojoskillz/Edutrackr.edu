'use client'
import { useTheme } from "next-themes";
import Image from "next/image";
import { MagicCard } from "../components/ui/magic-card";
import star from "../app/assets/starX.png"
import client from "../app/assets/client.png";

export default function MagicCardDemo() {
  const { theme } = useTheme();
  return (
    <div
      className={
        " mt-[10rem] mb-[10rem] grid place-content-center "
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
                       Our Clients
                    </h1>
            </div>
{/* headline for testimonials */}
<div className="mb-10 mt-5 ">
      <h1 className="text-4xl text-white text-center font-bold text-wrap">
          Feedback From Our  <span className="lawn_color">Clients</span>
      </h1>
      <p className="text-xl mt-2 text-gray-300 text-center font-normal text-wrap">
            Here&apos;s what are users have to say about Edutrack
      </p>
</div>


<div className="m-auto grid md:grid-cols-3 md:gap-8 gap-4 m-auto ">

      <MagicCard
        className="w-[20rem] h-[18rem]  glass cursor-pointer border-white/10 grid items-center justify-center shadow-2xl whitespace-wrap "
        gradientColor={theme === "dark" ? "#30394AFF" : "#182A4BFF"}
      >
        <div className="grid p-5">
            <h1 className="text-gray-300  pb-1 text-[15px] font-semibold text-gray-300">
              Mrs. Ama Owusu
            </h1>
            <p className="pb-2  text-[12px] text-gray-300 ">
                @Headmistress, St. Mary&apos;s Senior High School
            </p>
            <h3 className=" text-sm text-gray-300">
               The best student management software so far. I love the easy use and the constant update to the software. Our burden of doing things manually is over.Will recommend them anytime anywhere.Try Edutrack
            </h3>


                  {/* star image */}
          <div className="flex mt-2">
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />

           </div>
        </div>

      </MagicCard>

      <MagicCard
        className="w-[20rem] h-[18rem]  glass cursor-pointer border-white/10 grid items-center justify-center shadow-2xl whitespace-wrap "
        gradientColor={theme === "dark" ? "#30394AFF" : "#182A4BFF"}
      >
        <div className="grid p-5">
            <h1 className="text-gray-300  pb-1 text-[15px] font-semibold text-gray-300">
            Mr. Eric Nkrumah
            </h1>
            <p className="pb-2  text-[12px] text-gray-300 ">
                @IT Coordinator, Presbyterian Boys&apos; Senior High School
            </p>
            <h3 className=" text-sm text-gray-300">
            The mobile app for [Your School Management System] has been a hit with our students and parents. It&apos;s convenient, easy to use, and provides real-time updates on school news and events.
            </h3>


                  {/* star image */}
          <div className="flex mt-2">
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
       

           </div>
        </div>

      </MagicCard>

      <MagicCard
        className="w-[20rem] h-[18rem]  glass cursor-pointer border-white/10 grid items-center justify-center shadow-2xl whitespace-wrap "
        gradientColor={theme === "dark" ? "#30394AFF" : "#182A4BFF"}
      >
        <div className="grid p-5">
            <h1 className="text-gray-300  pb-1 text-[15px] font-semibold text-gray-300">
                   Dr. (Mrs.) Afua Adusei
            </h1>
            <p className="pb-2  text-[12px] text-gray-300 ">
                @Principal, Wesley Girls&apos; High School
            </p>
            <h3 className=" text-sm text-gray-300">
                We&apos;ve seen a significant improvement in student grades and overall academic performance since implementing [Your School Management System]. The system&apos; analytics and insights have helped us identify areas where students need extra support.
            </h3>


                  {/* star image */}
          <div className="flex mt-2">
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />

           </div>
        </div>

      </MagicCard>

      <MagicCard
        className="w-[20rem] h-[18rem]  glass cursor-pointer border-white/10 grid items-center justify-center shadow-2xl whitespace-wrap "
        gradientColor={theme === "dark" ? "#30394AFF" : "#182A4BFF"}
      >
        <div className="grid p-5">
            <h1 className="text-gray-300  pb-1 text-[15px] font-semibold text-gray-300">
               Mr. Kofi Annan
            </h1>
            <p className="pb-2  text-[12px] text-gray-300 ">
                @Class Teacher, St. Augustine&apos;s College
            </p>
            <h3 className=" text-sm text-gray-300">
                 The attendance tracking and reporting features in [Your School Management System] have saved us a significant amount of time and reduced errors. The system is very intuitive and easy to use.
            </h3>


                  {/* star image */}
          <div className="flex mt-2">
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />

           </div>
        </div>

      </MagicCard>

      <MagicCard
        className="w-[20rem] h-[18rem]  glass cursor-pointer border-white/10 grid items-center justify-center shadow-2xl whitespace-wrap "
        gradientColor={theme === "dark" ? "#30394AFF" : "#182A4BFF"}
      >
        <div className="grid p-5">
            <h1 className="text-gray-300  pb-1 text-[15px] font-semibold text-gray-300">
            Ms. Akua Mensah
            </h1>
            <p className="pb-2  text-[12px] text-gray-300 ">
                @School Administrator, Ghana International School
            </p>
            <h3 className=" text-sm text-gray-300">
                We were impressed by the customization options and scalability of [Your School Management System]. The support team was also very responsive and helpful during the implementation process.
            </h3>


                  {/* star image */}
          <div className="flex mt-2">
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />

           </div>
        </div>

      </MagicCard>

      <MagicCard
        className="w-[20rem] h-[18rem]  glass cursor-pointer border-white/10 grid items-center justify-center shadow-2xl whitespace-wrap "
        gradientColor={theme === "dark" ? "#30394AFF" : "#182A4BFF"}
      >
        <div className="grid p-5">
            <h1 className="text-gray-300  pb-1 text-[15px] font-semibold text-gray-300">
            Mr. Kwame Boateng
            </h1>
            <p className="pb-2  text-[12px] text-gray-300 ">
                @ICT Director, Accra Academy
            </p>
            <h3 className=" text-sm text-gray-300">
               The parent portal feature in [Your School Management System] has greatly improved communication between teachers, parents, and students. We&apos;ve seen a notable increase in parental engagement and student performance.
            </h3>


                  {/* star image */}
          <div className="flex mt-2">
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />
              <Image
                  src={star}
                      alt="star_image"
                      width="100"
                      height="100"
                      sizes="fit-content"
                      className="h-4 w-4 mt-1 fit-content"    
                />

           </div>
        </div>

      </MagicCard>
     
    </div>
        
</div>
  );
}
