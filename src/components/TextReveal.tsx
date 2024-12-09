import TextReveal from "../components/ui/text-reveal";
import Image from "next/image";
import img1 from "../app/assets/img1.png";

export default function TextRevealDemo() {
  return (
    <div>
            <div className="flex md:mt-20 mt-10 mb-[-8rem] md:mb-[-5rem] relative m-auto border-blue-500 border-[2px] rounded-full w-[11.5rem] place-content-center m-auto ">
                    <Image
                    src={img1}
                        alt="star_image"
                        width="100"
                        height="100"
                        sizes="fit-content"
                        className="h-7 w-7 fit-content"    
                    />
                   <h1 className="text-white sticky font-semibold text-center lawn_color ">
                       About Edutrack
                    </h1>
            </div>

            <div className="z-10 text-center flex min-h-64 items-center justify-center rounded-lg  bg-[#000409] dark:bg-[#000409]">
                    <TextReveal text="EduTrack is a cutting-edge student management system designed to streamline educational institutions' administrative tasks. Our innovative platform provides a comprehensive solution for managing student data, tracking academic progress, and facilitating communication between educators, students, and parents." />
            </div>
            <h1 className="sticky lg:mt-[-6rem] md:mt-[-6rem] mt-[-11rem] m-16 md:text-5xl text-2xl font-bold place-content-center m-auto text-center lawn_color ">
                       We are here to simplify your work    
            </h1>

    </div>
  );
}
