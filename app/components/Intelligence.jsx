import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

const SpotlightSection = () => {
  const services = [
    {
      title: "Copilot Noha (AI Brain)",
      description:
        "The central intelligence layer that orchestrates all agents, interprets business data and provides actionable recommendations.",
      icon: "",
      color: "#3b82f6",
      canvasColors: [
        [59, 130, 246],
        [96, 165, 250],
      ],
    },
    {
      title: "External AI Agents",
      description:
        "Voice, SMS and Email agents that handle customer interactions in real time with human-like accuracy",
      icon: "",
      color: "#8b5cf6",
      canvasColors: [
        [139, 92, 246],
        [168, 85, 247],
      ],
    },
    {
      title: "Automation Studio",
      description:
        "A drag-and-drop workflow builder that allows users to design, test and deploy business automations without writing code.",
      icon: "",
      color: "#06b6d4",
      canvasColors: [
        [6, 182, 212],
        [34, 211, 238],
      ],
    },
    {
      title: "Smart CRM ",
      description:
        "A dynamic, semi-automated CRM enriched by Noha and connected to all customer touchpoints.",
      icon: "",
      color: "#10b981",
      canvasColors: [
        [16, 185, 129],
        [52, 211, 153],
      ],
    },
    {
      title: "Task & Workflow Manager ",
      description:
        "A centralized hub for managing internal actions, team collaboration and project tracking with role-based access control.",
      icon: "",
      color: "#f59e0b",
      canvasColors: [
        [245, 158, 11],
        [251, 191, 36],
      ],
    },
    {
      title: "Insights & Analytics Hub ",
      description:
        "A unified dashboard consolidating performance metrics across agents, automations and CRM.",
      icon: "",
      color: "#ef4444",
      canvasColors: [
        [239, 68, 68],
        [248, 113, 113],
      ],
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-16 relative overflow-hidden bg-[#000000]">
      {/* Background Effects */}
      <div className="absolute inset-0 from-black-500/5 via-transparent to-green-500/5"></div>
      <div className="absolute top-16 right-4 sm:top-24 sm:right-8 lg:top-32 lg:right-20 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-black-500/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-16 left-4 sm:bottom-24 sm:left-8 lg:bottom-32 lg:left-20 w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-black-500/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 glass-card subtle-glow text-green-400 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
            Premium Services
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold max-w-4xl mx-auto text-white mb-4 sm:mb-6 leading-tight text-center px-2">
            <span className="text-green-400">Intelligence </span> at the Core of
            Your Business
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-2">
            Unlock your business potential with our comprehensive suite of
            AI-powered solutions
          </p>
        </div>

        {/* Services Grid with Spotlight Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 lg:mb-16">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <CardSpotlight
                className="h-full group cursor-pointer"
                color={service.color}
                radius={300}
              >
                <div className="relative z-20 h-full flex flex-col p-4 sm:p-6">
                  {/* Icon */}
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  {/* <div className="mt-6 pt-4 border-t border-slate-700/50">
                    <span className="text-sm font-medium text-slate-500 group-hover:text-white transition-colors duration-300 inline-flex items-center">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </span>
                  </div> */}
                </div>
              </CardSpotlight>

              {/* Canvas Reveal Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-md overflow-hidden">
                <CanvasRevealEffect
                  animationSpeed={3}
                  containerClassName="bg-transparent absolute inset-0"
                  colors={service.canvasColors}
                  dotSize={2}
                  showGradient={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        {/* <div className="text-center">
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto border-purple-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-slate-300 mb-6 text-lg">
              Experience the power of AI-driven solutions tailored to your
              unique business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Start Free Trial
              </button>
              <button className="border border-purple-500 text-purple-400 hover:bg-purple-500/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SpotlightSection;
