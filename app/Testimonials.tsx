"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const testimonialsData = [
  {
    quote: "This platform has transformed our workflow! The AI automation is a game-changer.",
    name: "Alice Johnson",
    title: "CEO, Tech Innovations Inc.",
    avatarPlaceholder: "AJ",
  },
  {
    quote: "Incredible integration capabilities. We were up and running in minutes.",
    name: "Bob Williams",
    title: "CTO, Global Solutions Ltd.",
    avatarPlaceholder: "BW",
  },
  {
    quote: "The security features give us peace of mind. Highly recommended!",
    name: "Charlie Brown",
    title: "Lead Developer, Creative Minds Co.",
    avatarPlaceholder: "CB",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300 border-none text-left">
              <CardHeader className="p-6 pb-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary dark:bg-primary-foreground text-white flex items-center justify-center text-xl font-bold mr-4">
                    {testimonial.avatarPlaceholder}
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {testimonial.name}
                    </CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <p className="text-gray-700 dark:text-gray-300 italic mb-4"> "{testimonial.quote}" </p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
