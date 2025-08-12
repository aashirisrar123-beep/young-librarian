"use client";

import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { Menu } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after click
  };

  const navLinks = [
    { name: 'Features', id: 'features' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-md sticky top-0 z-50 px-4 py-3">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-16">
        {/* Logo Placeholder */}
        <div className="flex items-center">
          <Link href="#" className="text-2xl font-bold text-primary dark:text-primary-foreground cursor-pointer">
            Logo
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link 
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="text-lg font-medium hover:text-primary dark:hover:text-primary-foreground transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            Sign Up
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="hover:bg-transparent focus:bg-transparent"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 absolute top-16 left-0 right-0 z-40">
          <div className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="text-lg font-medium hover:text-primary dark:hover:text-primary-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button variant="default" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              Sign Up
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
