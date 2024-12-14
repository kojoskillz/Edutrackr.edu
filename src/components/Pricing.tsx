"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight } from "lucide-react";

export default function Pricing() {
  return (
    <section className="w-full py-12 mb-[-5rem] mt-20">
   
    <div>
         <h1 className="text-white text-center font-semibold text-wrap text-5xl">
            Get a plan that&apos;s right for you
         </h1>
         <p className="text-gray-300 text-center mt-1 mb-10 text-wrap font-normal text-xl">
          Start your EduTrack journey today and discover more benefits in our upgraded plans
         </p>
    </div>

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4 mb-8">
            <div className="inline-flex">
              <Button variant="outline" className="rounded-full text-sm text-white">
                <span className="mr-2">✏️</span> How it works?
              </Button>
            </div>
            <h2 className="text-3xl text-white font-bold tracking-tight sm:text-4xl md:text-5xl">
                 Pocket-friendly <span className="lawn_color">  pricing plan</span>
            </h2>
            <p className="text-gray-300 md:text-lg">
               At Edutrack, we prioritize affordability.
            </p>
          </div>
          <div className="mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex flex-col  gap-4">
                <div className="text-blue-500">
                  <span className="text-sm ">✓ Top-tier design quality </span>
                </div>
                <p className="text-white">
                  One time payment grants you a lifetime access and continuous
                  updates with unlimited projects
                </p>
                <div className="inline-flex items-center hover:text-blue-400 gap-3 text-white">
                  <Button variant="outline" className="rounded-[5px] border-white/15 border-[1px]">
                    Contact Us
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                  {/* <span className="text-gray-300">
                    For enterprise-level purchases
                  </span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <Card className="relative border-white/5 glass rounded-[10px]">
            <div className="absolute -top-3 left-4">
              <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                MOST POPULAR
              </span>
            </div>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-6 mr-4 border-r">
                  <div>
                    <Button
                      variant={"outline"}
                      className="px-8 text-muted-foreground rounded-[5px] mb-4 text-white hover:text-blue-400  border-white/15 border-[1px] "
                    >
                       Basic
                    </Button>
                    <div className="flex items-baseline">
                      {/* <span className="text-2xl md:text-4xl font-bold text-blue-500">GHS 49</span> */}
                      <span className="text-2xl md:text-4xl font-bold text-white">
                        Basic Package
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                          Ideal for medium-sized basic schools
                    </p>
                  </div>
                  <Button className="bg-blue-500 rounded-[5px] hover:bg-blue-600 text-white w-fit">
                      Buy now
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <ul className="grid gap-4 text-white">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-500" />
                    <span>User management for up to 200 students</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-500" />
                    <span>Basic reporting and attendance tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-500" />
                    <span>Priority customer support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-500" />
                    <span> Grade management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-500" />
                    <span> Customer support</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-[2px] border-blue-500 glass rounded-[10px] ">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-6 border-r mr-4">
                  <div>
                    <Button
                      variant={"outline"}
                      className="px-8 text-muted-foreground rounded-[5px] mb-4 hover:text-blue-400  border-white/15 border-[1px] text-white"
                    > 
                       Premium
                    </Button>
                    <div className="flex items-baseline">
                      <span className="text-wrap text-2xl md:text-4xl font-bold text-blue-500">
                         Premium<span className="text-white"></span> 
                        <span className="text-white"> <br /> Package</span>
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 mt-2">
                       Ideal for large-size basic schools
                    </p>
                  </div>
                  <Button className="w-fit text-blue-500 hover:text-blue-300">
                    Buy now
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <ul className="grid gap-4 text-white">
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-500" />
                    <span>Manage up to 500 student records</span>
                  </li>
                  <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-blue-500" />
                    <span>Advanced reporting, attendance tracking, and grade management</span>
                  </li>
                  <li className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-blue-500" />
                    <span>Additional features (e.g., online payment integration, custom reporting)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-500" />
                    <span>Onboarding and training sessions for staff</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-blue-500" />
                    <span>Dedicated customer support</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
}
