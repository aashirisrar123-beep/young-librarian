"use client";

import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
