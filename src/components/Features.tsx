'use client'
import { ClipboardList, Users, BookOpenCheck, FileTextIcon, Share2Icon } from "lucide-react"
import { motion } from "framer-motion"
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { WavyBackground } from "./ui/wavy-background"
import { BackgroundGradient } from "./ui/background-gradient"

const features = [
  {
    title: "School Management Hub",
    description: "Centralized administration platform",
    className: "md:col-span-2",
    content: (
      <div className="relative h-full p-4">
        <WavyBackground className="absolute inset-0" />
        <div className="relative z-10 flex flex-col h-full">
          <TextGenerateEffect 
            words="Admin Dashboard" 
            className="text-3xl font-bold mb-4" 
          />
          <div className="grid grid-cols-3 gap-4 mt-auto">
            {["Students", "Teachers", "Classes"].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center"
              >
                <div className="text-sm text-gray-300">{item}</div>
                <div className="text-2xl font-bold mt-1">
                  {i === 0 ? "1,245" : i === 1 ? "78" : "45"}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    ),
    icon: <ClipboardList className="h-6 w-6 text-purple-500" />
  },
  {
    title: "Academic Modules",
    description: "Essential educational tools",
    className: "md:col-span-1 ",
    content: (
      <div className="p-4 h-full flex flex-col">
        <h3 className="text-lg font-medium mb-4">Core Features</h3>
        <div className="space-y-4">
          {[
            { name: "Attendance", icon: "✅", stats: "98% accuracy" },
            { name: "Grading", icon: "📝", stats: "Automated" },
            { name: "Timetable", icon: "⏰", stats: "Dynamic" },
            { name: "Reports", icon: "📈", stats: "Real-time" }
          ].map((module, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 5 }}
              className="flex items-center gap-3 p-3 bg-white/5 rounded-xl backdrop-blur-sm"
            >
              <span className="text-2xl">{module.icon}</span>
              <div>
                <div className="font-medium">{module.name}</div>
                <div className="text-xs text-gray-400">{module.stats}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
    icon: <BookOpenCheck className="h-6 w-6 text-blue-500" />
  },
  {
    title: "Student Management",
    description: "Track student progress",
    className: "md:col-span-1",
    content: (
      <div className="p-4 h-full">
        <div className="flex flex-col gap-3 h-full">
          {[
            { name: "Alice Johnson", grade: "A", attendance: "95%" },
            { name: "Bob Smith", grade: "B+", attendance: "89%" },
            { name: "Charlie Brown", grade: "A-", attendance: "92%" }
          ].map((student, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-3 bg-white/5 rounded-xl backdrop-blur-sm"
            >
              <div className="flex justify-between items-center">
                <span className="font-medium">{student.name}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  student.grade.includes('A') 
                    ? 'bg-green-500/20 text-green-500' 
                    : 'bg-blue-500/20 text-blue-500'
                }`}>
                  {student.grade}
                </span>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                Attendance: {student.attendance}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
    icon: <Users className="h-6 w-6 text-green-500" />
  },
  {
    title: "Reporting System",
    description: "Generate school reports",
    className: "md:col-span-2 text-white",
    content: (
      <div className="p-4 h-full  text-white flex flex-col justify-between">
        <div className="text-white">
          <TextGenerateEffect 
            words="Comprehensive reporting for all school data" 
            className="text-2xl text-white font-medium mb-6" 
          />
          <div className="grid grid-cols-3 gap-4 mb-10">
            {["Report Cards", "Attendance", "Progress"].map((report, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/5 rounded-xl p-4 text-center backdrop-blur-sm"
              >
                <div className="text-3xl mb-2">
                  {i === 0 ? "📋" : i === 1 ? "📅" : "📈"}
                </div>
                <div className="text-sm">{report}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <BackgroundGradient className="mt-6 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">Generate Reports</div>
              <div className="text-sm text-gray-400">Quarterly performance analysis</div>
            </div>

          </div>
        </BackgroundGradient>
      </div>
    ),
    icon: <FileTextIcon className="h-6 w-6 text-orange-500" />
  }
]

export default function SchoolDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-24">
      <BentoGrid className="grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature, idx) => (
          <BentoCard
            key={idx}
            name={feature.title}
            description={feature.description}
            background={feature.content}
            Icon={Share2Icon}
            href="#"
            cta="Learn more"
            className={feature.className}
          />
        ))}
      </BentoGrid>
    </div>
  )
}
