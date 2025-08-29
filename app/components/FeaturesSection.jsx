import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

const FeaturesSection = () => {
  const features = [
    {
      title: "Daily Briefing",
      description:
        "Start every morning with a personalized AI-curated snapshot of your business. The agent compiles open tasks, new leads, pending follow-ups, and key messages from the previous day, so you wake up fully informed and ready to prioritize without digging through emails or dashboards.",
      link: "#ai-voice",
    },
    {
      title: "Smart Suggestions",
      description:
        "The AI doesn't just wait for instructions—it anticipates them. By monitoring your pipeline, communication history, and workflows, it nudges you with timely recommendations (e.g., “Follow up with Sarah today” or “Schedule a demo with this prospect”). This ensures no opportunity slips through the cracks.",
      link: "/",
    },
    {
      title: "Calendar & Task Management",
      description:
        "Forget manual scheduling chaos. The agent integrates directly with your calendar, automatically booking meetings, rescheduling conflicts, and updating tasks in real time. It works across teams, so everyone stays aligned without back-and-forth emails.",
      link: "#pipeline",
    },
    {
      title: "Business Snapshot",
      description:
        "Need a quick update? Just ask. The AI delivers live metrics—revenue, pipeline progress, support tickets, or project KPIs—through text or voice. It transforms complex dashboards into instant insights, keeping leadership and teams on the same page anytime, anywhere.",
      link: "#support",
    },
    {
      title: "Contextual Recall",
      description:
        "No more searching through logs. The AI remembers context, so you can ask natural questions like “What was discussed in Tuesday's call?” or “Show me the contract update from last week,” and it instantly retrieves the right information, saving hours of digging.",
      link: "#lead-qualification",
    },
    {
      title: "Voice Command Ready",
      description:
        "Whether you're commuting, multitasking, or in the field, control your operations with simple voice commands. From creating tasks to pulling reports, the AI executes your requests instantly, making true hands-free business management a reality.",
      link: "#x",
    },
    {
      title: "Lead Monitor",
      description:
        "The AI continuously monitors your CRM and communication channels, flagging leads that are going cold or overdue for follow-up. It can even draft personalized re-engagement messages to warm them back up, turning “lost opportunities” into revived prospects.",
      link: "#y",
    },
    {
      title: "Instant SOP Recall",
      description:
        "Never get stuck waiting on instructions again. The AI instantly surfaces the correct Standard Operating Procedure, training material, or workflow document when you ask—ensuring consistency, speed, and accuracy across your team.",
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
            <span className="text-green-400">NOHA'S</span>: Solutions
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
