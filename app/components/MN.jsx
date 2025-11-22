"use client";
import React, { useState, useEffect } from "react";
import AnimatedCardGrid from "./ui/gradient-cards";
import Image from "next/image";

const TypewriterText = ({ text, speed = 50, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && <span className="animate-pulse">|</span>}
    </span>
  );
};

const MN = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-12 sm:mt-20 md:mt-38">
        <span className="mokoto p-2 text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold text-center">
          MEET <span className="text-green-400">NOHA</span>: YOUR{" "}
          <span className="text-green-400">BUSINESS COPILOT</span>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center my-4 px-4">
        <h1 className="audiowide text-center ">
          The <span className="text-green-400">intelligence layer</span> Between
          You and AstrixBOS
        </h1>
        <br />
        <h2 className="audiowide  text-center max-w-3xl mt-2 px-4">
          Noha is the conversational AI that sits between you and your operating
          system
          <br />
          <br />
          Forget learning dashboards — simply talk to your business, and Noha
          handles the rest.
        </h2>
      </div>
      <section className="flex flex-col items-center justify-center bg-[#000000] text-white">
        <div className="relative transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 group">
          <div className="absolute inset-0 bg-green-400/20 rounded-full blur-3xl scale-0 group-hover:scale-100 transition-all duration-500 ease-out"></div>
          <div className="absolute inset-0 bg-green-300/30 rounded-full blur-2xl scale-0 group-hover:scale-100 transition-all duration-700 ease-out delay-100"></div>
          <Image
            className="relative z-10 mt-0.5"
            src="/Noha69.png"
            alt="Noha Avatar"
            width={500}
            height={500}
          />
          <div className="h-12 w-80 flex justify-center items-center text-black font-bold text-bold group-hover:text-green-700 bg-green-400 rounded-3xl absolute bottom-0 left-1/2 transform -translate-x-1/2 text-2xl z-20 transition-colors duration-300">
            NOHA
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center max-sm:flex-col ">
        <h2 className="audiowide text-xl text-center mb-2 mt-8 max-w-4xl px-4">
          <TypewriterText
            text="Noha analyzes every call, message, lead, task, and workflow, turning raw activity into clear, actionable business intelligence."
            speed={30}
          />
        </h2>
      </div>
    </>
  );
};

export default MN;
