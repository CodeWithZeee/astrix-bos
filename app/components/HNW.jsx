"use client";
import React from "react";

const HNW = () => {
  return (
    <>
      {/* =======================
          HEADING (Centered)
      ======================== */}
      <div className="w-full flex justify-center items-center gap-2 text-center px-4 pt-18 pb-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold flex items-center">
          How <span className="text-green-400 mx-2">noha</span> works
        </h2>
      </div>

      {/* Subheading */}
      <div className="w-full flex justify-center items-center text-center px-4 pb-6">
        <h3 className="audiowide text-base sm:text-lg md:text-xl text-slate-300">
          Set up an ENTIRE AI agent in just 3 clicks !!!
        </h3>
      </div>

      {/* =======================
          ROW 1: GIF Left, Text Right
      ======================== */}
      <section className="flex flex-col lg:flex-row items-center justify-between bg-black text-white px-4 lg:px-16 py-10">
        {/* LEFT: Video */}
        <div className="flex justify-center items-center w-full lg:w-1/2 mb-8 lg:mb-0">
          <video
            src="/FirstGIF.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-auto"
          />
        </div>

        {/* RIGHT: Text */}
        <div className="flex flex-col justify-center text-center lg:text-left w-full lg:w-1/2 space-y-6 pl-4">
          <p className="mt-3 audiowide text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
            Spin up a new AI Agent in seconds — no coding, no friction.
          </p>
          <p className="audiowide text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
           Just click “Create New Agent” and bring your automation to life.
          </p>
        </div>
      </section>

      {/* =======================
          ROW 2: GIF Right, Text Left (space reserved for 2nd GIF)
      ======================== */}
      <section className="flex flex-col lg:flex-row-reverse items-center justify-between bg-black text-white px-4 lg:px-16 py-10">
        {/* RIGHT: Video (Second placeholder uses same file for now) */}
        <div className="flex justify-center items-center w-full lg:w-1/2 mb-8 lg:mb-0">
          <video
            src="/SecondGIF.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] h-auto"
          />
        </div>

        {/* LEFT: Text */}
        <div className="flex flex-col justify-center text-center lg:text-left w-full lg:w-1/2 space-y-6">
          <p className="mt-3 audiowide text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
           Empower your agent with instant knowledge.
          </p>
          <p className="audiowide text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed">
           Assign sources, update in real-time, and ensure every conversation is backed by the right context.
          </p>
        </div>
      </section>
    </>
  );
};

export default HNW;
