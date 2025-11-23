"use client";
import React from "react";
import {
  Calculator,
  Receipt,
  MessageCircle,
  MessageSquare,
  Users,
} from "lucide-react";

const Roadmap = () => {
  const futureAgents = [
    {
      icon: Calculator,
      title: "CPA Agent",
      description: "Handles finance workflows and reporting",
      color: "blue",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Receipt,
      title: "Billing Agent",
      description: "Automates invoicing, reminders, and payment collection",
      color: "purple",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: MessageCircle,
      title: "Web Chatbot Agent",
      description: "Manages website conversations and lead capture",
      color: "green",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: MessageSquare,
      title: "Social DM Agent",
      description:
        "Responds to Instagram/WhatsApp/Facebook DMs and nurtures leads",
      color: "orange",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: Users,
      title: "HR Agent",
      description: "Manages onboarding, queries, interviews, and scheduling",
      color: "indigo",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#000000]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 glass-card subtle-glow text-green-400 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
            Roadmap
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Future <span className="text-green-400">Agents</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A vision board of upcoming intelligent modules designed to expand
            your automation capabilities
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {futureAgents.map((agent, index) => {
            const IconComponent = agent.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 p-6 sm:p-8 transition-all duration-300 hover:shadow-[0_20px_30px_rgba(0,0,0,0.3)] overflow-hidden"
              >
                {/* Glowing background effect */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${agent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                ></div>

                {/* Coming Soon Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-400/10 text-green-400 border border-green-400/20 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
                    Coming Soon
                  </span>
                </div>

                {/* Icon with glow */}
                <div className="relative z-10 mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-300 group-hover:scale-110">
                    <div
                      className={`absolute inset-0 rounded-xl bg-linear-to-br ${agent.gradient} opacity-0 group-hover:opacity-50 blur-md transition-opacity duration-300`}
                    ></div>
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-green-400 relative z-10" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 relative z-10">
                  {agent.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-400 leading-relaxed relative z-10">
                  {agent.description}
                </p>

                {/* Subtle shine effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute w-[150%] pb-[150%] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl"
                    style={{
                      backgroundImage: `radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Connecting Flow Lines (Desktop only) */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-green-400/20 to-transparent -translate-y-1/2 pointer-events-none">
          <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-400/40"></div>
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-400/40"></div>
          <div className="absolute left-3/4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-400/40"></div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 pt-8 border-t border-white/10">
          <p className="text-2xl audiowide text-slate-300 max-w-2xl mx-auto">
            All future agents will be fully orchestrated by{" "}
            <span className="text-green-400 font-semibold">Noha</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
