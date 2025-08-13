"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const featuresData = [
  {
    title: "Seamless Integration",
    description: "Easily connect with your existing tools and platforms without any hassle.",
    icon: "🔗", // Placeholder icon
    color: "text-blue-500",
  },
  {
    title: "Enhanced Productivity",
    description: "Automate repetitive tasks and free up your time to focus on what matters most.",
    icon: "🚀", // Placeholder icon
    color: "text-green-500",
  },
  {
    title: "Advanced Analytics",
    description: "Gain deep insights into your performance with our powerful and intuitive analytics dashboard.",
    icon: "📊", // Placeholder icon
    color: "text-purple-500",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Discover how our platform can help you achieve more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className={`text-4xl mb-4 ${feature.color}`}>{feature.icon}</div>
                <CardTitle className="text-xl font-semibold mb-2">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
