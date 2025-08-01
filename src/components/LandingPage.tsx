"use client";
import React from "react";
import { Boxes } from "../components/ui/background-boxes";
import { cn } from "@/lib/utils";
import Image from "next/image";
import thumpup from "../app/assets/thumpup.png";
import boss from "../app/assets/img0.jpg";
import students from "../app/assets/students.png"; 

export default function BackgroundBoxesDemo() {
  return (
    <div className="min-h-screen relative w-full overflow-hidden bg-slate-950 flex flex-col items-center justify-center px-6 py-16">
      {/* Enhanced background overlay */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-slate-950 to-blue-900/10 z-10" />
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] pointer-events-none" />

      {/* Main Content Container - now with max-height constraint */}
      <div className="relative z-30 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 max-h-[90vh]">
        {/* Left Content - now with scrollable content if needed */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start overflow-y-auto custom-scrollbar py-4">
          {/* Welcome badge */}
          <div className="relative flex items-center rounded-full px-4 py-1.5 mx-auto md:mx-0 border z-40 border-blue-400/30 bg-gradient-to-r from-blue-900/40 via-slate-900 to-blue-900/40 backdrop-blur-sm w-fit">
            <Image 
              src={thumpup}
              alt="star_image"
              width={24}
              height={24}
              className="mr-2 h-5 w-5"
            />                
            <h1 className="text-blue-100 text-sm font-medium tracking-wider">
              WELCOME TO EDUTRACKR
            </h1>
          </div>
          
          {/* Headline with responsive sizing */}
          <h1 className={cn(
            "md:text-5xl text-4xl font-bold text-white relative z-20 text-center md:text-left mt-6 leading-tight",
            "bg-clip-text text-transparent bg-gradient-to-r from-blue-100 to-blue-400"
          )}>
            Transform <span className="text-blue-300">Education</span> With<br />
            Our <span className="text-blue-300">Intelligent</span><br />
            School Management Platform
          </h1>
          
          {/* Description */}
          <p className="text-center md:text-left text-lg mt-6 text-blue-100/80 relative z-20 max-w-lg leading-relaxed">
            Streamline operations, enhance learning outcomes, and unify your institution's ecosystem.
          </p>
          
          {/* Buttons with adjusted spacing */}
          <div className="flex flex-col md:flex-row gap-3 mt-6">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 transition-all duration-300 z-20 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 flex items-center gap-2 group">
              <span className="text-white font-medium tracking-wide text-sm">Get Started</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
            <button className="px-6 py-3 rounded-lg border border-blue-400/50 text-blue-300 hover:bg-blue-900/30 hover:border-blue-400/80 transition-all duration-300 z-20 hover:shadow-md hover:shadow-blue-500/10 text-sm">
              <span className="font-medium tracking-wide">Schedule Demo</span>
            </button>
          </div>
          
          {/* Testimonial with adjusted size */}
          <div className="flex z-50 mt-8 bg-slate-800/30 backdrop-blur-lg p-4 rounded-xl border border-slate-700/50 shadow-md w-full max-w-md">
            <div className="relative">
              <Image
                src={boss}
                alt="Principal testimonial"
                width={48}
                height={48}
                className="rounded-full h-12 w-12 object-cover border-2 border-blue-400/80"
              />
              <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1 border-2 border-slate-800">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
            </div>            
            <div className="ml-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="#3b82f6" stroke="#3b82f6" strokeWidth="1">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>
              <h1 className="text-white text-sm font-medium mt-1">
                "Revolutionized our school administration!"
              </h1>
              <p className="text-blue-200/70 text-xs mt-1">
                Mr. Koku Darlington, Principal<br />
                <span className="text-blue-300/60">Marriot International School</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Right Image - Perfectly fitted */}
        <div className="hidden md:flex w-1/2 relative z-30 h-full items-center justify-end">
          <div className="relative w-full h-full max-h-[120vh] aspect-[1/1.3]">
            <Image
              src={students}
              alt="Students learning"
              fill
              className="object-cover object-right"
              quality={100}
              priority
            />
            {/* Subtle floating elements */}
            <div className="absolute top-1/4 -left-8 w-24 h-24 rounded-full bg-blue-600/20 blur-xl -z-10"></div>
            <div className="absolute bottom-1/3 -right-8 w-32 h-32 rounded-full bg-blue-400/15 blur-xl -z-10"></div>
          </div>
        </div>
      </div>
      
      <Boxes />
      
      {/* Add this to your global CSS for custom scrollbar */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
}
