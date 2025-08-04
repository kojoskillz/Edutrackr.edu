"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import Image from "next/image";
import Edutracklogo from "../app/assets/edutrackrlogo1.png";

export function LampDemo() {
  return (
    <div className="min-h-32 flex flex-col">
      {/* Main Content - Adjusted for better motion visibility */}
      <div className="flex-grow relative overflow-hidden">
        <LampContainer className="h-full">
          <motion.div
            initial={{ opacity: 0.5, y: 150 }} // Start further down
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "0px 0px -100px 0px" }} // Adjust viewport trigger
            transition={{
              delay: 0.3,
              duration: 1.2, // Slower animation
              ease: [0.16, 1, 0.3, 1] // Spring-like easing
            }}
            className="flex flex-col items-center justify-center pt-32 pb-40 px-4" // More padding
          >
            <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight leading-[1.2] text-transparent md:text-7xl">
              Step into the next generation <br /> of student management
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.7, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              viewport={{ margin: "0px 0px -100px 0px" }}
              className="text-gray-300 text-center font-medium mt-10 text-xl max-w-4xl leading-relaxed"
            >
              Where effortless administration meets cutting-edge technology to transform education
            </motion.p>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="text-black mt-10 w-44 text-xl font-medium rounded-lg p-3 bg-white hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started &rarr;
            </motion.button>
          </motion.div>
        </LampContainer>
      </div>

     
      {/* Footer */}
      <footer className="bg-white/5 py-12 px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-7xl mx-auto">
          <hr className="border-gray-700 mb-12 w-20 mx-auto" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Company Info */}
            <div className="flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src={Edutracklogo}
                  alt="Edutrack logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <h5 className="text-white text-2xl font-semibold">Edutrackr</h5>
              </div>
              <p className="text-gray-400 text-sm text-center md:text-left mb-6">
                Revolutionizing school management with cutting-edge technology solutions.
              </p>
              <div className="flex gap-4">
                {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                  <a 
                    key={social} 
                    href="#" 
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social}
                  >
                    <div className="w-5 h-5 bg-gray-400 rounded-full hover:bg-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h5 className="text-white text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                {['Home', 'Features', 'About Us', 'Contact Us'].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-start">
              <h5 className="text-white text-lg font-semibold mb-4">Contact Us</h5>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 mt-1 bg-gray-400 rounded-full" />
                  <span className="text-gray-400 text-sm">Accra, Ghana</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 mt-1 bg-gray-400 rounded-full" />
                  <div className="text-gray-400 text-sm">
                    <div>+233 54-1833-813</div>
                    <div>+233 59-4750-442</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-4 h-4 mt-1 bg-gray-400 rounded-full" />
                  <span className="text-gray-400 text-sm">skilluxetechnologies@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-16 pt-6 border-t border-gray-800">
            <p className="text-gray-500 text-xs text-center">
              &copy; {new Date().getFullYear()} Skilluxe Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
