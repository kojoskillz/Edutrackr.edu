'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import Image from "next/image";
import questionmark from "../app/assets/question.png";
import checkmark from "../app/assets/checkmark.png";

export default function FAQSection() {
  const faqItems = [
    {
      value: "item-1",
      question: "What is a Student Management System?",
      answer: "A Student Management System is a comprehensive software platform designed to streamline educational administration by centralizing student data, academic records, attendance tracking, and institutional reporting in one secure, accessible system."
    },
    {
      value: "item-2",
      question: "What are the benefits of using Edutrackr?",
      answer: "Edutrackr enhances educational management through automated workflows, real-time analytics, parent-teacher communication tools, and mobile accessibility. Institutions report 40%+ time savings on administrative tasks and improved student outcomes through data-driven insights."
    },
    {
      value: "item-3",
      question: "How do parents access student information?",
      answer: "Parents receive secure login credentials to our dedicated portal, providing 24/7 access to grades, attendance records, assignment deadlines, and school announcements. Two-factor authentication ensures complete data protection."
    },
    {
      value: "item-4",
      question: "What integration options are available?",
      answer: "Edutrackr seamlessly integrates with existing SIS platforms, learning management systems, and financial software through our API ecosystem. Our implementation team handles all data migration and training."
    },
    {
      value: "item-5",
      question: "How does the analytics dashboard work?",
      answer: "Our AI-powered analytics transform raw data into actionable insights with customizable reports on student performance trends, at-risk indicators, institutional KPIs, and predictive modeling for resource planning."
    },
    {
      value: "item-6",
      question: "What support options are available?",
      answer: "We offer 24/5 dedicated support via phone, email, and live chat, complemented by comprehensive documentation, video tutorials, and quarterly training webinars. Enterprise clients receive a dedicated success manager."
    }
  ];

  return (
    <section className="relative py-20 bg-[#000409] overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat bg-[length:40px_40px]" />
      </div>
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-purple-500/10 blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-md -z-10" />
            <div className="relative border border-blue-500/30 rounded-full px-6 py-2 flex items-center gap-2 backdrop-blur-sm">
              <Image
                src={questionmark}
                alt="Question mark icon"
                width={20}
                height={20}
                className="h-4 w-4 object-contain"
              />
              <span className="text-white font-medium text-sm tracking-wider">
                FREQUENTLY ASKED QUESTIONS
              </span>
            </div>
          </div>

          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-6 leading-tight"
          >
            Need Clarification? <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              We Have Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 text-center max-w-3xl mx-auto"
          >
            Explore our comprehensive knowledge base or contact our support team for personalized assistance with Edutrackr.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <AccordionItem 
                  value={item.value} 
                  className="border border-white/10 bg-gradient-to-b from-white/5 to-white/2 rounded-xl overflow-hidden shadow-lg"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-white/5 transition-colors text-lg font-medium text-white">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-white/80 bg-white/5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Improved CTA Marquee with better spacing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent -z-10" />
          <div className="relative py-8">
            <div className="flex items-center marquee-container">
              <div className="marquee-content flex items-center space-x-16">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center shrink-0">
                    <div className="flex items-center gap-6 px-8 py-4 bg-white/5 rounded-full backdrop-blur-sm border border-white/10">
                      <Image
                        src={checkmark}
                        alt="Checkmark icon"
                        width={28}
                        height={28}
                        className="h-7 w-7 text-cyan-400"
                      />
                      <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent whitespace-nowrap">
                        Experience Edutrackr Today
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .marquee-container {
          display: flex;
          width: 100%;
          overflow: hidden;
        }
        .marquee-content {
          display: flex;
          animation: scroll 25s linear infinite;
          min-width: 100%;
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </section>
  );
}
