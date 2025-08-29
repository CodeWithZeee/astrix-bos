"use client";
import React from "react";
import AnimatedCardGrid from "./ui/gradient-cards";

const NS = () => {
  return (
    <>
      <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold flex items-center justify-center">
        <span className="text-green-400 p-8">Noha's </span> Solution
      </h1>
      <h2 className="audiowide text-2xl font-semibold flex items-center justify-center">
        An Entire Operations Team — In a Single AI
      </h2>
      <section className="flex items-center min-h-screen bg-[#000000] text-white ml-16">
        {/* Left Side: Texts */}
        <div className="max-w-1/2 text-4xl p-12">
          <p>
            Noha is powered by AstrixBOS, the first AI-native operating system
            built for service businesses.{" "}
          </p>
          <br />
          <p>
            Together, they clear every operational bottleneck so you can scale
            without scaling your headaches.{" "}
          </p>
        </div>
        {/* Right Side: Animated Cards */}
        <div className="flex flex-col mt-4  ">
          <AnimatedCardGrid className="" />
          {/* <AnimatedCardGrid className="" /> */}
        </div>
      </section>
      <p className="flex justify-center items-center text-3xl mb-32">
        The result: <span className="text-emerald-400 pl-2 pr-2">more</span>
        closed deals, <span className="text-emerald-400 pl-2 pr-2">more</span>
        time to grow , and{" "}
        <span className="text-emerald-400 pl-2 pr-2">more</span>micromanagement.
      </p>
    </>
  );
};

export default NS;
