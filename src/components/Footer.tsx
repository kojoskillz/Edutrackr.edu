"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";

import Image from "next/image";
import Edutracklogo from "../app/assets/Edutrack logo.png"

export function LampDemo() {
  return (

    <div>
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight leading-[30px] text-white/20 md:text-7xl"
      >
        Step into the next generation <br /> of student management 

        <div>
                 <p className="text-gray-300/10 text-center font-medium mt-10 text-wrap text-xl ">
                    Where effortless administration,  data-driven insights, enhanced student engagement, and seamless <br />  integration and security come together to transform the educational experience
                 </p>
                <button className="text-black mt-10 w-44 text-xl font-normal rounded-[9px] p-2 bg-white hover:bg-white/85 ">
                    Get Started &rarr;
                </button>
                
        </div>
      </motion.h1>


    </LampContainer>

    {/* footer */}
        <div   className="bg-white/5">
            <hr className="text-white/5 bg-white/5 w-full"  />
            <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-sm-6 col-xs-12">
     <div>

           <Image
                        src={Edutracklogo}
                            alt="star_image"
                            width="100"
                            height="100"
                            sizes="fit-content"
                            className=" rounded-full mb-2 md:h-[2rem] h-[4rem] md:w-[2rem] w-[4rem] fit-content"    
                        /> 
              <h5>EduTrack</h5>
        </div>  
        <p className="text-gray-300 text-sm">
           Manage your data with ease.
        </p>
        <ul className="social-media">
          <li>
            <a href="#" target="_blank">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="flex mt-[-2rem] ">

 
      <div className="col-md-4 col-sm-6 col-xs-12">
        <h5>Quick Links</h5>
        <ul className="quick-links">
          <li className="text-gray-300">
            <a href="#" className="text-gray-300 text-sm">Home</a>
          </li>
          <li className="text-gray-300">
            <a href="#" className="text-gray-300 text-sm">About Us</a>
          </li>
          <li className="text-gray-300">
            <a href="#" className="text-gray-300 text-sm">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 col-sm-12 col-xs-12">
        <h5>Contact Us</h5>
        <ul className="contact-info">
          <li>
            <i className="fa fa-map-marker"></i>
            <span className="text-gray-300 text-gray-300 text-sm">Accra,Ghana</span>
          </li>
          <li>
            <i className="fa fa-phone "></i>
            <div className="text-gray-300 text-gray-300 text-sm">+233 54-1833-813</div>
            <div className="text-gray-300 text-gray-300 text-sm">+233 53-9642-830 </div>
          </li>
          <li>
            <i className="fa fa-envelope"></i>
            <span className="text-gray-300 text-sm">skilluxetechnologies@gmail.com</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  <div className="copyright">
    <p className="text-gray-300 text-xs">&copy; Skilluxe Technologies. All rights reserved.</p>
  </div>
</footer>
        </div>
</div>
  );
}
