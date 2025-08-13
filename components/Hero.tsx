"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="relative w-full pt-16 pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-48 bg-gradient-to-br from-purple-600 to-blue-600 text-white overflow-hidden">
      <div className="container relative z-10 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4">
          Revolutionize Your Workflow
        </h1>
        <p className="text-lg opacity-80 md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8">
          Streamline tasks, boost productivity, and achieve your goals faster with our cutting-edge solution.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link href="#contact">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-200">
              Get Started
            </Button>
          </Link>
          <Link href="#features">
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
      {/* Placeholder for visual elements like gradients or abstract shapes */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <svg className="absolute top-0 left-0 w-1/2 h-full object-cover fill-purple-700/50 animate-pulse" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="0" cy="0" r="70" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-1/2 h-full object-cover fill-blue-700/50 animate-pulse animation-delay-500" viewBox="0 0 100 100" preserveAspectRatio="none">
          <circle cx="100" cy="100" r="70" />
        </svg>
      </div>
    </section>
  );
}
