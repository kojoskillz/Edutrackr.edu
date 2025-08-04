"use client";
import logoX from "../app/assets/edutrackrlogo1.png";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Code,
  Book,
  PieChart,
  DollarSign,
  Fingerprint,
  Bell,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Staff Management",
    description: "Efficient tools for managing faculty and administrative staff",
  },
  {
    icon: DollarSign,
    title: "Financial Management",
    description: "Comprehensive financial tracking and reporting",
  },
  {
    icon: Book,
    title: "Student Management",
    description: "Complete student information system and records",
  },
  {
    icon: Fingerprint,
    title: "Security",
    description: "Role-based access control and data protection",
  },
  {
    icon: PieChart,
    title: "Reports",
    description: "Analytics and insights for informed decision making",
  },
  {
    icon: Bell,
    title: "Notice Board",
    description: "Centralized communication platform for announcements",
  },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [showFeatures, setShowFeatures] = React.useState(false);

  return (
    <header className="sticky glass top-0 z-50 w-full">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center w-full space-x-4">
          <Link href={"/"} className="flex items-center space-x-2">
            <Image
              src={logoX}
              alt="Edutrack logo"
              width={40}
              height={40}
              className="rounded-full h-[2rem] w-[2rem] md:h-[2.2rem] md:w-[2.2rem] ml-3"
            />
            <span className="font-bold text-xl text-white">Edutrackr</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" className={navigationMenuTriggerStyle()}>
                  Home
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-4 rounded-[4px]">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b">
                      <h4 className="text-lg font-medium">Features</h4>
                      <Link href="/features" className="text-sm text-blue-500 hover:underline">
                        View all
                      </Link>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      {features.map((feature, index) => (
                        <NavigationMenuItem key={index}>
                          <Link
                            href={`/feature/${feature.title
                              .toLowerCase()
                              .replace(/\s+/g, "-")}`}
                            className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="flex items-start gap-4">
                              <div className="p-2 bg-muted rounded-md group-hover:bg-muted/80">
                                <feature.icon className="h-6 w-6 text-blue-500" />
                              </div>
                              <div>
                                <h5 className="font-medium mb-1 group-hover:text-blue-500">
                                  {feature.title}
                                </h5>
                                <p className="text-sm text-muted-foreground">
                                  {feature.description}
                                </p>
                              </div>
                            </div>
                          </Link>
                        </NavigationMenuItem>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium mb-1">Get started</h4>
                          <p className="text-sm text-muted-foreground">
                            Start transforming your educational institution today
                          </p>
                        </div>
                        <Button variant="secondary">Learn More</Button>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/pricing" className={navigationMenuTriggerStyle()}>
                  Pricing
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link href="/how-it-works" className={navigationMenuTriggerStyle()}>
                  How It Works
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden text-white">
            <Button variant="ghost" size="icon">
              <Menu className="h-10 w-10 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-full glass p-0">
            <SheetHeader className="border-b p-4 text-white">
              <div className="flex gap-2 ml-[-1.2rem]">
                <Image
                  src={logoX}
                  alt="Edutrack logo"
                  width={40}
                  height={40}
                  className="rounded-full h-[2rem] w-[2rem] ml-3"
                />
                <SheetTitle className="text-left text-white font-bold">EduTrack</SheetTitle>
              </div>
            </SheetHeader>
            <div className="flex flex-col py-4 text-white">
              <Link
                href="/"
                className="px-4 py-2 hover:bg-white hover:text-black rounded-[9px] text-white text-lg font-medium"
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
              <button
                className="flex text-white items-center justify-between px-4 py-2 text-lg font-medium text-left"
                onClick={() => setShowFeatures(!showFeatures)}
              >
                Features
                <ChevronDown
                  className={cn(
                    "h-5 w-5 transition-transform text-white",
                    showFeatures && "rotate-180"
                  )}
                />
              </button>
              {showFeatures && (
                <div className="px-4 py-2 space-y-4 text-white">
                  {features.map((feature, index) => (
                    <Link
                      key={index}
                      href={`/feature/${feature.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="flex items-start gap-4 py-2"
                      onClick={() => setOpen(false)}
                    >
                      <div className="p-2 bg-muted rounded-md">
                        <feature.icon className="h-6 w-6 text-blue-500" />
                      </div>
                      <div>
                        <h5 className="font-medium mb-1 text-white">{feature.title}</h5>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              <Link
                href="/pricing"
                className="px-4 py-2 text-lg rounded-[9px] hover:bg-white hover:text-black font-medium text-white"
                onClick={() => setOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/how-it-works"
                className="px-4 py-2 text-lg rounded-[9px] font-medium text-white hover:bg-white hover:text-black"
                onClick={() => setOpen(false)}
              >
                How it works
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
