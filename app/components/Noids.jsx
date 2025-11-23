import React from "react";
import GlassmorphismCard from "./GlassmorphismCard";

const Noids = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-20 mb-6 px-4 relative z-0">
        <div className="inline-flex items-center gap-2 glass-card subtle-glow text-green-400 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"
            />
          </svg>
          AI Agents
        </div>
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Meet the <span className="text-green-400">Astrix</span> Agents
        </h1>
        <br />
        <h2 className="mt-4 audiowide px-4">
          The <span className="text-green-400 font-bold">AI Workforce</span>{" "}
          Running Your Business
        </h2>
        <br />
        <p className="max-w-3xl text-center audiowide px-4">
          <span className="text-green-400">AstrixBOS</span> comes with a growing
          ecosystem of intelligent agents — each designed to automate a critical
          function.
        </p>
        <br />
        <p className="max-w-3xl text-center audiowide px-4">
          It takes less than 3 minutes to deploy an Agent on{" "}
          <span className="text-green-400">AstrixBOS</span>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 mb-12 relative overflow-visible">
        <GlassmorphismCard
          imageSrc="SMS.png"
          glowColor="blue"
          title="SMS Agent"
          description="Automates two-way texting with smart, human-like replies."
          scaleMore={true}
        />
        <GlassmorphismCard
          imageSrc="Call.png"
          glowColor="yellow"
          title="Call Agent"
          description="Handles voice calls naturally — answers, books, and follows up."
          scaleMore={true}
        />
        <GlassmorphismCard
          imageSrc="Email.png"
          glowColor="red"
          title="Email Agent"
          description="Reads, understands, and replies to emails automatically."
          scaleMore={true}
        />
      </div>
    </>
  );
};

export default Noids;
