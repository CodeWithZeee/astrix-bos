import React from "react";
import { CardSpotlight } from "./ui/card-spotlight";
import { CanvasRevealEffect } from "./ui/canvas-reveal-effect";

const SpotlightSection = () => {
  const services = [
    {
      title: "Business Intelligence",
      description:
        "Transform raw data into actionable insights with advanced analytics and reporting tools that help you make informed decisions.",
      icon: "📊",
      color: "#3b82f6",
      canvasColors: [
        [59, 130, 246],
        [96, 165, 250],
      ],
    },
    {
      title: "Process Automation",
      description:
        "Eliminate repetitive tasks and streamline workflows with intelligent automation that adapts to your business needs.",
      icon: "⚡",
      color: "#8b5cf6",
      canvasColors: [
        [139, 92, 246],
        [168, 85, 247],
      ],
    },
    {
      title: "Customer Insights",
      description:
        "Understand your customers better with deep behavioral analysis and predictive modeling for enhanced engagement.",
      icon: "👥",
      color: "#06b6d4",
      canvasColors: [
        [6, 182, 212],
        [34, 211, 238],
      ],
    },
    {
      title: "Revenue Optimization",
      description:
        "Maximize your revenue potential with AI-driven pricing strategies and sales performance optimization.",
      icon: "💰",
      color: "#10b981",
      canvasColors: [
        [16, 185, 129],
        [52, 211, 153],
      ],
    },
    {
      title: "Risk Management",
      description:
        "Proactively identify and mitigate business risks with predictive analytics and real-time monitoring systems.",
      icon: "🛡️",
      color: "#f59e0b",
      canvasColors: [
        [245, 158, 11],
        [251, 191, 36],
      ],
    },
    {
      title: "Growth Strategy",
      description:
        "Accelerate your business growth with data-driven strategies and market opportunity identification.",
      icon: "🚀",
      color: "#ef4444",
      canvasColors: [
        [239, 68, 68],
        [248, 113, 113],
      ],
    },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-[#0b0f17]">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5"></div>
      <div className="absolute top-32 right-20 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-32 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card subtle-glow text-purple-400 px-6 py-3 rounded-full text-sm font-medium mb-6">
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
          <h2 className="text-6xl font-bold text-white mb-6 leading-tight">
            Advanced Solutions
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Unlock your business potential with our comprehensive suite of
            AI-powered solutions
          </p>
        </div>

        {/* Services Grid with Spotlight Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <div key={index} className="relative group">
              <CardSpotlight
                className="h-full group cursor-pointer"
                color={service.color}
                radius={300}
              >
                <div className="relative z-20 h-full flex flex-col">
                  {/* Icon */}
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-300 flex-grow">
                    {service.description}
                  </p>

                  {/* Learn More Link */}
                  <div className="mt-6 pt-4 border-t border-slate-700/50">
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
                  </div>
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
        <div className="text-center">
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
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
