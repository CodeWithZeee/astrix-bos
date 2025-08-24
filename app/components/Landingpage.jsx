"use client" ;
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Landingpage = () => {
  return (
    <section className="flex flex-row items-center justify-between min-h-screen bg-[#000000] text-white ml-16 mt-15 max-w-full">
      {/* Left Side: Text and Button */}
      <div className="flex flex-col items-start max-w-1/2">
        <p className="mokoto text-5xl min-h-2 ">
          <span className="mokoto text-green-400 text-5xl"> AstrixBOS </span>
          - The World’s First
          <span className="mokoto text-green-400 text-5xl"> AI-NATIVE </span>
          Business Co-Pilot
        </p>
        <br />
        <div className="flex text-green-400">
          _______________________________________________________________
        </div>
        <div className="audiowide text-xl ">
          Noha runs the entire backend of your business so you can focus on growth, not grind.
        </div>
        <br />
        <button className="mokoto border-dotted border-2 border-green-400 rounded-3xl p-4 cursor-pointer flex items-center gap-2 ">
          Watch <span className="mokoto text-green-400 tracking-wide"> NOHA </span>
          <span> in action |</span>
          <img src="voice.png" alt="" className="inline-block w-6 h-6 ml-2" />
        </button>
      </div>
      {/* Right Side: Lottie Animation */}
      <div className="flex-1 flex justify-center items-center">
        <DotLottieReact
          src="https://lottie.host/0fe466c8-fb8c-44f8-a097-4416b6074507/1vpdz9rTZY.lottie"
          loop
          autoplay
          style={{ width: 400, height: 400 }}
        />
      </div>
    </section>
  );
};

export default Landingpage;