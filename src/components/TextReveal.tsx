'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import img1 from "../app/assets/img1.png";
import dashboardPreview from "../app/assets/mockup1.png"; 
import dashboardPreview2 from "../app/assets/mockup2.png"; 

export default function AboutSection() {
  return (
    <section className="relative bg-[#000409] min-h-[110vh] flex flex-col justify-center overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-5 -z-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat bg-[length:40px_40px]" />
      </div>

      {/* Floating animated elements */}
      <div className="absolute -bottom-20 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl -z-10" />
      <div className="absolute -top-10 right-1/4 w-40 h-40 rounded-full bg-cyan-500/10 blur-3xl -z-10" />
      <div className="absolute top-1/2 left-20 w-24 h-24 rounded-full bg-purple-500/10 blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10 py-20">
        {/* About Edutrackr badge with animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative mx-auto mb-16 w-fit group"
        >
          <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-md group-hover:blur-lg transition-all duration-300 -z-10" />
          <div className="relative border-2 border-blue-500/50 rounded-full px-8 py-3 flex items-center gap-3 backdrop-blur-sm group-hover:border-blue-400 transition-colors duration-300">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Image
                src={img1}
                alt="Decoration icon"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
            </motion.div>
            <h2 className="text-white font-semibold text-lg tracking-wider bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              ABOUT EDUTRACKR
            </h2>
          </div>
        </motion.div>

        {/* Main content grid */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content section */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Transforming Education Management with <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Smart Technology</span>
              </h3>
              <p className="text-lg text-white/90 mb-6">
                Edutrackr is the modern solution for schools and universities to manage student data, academic progress, and institutional operations with unprecedented efficiency.
              </p>
              <p className="text-lg text-white/90 mb-8">
                Our platform integrates seamlessly with existing systems while providing powerful analytics and communication tools that save administrators hours each week.
              </p>
            </motion.div>
            
            {/* Features list */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1.5 w-3 h-3 rounded-full bg-cyan-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Comprehensive Student Profiles</h4>
                  <p className="text-white/70 text-sm">Track academic history, attendance, behavior, and more in one centralized location.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1.5 w-3 h-3 rounded-full bg-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Automated Reporting</h4>
                  <p className="text-white/70 text-sm">Generate compliance reports, transcripts, and progress summaries with one click.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1.5 w-3 h-3 rounded-full bg-purple-400 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-medium">Parent Portal</h4>
                  <p className="text-white/70 text-sm">Keep families informed with real-time updates on grades, attendance, and school announcements.</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Device mockup overlay */}
          <div className="lg:w-1/2 relative h-[500px]">
            {/* Laptop mockup - slides in from left */}
            <motion.div 
              className="absolute w-full max-w-[700px] z-10"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 60,
                damping: 15,
                duration: 0.8
              }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-2xl blur-lg -z-10" />
              <div className="relative  overflow-hidden shadow-2xl backdrop-blur-sm">
                <Image
                  src={dashboardPreview}
                  alt="Edutrackr Dashboard Preview"
                  width={800}
                  height={600}
                  className="object-cover w-full"
                  quality={100}
                />
                {/* Animated glow effect */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl" />
                </div>
              </div>
            </motion.div>

            {/* Phone mockup - slides in from right */}
            <motion.div 
              className="absolute right-0 bottom-0 w-[200px] z-20"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 0.3,
                type: "spring",
                stiffness: 60,
                damping: 15,
                duration: 0.8
              }}
              viewport={{ once: true }}
            >
              <div className="relative  rounded-xl overflow-hidden shadow-2xl backdrop-blur-sm">
                <Image
                  src={dashboardPreview2}
                  alt="Edutrackr Mobile Preview"
                  width={400}
                  height={600}
                  className="object-cover w-full"
                  quality={100}
                />
              </div>
              {/* Small glow effect */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}
