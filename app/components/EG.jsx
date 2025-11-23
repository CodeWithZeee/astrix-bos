"use client";
import React from "react";

const EG = () => {
  return (
    <>
      {/* =======================
          HEADING (Centered)
      ======================== */}
      <div className="flex flex-col justify-center items-center gap-2 text-center px-4 pt-18 pb-4">
        <div className="inline-flex items-center gap-2 glass-card subtle-glow text-green-400 px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-medium mb-6">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
          </svg>
          Platform
        </div>
        <h2 className="flex flex-col coltext-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold  items-center">
           <span className="text-green-400 mx-2">Enterprise-Grade AI </span> with Zero Complexity
        </h2>
      </div>

      {/* Subheading */}
      <div className="w-full flex justify-center items-center text-center px-4 pb-6">
        <h3 className="audiowide text-base sm:text-lg md:text-xl text-slate-300">
          Set up an ENTIRE AI agent in just <span className="text-green-400">3 clicks</span> !!!
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

export default EG;
