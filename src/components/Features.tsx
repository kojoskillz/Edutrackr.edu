'use client'

import { CalendarIcon, FileTextIcon, PersonIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, ClipboardList, CreditCard, Users, BookOpenCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import AnimatedBeamMultipleOutputDemo from "@/components/ui/animated-list";
import AnimatedListItem from "@/components/ui/animated-list";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";

const files = [
  {
    name: "Student management",
    body: "Easily manage student data, track progress, and make data-driven decisions.",
  },
  {
    name: "Financial tracker",
    body: "Track and manage student payments, fees, and invoices.",
  },
  {
    name: "Staff management",
    body: "Store and manage individual staff profiles and roles.",
  }
];

const managementFeatures = [
  { name: "Results", icon: <ClipboardList className="w-4 h-4" /> },
  { name: "Payments", icon: <CreditCard className="w-4 h-4" /> },
  { name: "Reports", icon: <FileTextIcon className="w-4 h-4" /> },
  { name: "Teachers", icon: <Users className="w-4 h-4" /> },
  { name: "Classes", icon: <BookOpenCheck className="w-4 h-4" /> },
  { name: "Admin", icon: <PersonIcon className="w-4 h-4" /> }
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Student Data",
    description: "Comprehensive student management system",
    href: "#",
    cta: "View details",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-col">
              <figcaption className="text-sm font-medium dark:text-white">
                {f.name}
              </figcaption>
              <blockquote className="mt-2 text-xs">{f.body}</blockquote>
            </div>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Notifications",
    description: "Real-time alerts and updates",
    href: "#",
    cta: "View alerts",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedListItem>
        <div className="absolute inset-0 flex flex-col gap-2 p-4 overflow-y-auto">
          {['New assignment', 'Fee due', 'Meeting reminder', 'Report ready'].map((item, idx) => (
            <div key={idx} className="p-2 rounded-lg bg-white/5 border border-white/10">
              <div className="text-sm">{item}</div>
              <div className="text-xs text-gray-400">2{idx} minutes ago</div>
            </div>
          ))}
        </div>
      </AnimatedListItem>
    ),
  },
  {
    Icon: Share2Icon,
    name: "Management",
    description: "All school administration tools",
    href: "#",
    cta: "Explore tools",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 gap-1 p-2">
        {managementFeatures.map((feature, idx) => (
          <div
            key={idx}
            className={cn(
              "flex flex-col h-[12rem] m-2 items-center justify-center p-1 rounded",
              "bg-white/5 border border-white/10 hover:bg-white/10",
              "transition-colors duration-200 cursor-pointer"
            )}
          >
            <div className="text-blue-300">{feature.icon}</div>
            <span className="text-xs mt-1 text-center">{feature.name}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Calendar",
    description: "Academic schedule and events",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "View calendar",
    background: (
      <Calendar
        mode="single"
        selected={new Date()}
        className="absolute right-0 top-4 origin-top rounded-md border border-white/15 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export default function BentoDemo() {
  return (
    <BentoGrid className="grid-cols-2">
      {features.map((feature, idx) => (
        <BentoCard
          key={idx}
          {...feature}
        />
      ))}
    </BentoGrid>
  );
}
