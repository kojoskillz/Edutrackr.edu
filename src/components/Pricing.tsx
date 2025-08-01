"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ChevronRight } from "lucide-react";

export default function Pricing() {
  return (
    <section className="w-full py-12 md:py-20 bg-black">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get a Plan That's Right For You
          </h1>
          <p className="text-xl text-gray-300">
            Start your Edutrackr journey today and unlock premium benefits with our upgraded plans
          </p>
        </div>

        {/* Value Proposition Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <Button variant="outline" className="rounded-full text-sm text-white mb-6 bg-black border-gray-700 hover:bg-gray-800">
              <span className="mr-2">✏️</span> How It Works
            </Button>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Competitive <span className="text-blue-400">Pricing Plans</span>
            </h2>
            <p className="text-gray-300 md:text-lg">
              At Edutrackr, we combine affordability with premium features designed for educational excellence.
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <div className="mb-6">
              <div className="flex items-center text-blue-400 mb-2">
                <Check className="w-5 h-5 mr-2" />
                <span>Top-tier design quality</span>
              </div>
              <p className="text-gray-300">
                One-time payment grants lifetime access with continuous updates and unlimited projects.
              </p>
            </div>
            <Button variant="outline" className="w-fit text-white rounded-md border-gray-700 hover:border-blue-400 hover:text-white bg-black hover:bg-gray-900">
              Contact Our Team
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Basic Plan */}
          <Card className="relative border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl shadow-lg overflow-hidden hover:shadow-blue-500/20 transition-shadow">
            <div className="absolute mt-[-10px]  top-4 left-4">
              <span className="px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full shadow-md">
                MOST POPULAR
              </span>
            </div>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="inline-block px-4 py-1 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full mb-4">
                      Basic
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Basic Package
                    </h3>
                    <p className="text-gray-400">
                      Perfect for medium-sized basic schools
                    </p>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20">
                    Get Started
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>User management for up to 200 students</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Basic reporting </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Priority customer support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive grade management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>24/7 customer support</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Premium Plan */}
          <Card className="border-2 border-blue-500/30 bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl shadow-lg overflow-hidden hover:shadow-blue-500/30 transition-shadow">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-6">
                  <div>
                    <span className="inline-block px-4 py-1 text-sm font-medium text-blue-400 bg-blue-400/10 rounded-full mb-4">
                      Premium
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      Premium Package
                    </h3>
                    <p className="text-gray-400">
                      Designed for large basic schools
                    </p>
                  </div>
                  <Button className="w-full bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500/10 hover:text-blue-400">
                    Upgrade Now
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Manage up to 500 student records</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Advanced analytics and reporting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Online payment integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Custom reporting tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enterprise Option */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Need a custom solution for your institution?
          </p>
          <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-500/10 hover:text-blue-400">
            Request Enterprise Plan
            <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
