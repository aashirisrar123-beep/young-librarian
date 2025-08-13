"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const testimonialsData = [
  {
    quote: "This platform has completely transformed how we manage our projects. The efficiency gains are incredible!",
    name: "Alice Johnson",
    title: "CEO, Tech Innovators",
    avatar: "https://via.placeholder.com/80", // Placeholder avatar
  },
  {
    quote: "I was skeptical at first, but the results speak for themselves. Our productivity has doubled since implementing this solution.",
    name: "Bob Williams",
    title: "Project Manager, Global Solutions",
    avatar: "https://via.placeholder.com/80", // Placeholder avatar
  },
  {
    quote: "The best investment we've made this year. It's intuitive, powerful, and the support is outstanding.",
    name: "Charlie Brown",
    title: "Lead Developer, Creative Minds",
    avatar: "https://via.placeholder.com/80", // Placeholder avatar
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Don't just take our word for it. Hear from satisfied customers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border-none">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover" />
                  <div>
                    <CardTitle className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {testimonial.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="italic text-muted-foreground text-gray-700 dark:text-gray-300">
                  {`"${testimonial.quote}" `}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
