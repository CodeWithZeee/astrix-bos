import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const FeaturesSection = () => {
  const features = [
    {
      title: "Daily Briefing",
      description:
        "Overnight summary of tasks, leads, and messages to start your day informed and ready.",
      link: "#ai-voice",
    },
    {
      title: "Automated Follow-ups",
      description:
        "Transform your sales process with automated follow-up sequences that nurture leads, schedule appointments, and update your pipeline without manual intervention.",
      link: "#follow-ups",
    },
    {
      title: "Smart Pipeline Management",
      description:
        "Get real-time insights into your sales pipeline with intelligent tracking, automated updates, and predictive analytics to help you close more deals.",
      link: "#pipeline",
    },
    {
      title: "24/7 Customer Support",
      description:
        "Provide round-the-clock customer support with AI-powered responses that understand context, resolve common issues, and escalate complex problems to your team.",
      link: "#support",
    },
    {
      title: "Lead Qualification",
      description:
        "Automatically qualify and score leads based on your criteria, ensuring your sales team focuses on the most promising opportunities.",
      link: "#lead-qualification",
    },
    {
      title: "Intelligent Scheduling",
      description:
        "Streamline appointment booking with smart scheduling that considers availability, preferences, and automatically sends confirmations and reminders.",
      link: "#scheduling",
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-[#000000]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card subtle-glow text-green-400 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Core Features
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h2 className="text-5xl font-bold text-white mb-6 leading-tight ">
            MEET <span className="text-green-400">NOHA</span>: Your AI Co-Pilot
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed urbanist">
            Discover how Noha's intelligent features transform your business
            operations and drive growth
          </p>
        </div>

        {/* Features Grid with Hover Effect */}
        <HoverEffect items={features} className="max-w-6xl mx-auto" />

      </div>
    </section>
  );
};

export default FeaturesSection;
