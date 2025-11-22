import React from "react";
import GlassmorphismCard from "./GlassmorphismCard";

const Noids = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center mt-20 mb-6 px-4">
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
      <div className="flex justify-center items-center ">
        <GlassmorphismCard
          imageSrc="SMS.png"
          glowColor="blue"
          title="SMS Noid"
          description="Automates two-way texting with smart, human-like replies."
        />
        <GlassmorphismCard
          imageSrc="Call.png"
          glowColor="yellow"
          title="Call Noid"
          description="Handles voice calls naturally — answers, books, and follows up."
        />
        <GlassmorphismCard
          imageSrc="Email.png"
          glowColor="red"
          title="Email Noid"
          description="Reads, understands, and replies to emails automatically."
        />
      </div>
    </>
  );
};

export default Noids;
