"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, CloudCog, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const featuresData = [
  {
    title: "Intelligent Automation",
    description: "Streamline your workflows with AI-powered automation that handles repetitive tasks.",
    icon: BrainCircuit,
  },
  {
    title: "Seamless Cloud Integration",
    description: "Connect effortlessly with your favorite cloud services for enhanced productivity.",
    icon: CloudCog,
  },
  {
    title: "Robust Security",
    description: "Ensuring your data is safe with state-of-the-art security protocols.",
    icon: ShieldCheck,
  },
];

export default function Features() {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 border-none
            ">
              <CardHeader className="flex justify-center items-center p-6">
                <feature.icon className="h-12 w-12 text-primary dark:text-primary-foreground" />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 text-center">
                  {feature.title}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300 text-center">
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
