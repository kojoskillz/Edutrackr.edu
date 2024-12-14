"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";

export function LampDemo() {
  return (
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
                    Get Started
                </button>
        </div>
      </motion.h1>
    </LampContainer>
  );
}
