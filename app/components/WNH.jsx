import React from "react";
import EasterCarousel from "./ui/corousel";

const WNH = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold flex flex-wrap items-center justify-center text-center leading-tight gap-2 sm:gap-4">
        WHO{" "}
        <span className="text-green-400 p-1 sm:p-2 md:p-3 lg:p-4">Noha</span>{" "}
        Helps?
      </h1>
      <h2 className="audiowide text-lg sm:text-xl md:text-2xl font-semibold flex items-center justify-center text-center px-4 sm:px-8 md:px-16 lg:px-24 mt-4 sm:mt-6">
        Noha is for service providers who want scale without chaos
      </h2>
      <section className="flex items-center min-h-screen bg-[#000000] text-white px-4 sm:px-8 md:px-16 lg:px-16">
        {/* Carousel Section */}
        <div className="w-full flex justify-center">
          <EasterCarousel />
        </div>
      </section>
    </div>
  );
};

export default WNH;
