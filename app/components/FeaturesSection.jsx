import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const FeaturesSection = () => {
  const features = [
    {
      title: "Smart Daily Briefing",
      description:
        "Kickstart your day with an AI-curated snapshot and proactive nudges to keep tasks, leads, and follow-ups on track.",
      link: "#ai-voice",
    },
    // {
    //   title: "Smart Suggestions",
    //   description:
    //     "The AI doesn't just wait for instructions—it anticipates them. By monitoring your pipeline, communication history, and workflows, it nudges you with timely recommendations (e.g., “Follow up with Sarah today” or “Schedule a demo with this prospect”). This ensures no opportunity slips through the cracks.",
    //   link: "#smart-suggestions",
    // },
    {
      title: "Calendar & Task Management",
      description:
        "Seamlessly books, reschedules, and updates tasks across your team’s calendar—no back-and-forth emails.",
      link: "#pipeline",
    },
    {
      title: "Business Snapshot",
      description:
        "Get real-time metrics like revenue, pipeline, or KPIs via chat or voice—instant insights without dashboards.",
      link: "#support",
    },
    // {
    //   title: "Contextual Recall",
    //   description:
    //     "Ask natural questions like “Tuesday’s call?” and the AI retrieves the right info instantly.",
    //   link: "#lead-qualification",
    // },
    {
      title: "Voice Command Ready",
      description:
        "Run your business hands-free with simple voice commands for tasks, reports, and updates.",
      link: "#x",
    },
    {
      title: "Cold Lead Revival + Smart Recall",
      description:
        "Stay ahead with AI that flags cold leads for re-engagement and instantly recalls past calls, notes, or updates on request.",
      link: "#y",
    },
    {
      title: "Instant SOP Recall",
      description:
        "Pulls up any training or process doc on demand, keeping your team fast and consistent",
      link: "z",
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
          <h2 className="font-bold text-white mb-6 leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="text-green-400">NOHA'S</span>{" "}
            : Solutions
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed urbanist">
            Not a bot. Not just a tool. Your true second-in-command.
          </p>
        </div>

        {/* Features Grid with Hover Effect */}
        <HoverEffect items={features} className="max-w-6xl mx-auto" />
      </div>
    </section>
  );
};

export default FeaturesSection;
