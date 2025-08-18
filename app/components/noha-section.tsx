import { Card, CardContent } from "./ui/card";
import { Button, buttonVariants } from "./ui/button";
import {
  Bell,
  Compass,
  Calendar,
  BarChart3,
  Brain,
  Mic,
  TrendingUp,
  FileText,
} from "lucide-react";

import { cn } from "../lib/utils";

import Link from "next/link";
const features = [
  {
    icon: Bell,
    title: "Daily Briefing",
    description: "Overnight summary of tasks, leads, and messages",
  },
  {
    icon: Compass,
    title: "Smart Suggestions",
    description: "Proactively nudges you to act",
  },
  {
    icon: Calendar,
    title: "Calendar & Task Management",
    description: "Books, reschedules, and updates automatically",
  },
  {
    icon: BarChart3,
    title: "Business Snapshot",
    description: "Real-time metrics via chat or voice",
  },
  {
    icon: Brain,
    title: "Contextual Recall",
    description: 'Understands references like "Tuesday\'s call" instantly',
  },
  {
    icon: Mic,
    title: "Voice Command Ready",
    description: "Run your business hands-free",
  },
  {
    icon: TrendingUp,
    title: "Lead Monitor",
    description: "Detects and revives cold leads",
  },
  {
    icon: FileText,
    title: "Instant SOP Recall",
    description: "Retrieves any training or process doc instantly",
  },
];

export function NohaSection() {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: "#0b0f17" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Noha: Your AI Co-Pilot
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Not a bot. Not just a tool. Your true second-in-command.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/5 border-white/10 hover:border-white/20 backdrop-blur-sm"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors border border-white/10">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <p className="text-lg text-white font-medium mb-8">
            With Noha, your business doesn't just run smoother — it runs itself.
          </p>
          <Link
            href="/get-started"
            className={cn(
              "bg-white text-[#0b0f17] hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300", buttonVariants({
                variant: "default",
                size: "lg"
              })
            )}
          >
            Get Started with Noha
          </Link>
        </div>
      </div>
    </section>
  );
}
