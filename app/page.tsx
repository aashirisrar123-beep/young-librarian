"use client";

import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="hero"><Hero /></section>
        <section id="features"><Features /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><ContactForm /></section>
      </main>
      <Footer />
    </div>
  );
}
