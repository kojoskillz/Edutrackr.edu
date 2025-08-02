'use client';

import { motion } from 'framer-motion';
import Image from "next/image";
import img1 from "../app/assets/img1.png";
import dashboardPreview from "../app/assets/mockup1.png"; 
import dashboardPreview2 from "../app/assets/mockup2.png"; 

export default function AboutSection() {
  // Floating orb data
  const orbs = [
    { id: 1, color: 'bg-blue-500', size: 'w-16 h-16', top: '10%', left: '5%', delay: 0 },
    { id: 2, color: 'bg-purple-500', size: 'w-24 h-24', top: '70%', left: '80%', delay: 0.3 },
    { id: 3, color: 'bg-cyan-500', size: 'w-20 h-20', top: '30%', left: '90%', delay: 0.6 },
    { id: 4, color: 'bg-pink-500', size: 'w-12 h-12', top: '85%', left: '10%', delay: 0.9 },
  ];

  // Feature cards data
  const features = [
    {
      title: "Comprehensive Profiles",
      description: "Centralized records with academic history, attendance, and students information.",
      icon: "📊",
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "Automated Reporting",
      description: "Generate compliance reports and results with one click.",
      icon: "⚡",
      color: "from-blue-400 to-purple-500"
    },
    {
      title: "Parent Portal",
      description: "Real-time updates on grades and school announcements.",
      icon: "👨‍👩‍👧",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="relative bg-black min-h-screen flex flex-col justify-center overflow-hidden py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-50">
        {/* Grid pattern with subtle animation */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          animate={{ opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat bg-[length:40px_40px]" />
        </motion.div>

        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.1) 0%, transparent 30%)',
              'radial-gradient(circle at 90% 30%, rgba(168, 85, 247, 0.1) 0%, transparent 30%)',
              'radial-gradient(circle at 50% 80%, rgba(236, 72, 153, 0.1) 0%, transparent 30%)',
              'radial-gradient(circle at 10% 20%, rgba(56, 189, 248, 0.1) 0%, transparent 30%)',
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Floating orbs */}
        {orbs.map((orb) => (
          <motion.div
            key={orb.id}
            className={`absolute rounded-full filter blur-3xl opacity-20 ${orb.size} ${orb.color}`}
            style={{ top: orb.top, left: orb.left }}
            animate={{
              y: [0, -40, 0],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              delay: orb.delay,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated title section */}
        <motion.div 
          className="relative mx-auto mb-20 w-fit"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Shimmer border effect */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-purple-500/30 opacity-70 blur-xl group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          
          {/* Animated border */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-transparent"
            animate={{
              borderImage: [
                'linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.5) 50%, rgba(56,189,248,0) 100%) 1',
                'linear-gradient(180deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.5) 50%, rgba(56,189,248,0) 100%) 1',
                'linear-gradient(270deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.5) 50%, rgba(56,189,248,0) 100%) 1',
                'linear-gradient(360deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.5) 50%, rgba(56,189,248,0) 100%) 1',
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="relative bg-gradient-to-br from-gray-900/80 to-gray-900/50 border border-gray-800/50 rounded-full px-8 py-3 flex items-center gap-3 backdrop-blur-lg overflow-hidden">
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 opacity-20"
              animate={{
                background: [
                  'conic-gradient(from 0deg at 50% 50%, rgba(56,189,248,0.3) 0%, rgba(56,189,248,0) 30%)',
                  'conic-gradient(from 90deg at 50% 50%, rgba(168,85,247,0.3) 0%, rgba(168,85,247,0) 30%)',
                  'conic-gradient(from 180deg at 50% 50%, rgba(236,72,153,0.3) 0%, rgba(236,72,153,0) 30%)',
                  'conic-gradient(from 270deg at 50% 50%, rgba(56,189,248,0.3) 0%, rgba(56,189,248,0) 30%)',
                ]
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            />
            
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
            <h2 className="text-white font-semibold text-lg tracking-wider bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              ABOUT EDUTRACKR
            </h2>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text content section */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  Revolutionizing
                </span> Education Through Technology
              </h3>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Edutrackr transforms school administration with cutting-edge tools that streamline processes, enhance communication, and empower educators.
              </p>
              
              {/* Mission card with holographic effect */}
              <motion.div 
                className="relative mb-12 p-8 bg-gradient-to-br from-gray-900/50 to-gray-900/30 rounded-2xl border border-gray-800/50 overflow-hidden group"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Holographic effect */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <h4 className="text-2xl font-semibold text-white mb-4">Our Vision</h4>
                <p className="text-white/80 mb-4 text-lg">
                  To create an ecosystem where technology enhances rather than complicates education, allowing teachers to teach and students to learn without administrative barriers.
                </p>
                <p className="text-white/80 text-lg">
                  We're building the future of education management—intuitive, powerful, and accessible to all.
                </p>
                
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, rgba(56,189,248,0) 0%, rgba(56,189,248,0.3) 50%, rgba(56,189,248,0) 100%)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%']
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>

              {/* Features grid with 3D tilt effect */}
              <motion.div 
                className="grid md:grid-cols-2 gap-6 mb-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15
                    }
                  }
                }}
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 p-6 rounded-xl border border-gray-800/50 overflow-hidden group"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ 
                      y: -5,
                      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)'
                    }}
                  >
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
                    
                    {/* Feature content */}
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{feature.icon}</span>
                      <div>
                        <h4 className="text-white font-medium mb-2 text-lg">{feature.title}</h4>
                        <p className="text-white/70">{feature.description}</p>
                      </div>
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Device mockups with matching spring animations */}
          <div className="lg:w-1/2 relative h-[600px]">
            {/* Laptop mockup */}
            <motion.div 
              className="absolute w-full max-w-[700px] z-10 group"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 60,
                damping: 15,
                duration: 0.8
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Floating container */}
              <motion.div
                className="relative"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                
                {/* Screen content */}
                <div className="relative overflow-hidden shadow-2xl backdrop-blur-sm rounded-xl border border-gray-800/50">
                  <Image
                    src={dashboardPreview}
                    alt="Edutrackr Dashboard Preview"
                    width={800}
                    height={600}
                    className="object-cover w-full"
                    quality={100}
                  />
                  
                  {/* Animated screen reflection */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%']
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                
                {/* Floating particles */}
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className={`absolute rounded-full bg-white/10 backdrop-blur-sm ${i === 1 ? 'w-3 h-3 top-10 left-10' : i === 2 ? 'w-2 h-2 bottom-20 right-20' : 'w-1 h-1 top-1/3 right-1/4'}`}
                    animate={{
                      y: [0, -10, 0],
                      x: [0, 5, 0],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 3 + i,
                      delay: i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Phone mockup - now with matching spring animation */}
            <motion.div 
              className="absolute right-0 bottom-0 w-[220px] z-20 group"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ 
                delay: 0.3,
                type: "spring",
                stiffness: 60,
                damping: 15,
                duration: 0.8
              }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Phone container with floating animation */}
              <motion.div
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-800/50"
                style={{
                  boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.3)'
                }}
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Screen content */}
                <Image
                  src={dashboardPreview2}
                  alt="Edutrackr Mobile Preview"
                  width={400}
                  height={600}
                  className="object-cover w-full"
                  quality={100}
                />
                
                {/* Screen glare effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%']
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
              
              {/* Floating glow */}
              <motion.div
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl -z-10"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
