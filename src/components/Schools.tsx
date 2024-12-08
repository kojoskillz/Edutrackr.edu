import React from 'react'
import Image from "next/image";
import logo0 from "../app/assets/logo0.jpg"
import logo1 from "../app/assets/logo1.jpg"
import logo2 from "../app/assets/logo2.jpg"
import logo3 from "../app/assets/logo3.jpg"
import logo4 from "../app/assets/logo4.jpg"
import logo5 from "../app/assets/logo5.jpg"
import logo6 from "../app/assets/logo6.jpg"
import logo7 from "../app/assets/logo7.jpg"
import logo8 from "../app/assets/logo8.jpg"

const Schools = () => {
  return (
    <div >
          <div className="z-40 bg-[#000409] ">
            <h1 className="text-gray-500 text-center text-sm mt-10">
                Trusted by 150+ educational institutions
            </h1>


            <div className='flex place-content-center logo m-a marquee' >
                <div className='logo-container  flex animate'>
                    <Image
                        src={logo0}
                            alt="star_image"
                            width="100"
                            height="100"
                            sizes="fit-content"
                            className=" rounded-full md:h-[5.5rem] h-[4rem] md:w-[5.5rem] w-[4rem] fit-content m-3"    
                        />   
                    <Image
                        src={logo1}
                            alt="star_image"
                            width="100"
                            height="100"
                            sizes="fit-content"
                            className=" rounded-full md:h-[5.5rem] h-[4rem] md:w-[5.5rem] w-[4rem] fit-content m-3"    
                        />   
                    <Image
                        src={logo2}
                            alt="star_image"
                            width="100"
                            height="100"
                            sizes="fit-content"
                            className=" rounded-full md:h-[5.5rem] h-[4rem] md:w-[5.5rem] w-[4rem] fit-content m-3"    
                        />   
                    <Image
                        src={logo3}
                            alt="star_image"
                            width="100"
                            height="100"
                            sizes="fit-content"
                            className=" rounded-full md:h-[5.5rem] h-[4rem] md:w-[5.5rem] w-[4rem] fit-content m-3"    
                        />   
                    <Image
                        src={logo4}
                            alt="star_image"
                            width="100"
                            height="100"
                            sizes="fit-content"
                            className=" rounded-full md:h-[5.5rem] h-[4rem] md:w-[5.5rem] w-[4rem] fit-content m-3"    
                        />   
                    <Image
                        src={logo5}
                            alt="star_image"
                            width="100"
                            height="100"
                            sizes="fit-content"
                            className=" rounded-full md:h-[5.5rem] h-[4rem] md:w-[5.5rem] w-[4rem] fit-content m-3"    
                        />   
                    <Image
                        src={logo6}
                            alt="star_image"
                            width="100"
                            height="100"
                            sizes="fit-content"
                            className=" rounded-full md:h-[5.5rem] h-[4rem] md:w-[5.5rem] w-[4rem] fit-content m-3"    
                        />   
                    <Image
                        src={logo7}
                            alt="star_image"
                            width="100"
                            height="100"
                            sizes="fit-content"
                            className=" rounded-full md:h-[5.5rem] h-[4rem] md:w-[5.5rem] w-[4rem] fit-content m-3"    
                        />   
                    <Image
                        src={logo8}
                            alt="star_image"
                            width="100" 
                            height="100"
                            sizes="fit-content"
                            className=" rounded-full md:h-[5.5rem] h-[4rem] md:w-[5.5rem] w-[4rem] fit-content m-3"    
                        />   
        </div>

        </div>
        </div>


    </div>
  )
};

export default Schools
