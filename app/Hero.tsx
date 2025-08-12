"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-pink-500 opacity-70 -z-10"></div>

      <div className="relative z-10 text-center px-4">
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
        >
          Unlock Your Potential with Our Innovative Solution
        </h1>
        <p className="text-lg sm:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Revolutionizing the way you work, connect, and grow.
        </p>
        <div className="flex justify-center space-x-4">
          <Button variant="secondary" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform">
            Get Started Today
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4 hover:scale-105 transition-transform border-white text-white hover:bg-white hover:text-purple-600">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
