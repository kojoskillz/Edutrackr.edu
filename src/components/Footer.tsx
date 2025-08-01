"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
import Image from "next/image";
import Edutracklogo from "../app/assets/edutrackrlogo1.png";
// import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

export function LampDemo() {
  return (
    <div className="min-h-screen">
      <LampContainer>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 flex flex-col items-center justify-center"
        >
          <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight leading-[1.2] text-transparent md:text-7xl">
            Step into the next generation <br /> of student management
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-gray-300 text-center font-medium mt-10 text-xl max-w-4xl leading-relaxed"
          >
            Where effortless administration, data-driven insights, enhanced student engagement, and seamless integration and security come together to transform the educational experience
          </motion.p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-black mt-10 w-44 text-xl font-medium rounded-lg p-3 bg-white hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Get Started &rarr;
          </motion.button>
        </motion.div>
      </LampContainer>

      {/* Footer */}
      <div className="bg-white/5 py-12 px-4 sm:px-6 lg:px-8">
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
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {/* <FaFacebook size={20} /> */}
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {/* <FaTwitter size={20} /> */}
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {/* <FaInstagram size={20} /> */}
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h5 className="text-white text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-start">
              <h5 className="text-white text-lg font-semibold mb-4">Contact Us</h5>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  {/* <FaMapMarkerAlt className="text-gray-400 mt-1" /> */}
                  <span className="text-gray-400 text-sm">Accra, Ghana</span>
                </li>
                <li className="flex items-start gap-3">
                  {/* <FaPhone className="text-gray-400 mt-1" /> */}
                  <div className="text-gray-400 text-sm">
                    <div>+233 54-1833-813</div>
                    <div>+233 59-4750-442</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  {/* <FaEnvelope className="text-gray-400 mt-1" /> */}
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
      </div>
    </div>
  );
}
