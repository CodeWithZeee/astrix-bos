"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AudioLines } from "lucide-react";

const HNW = () => {
  return (
    <>
      {/* =======================
          HEADING (Centered)
      ======================== */}
      <div className="w-full flex justify-center items-center gap-2 text-center px-4 pt-18 ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold flex items-center">
          How <span className="text-green-400 mx-2">noha</span> works
        </h2>
      </div>

      {/* =======================
          MAIN SECTION
          Lottie (Left) + Text (Right)
      ======================== */}
      <section className="flex flex-col lg:flex-row items-center justify-between bg-black text-white px-4 lg:px-16 ">
        {/* LEFT SIDE: Lottie Animation */}
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <DotLottieReact
            src="https://lottie.host/19269cf4-1c5d-4ae5-8f6e-1fd0c240f956/EfvGbidReo.lottie"
            loop
            autoplay
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-auto "
          />
        </div>

        {/* RIGHT SIDE: Texts */}
        <div className="flex flex-col justify-center text-center lg:text-left w-full lg:w-1/2 space-y-6">
          <p className="audiowide text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
            Noha runs the entire backend of your business so you can focus on
            growth, not grind.
          </p>

          <p className="audiowide text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
            She follows up, answers calls, books appointments, manages your
            pipeline, and delivers reports — without integrations, app-hopping,
            or human bottlenecks.
          </p>

          <p className="mt-3 audiowide text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            One platform. One AI brain. Infinite scale.
          </p>
        </div>
      </section>
    </>
  );
};

export default HNW;
