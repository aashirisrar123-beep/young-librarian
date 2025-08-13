"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-white/95 backdrop-blur supports-backdrop-filter dark:bg-gray-900/95">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="#" className="flex items-center gap-2 font-bold text-lg text-blue-600">
            {/* Placeholder for Logo */}
            <span>YourBrand</span>
          </Link>
          <nav className="hidden gap-4 lg:flex">
            <Link href="#hero" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Hero
            </Link>
            <Link href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#contact">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
              Get Started
            </Button>
          </Link>
          {/* Hamburger Menu for mobile will be added later if needed */}
        </div>
      </div>
    </header>
  );
}
