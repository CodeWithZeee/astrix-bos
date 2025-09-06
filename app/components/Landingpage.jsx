"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import { AudioLines } from "lucide-react";
const Landingpage = () => {
  return (
    <section className="flex flex-col relative lg:flex-row items-center justify-between  bg-[#000000] text-white px-4 lg:ml-16 lg:mt-65 md:mt-65 sm:mt-30 mt-7.5  max-w-full">
      {/* Left Side: Text and Button */}
      <div className="flex flex-col items-start max-w-full sm:mt-4 mt-20 z-10 backdrop-blur-[2px] lg:max-w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <p className="mokoto text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
          <span className="mokoto text-green-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            AstrixBOS
          </span>{" "}
          - The World's First{" "}
          <span className="mokoto text-green-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            AI-NATIVE
          </span>{" "}
          Business Operating System with built-in Co-Pilot
        </p>
        <br /> {/* Border */}
        <div className=" hidden lg:flex overflow-hidden border w-full border-green-400 border-dashed" />
        <div className="audiowide text-base sm:text-lg md:text-xl leading-relaxed mt-10">
          Co-Pilot Noha runs the backend operations so you can focus on growth
        </div>
        <br />
        <button className="mokoto hover:scale-105 transition-all duration-150 border-dotted border-2 border-green-400 rounded-3xl p-3 sm:p-4 cursor-pointer flex items-center gap-2 text-sm sm:text-base mx-auto lg:mx-0 justify-center">
          <span className="pt-1"> Tour</span>
          <span className="mokoto text-green-400 pt-1"> AstrixBOS </span>
          <span className="pt-1">Platform</span>
          <AudioLines className="h-5" />
        </button>
      </div>
      {/* Right Side: Lottie Animation */}
      <div className="flex justify-center items-center w-full lg:w-auto absolute absoluteCenter -z-0">
        <DotLottieReact
          src="https://lottie.host/0fe466c8-fb8c-44f8-a097-4416b6074507/1vpdz9rTZY.lottie"
          loop
          autoplay
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            minHeight: "300px",
          }}
          className="w-full"
        />
      </div>
    </section>
  );
};
export default Landingpage;
