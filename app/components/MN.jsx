"use client";
import React from "react";
import AnimatedCardGrid from "./ui/gradient-cards";
import Image from "next/image";

const MN = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-10 sm:mt-20 md:mt-38">
        <span className="mokoto text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center">
          MEET <span className="text-green-400">NOHA:</span> YOUR{" "}
          <span className="text-green-400">AI-COPILOT</span>
        </span>
      </div>
      <div className="flex items-center justify-center mt-8">
        <h2 className="audiowide text-xl font-semibold text-center">
          Not a bot. Not just a tool. Your true second-in-command
        </h2>
      </div>
      <section className="flex flex-col items-center justify-center bg-[#000000] text-white py-10 sm:py-12 md:py-16 md:min-h-screen">
        <div className="relative transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 group">
          <div className="absolute inset-0 bg-green-400/20 rounded-full blur-3xl scale-0 group-hover:scale-100 transition-all duration-500 ease-out"></div>
          <div className="absolute inset-0 bg-green-300/30 rounded-full blur-2xl scale-0 group-hover:scale-100 transition-all duration-700 ease-out delay-100"></div>
          <Image
            className="relative z-10 mt-0.5"
            src="/Noha_Avatar.png"
            alt="Noha Avatar"
            width={500}
            height={500}
          />
          <div className="h-12 w-full flex justify-center items-center text-black group-hover:text-green-700 bg-green-400 rounded-3xl absolute bottom-0 left-1/2 transform -translate-x-1/2 text-2xl z-20 transition-colors duration-300">
            NOHA
          </div>
        </div>
      </section>
      <h2 className="audiowide flex justify-center items-center text-2xl text-center mb-2 mt-8">
        With Noha, your business doesn’t just run smoother — it runs itself.
      </h2>
    </>
  );
};

export default MN;
