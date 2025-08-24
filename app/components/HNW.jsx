"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const HNW = () => {
  return (
    <>
      {/* Centered Heading */}
      <div className="w-full flex justify-center items-center ">
        <img src="/voice.png" alt="voice" className="w-16 h-20 " />
        <h2 className="text-6xl font-bold flex items-center">
          How <span className="text-green-400 mx-2">noha</span>
          works
        </h2>
        <img src="/voice.png" alt="voice" className="w-16 h-20 " />
      </div>

      <section className="flex flex-row items-center justify-between min-h-screen bg-[#000000] text-white ml-16 max-w-full">
        {/* Left Side: Lottie animation */}
        <div className="">
          <DotLottieReact
            src="https://lottie.host/19269cf4-1c5d-4ae5-8f6e-1fd0c240f956/EfvGbidReo.lottie"
            loop
            autoplay
            style={{ width: 400, height: 400 }}
          />
        </div>

        {/* Right Side : Texts */}
        <div className="flex-1 flex flex-col justify-center items-start p-8 ">
          <p className="text-4xl ">
            Noha runs the entire backend of your business so you can focus on
            growth, not grind.
          </p>
          <br />
          <p className="text-4xl mb-4">
            She follows up, answers calls, books appointments, manages your
            pipeline, and delivers reports — without integrations, app- hopping,
            or human bottlenecks.
          </p>
          <br />
          <p className="text-4xl mb-4">
            One platform. One AI brain. Infinite scale.
          </p>
        </div>
      </section>
    </>
  );
};

export default HNW;
