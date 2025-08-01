'use client'
import React from 'react';
import Image from "next/image";
import logo0 from "../app/assets/logo0.jpg";
import logo1 from "../app/assets/logo1.jpg";
import logo2 from "../app/assets/logo2.jpg";
import logo3 from "../app/assets/logo3.jpg";
import logo4 from "../app/assets/logo4.jpg";
import logo5 from "../app/assets/logo5.jpg";
import logo6 from "../app/assets/logo6.jpg";
import logo7 from "../app/assets/logo7.jpg";
import logo8 from "../app/assets/logo8.jpg";

const Schools = () => {
  const logos = [
    logo0, logo1, logo2, logo3, logo4,
    logo5, logo6, logo7, logo8
  ];

  return (
    <section className="py-12 bg-[#000409] overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-gray-400 text-sm font-medium mb-8 uppercase tracking-wider">
          Trusted by 150+ educational institutions worldwide
        </h2>
        
        <div className="relative w-full max-w-7xl mx-auto">
          {/* Gradient fade effects */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#000409] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#000409] to-transparent z-10" />
          
          {/* Marquee container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap py-4">
              {logos.map((logo, index) => (
                <div key={index} className="mx-4 flex-shrink-0">
                  <Image
                    src={logo}
                    alt={`Partner logo ${index}`}
                    width={88}
                    height={88}
                    className="rounded-full object-cover h-16 w-16 md:h-20 md:w-20 transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
              {/* Duplicate for seamless looping */}
              {logos.map((logo, index) => (
                <div key={`duplicate-${index}`} className="mx-4 flex-shrink-0">
                  <Image
                    src={logo}
                    alt={`Partner logo ${index}`}
                    width={88}
                    height={88}
                    className="rounded-full object-cover h-16 w-16 md:h-20 md:w-20 transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @media (hover: hover) {
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
};

export default Schools;
