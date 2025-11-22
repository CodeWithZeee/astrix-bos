"use client";
import React from "react";

const GlassmorphismCard = ({
  imageSrc = "https://i.ibb.co/s5phbkg/shoe-golden.png",
  title = "",
  description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sunt veniam adipisci fugit qui quaerat!",
  glowColor = "blue",
}) => {
  // Define glow colors based on the glowColor prop
  const getGlowClasses = (color) => {
    switch (color) {
      case "blue":
        return {
          // outer: "bg-blue-400/20",
          inner: "bg-blue-300/30",
        };
      case "yellow":
        return {
          // outer: "bg-yellow-400/20",
          inner: "bg-yellow-300/30",
        };
      case "red":
        return {
          // outer: "bg-red-400/20",
          inner: "bg-red-300/30",
        };
      default:
        return {
          outer: "bg-blue-400/20",
          inner: "bg-blue-300/30",
        };
    }
  };

  const glowClasses = getGlowClasses(glowColor);

  return (
    <div className="overflow-visible flex items-center justify-center p-2 sm:p-4 relative z-10">
      <div className="group relative w-full max-w-[280px] sm:max-w-[300px] h-[350px] sm:h-[400px] rounded-3xl bg-white/5 backdrop-blur-sm border border-white/20 border-r-white/10 border-b-white/10 shadow-[0_20px_30px_rgba(0,0,0,0.1)] p-4 sm:p-6 flex flex-col items-center justify-center transition-all duration-400 overflow-visible z-20">
        {/* Glowing background effects */}
        <div
          className={`absolute inset-0 ${glowClasses.outer} rounded-3xl blur-3xl scale-0 group-hover:scale-100 transition-all duration-500 ease-out z-0`}
        ></div>
        <div
          className={`absolute inset-0 ${glowClasses.inner} rounded-3xl blur-2xl scale-0 group-hover:scale-100 transition-all duration-700 ease-out delay-100 z-0`}
        ></div>

        {/* Image Box */}
        <div className="transition-all duration-400 group-hover:-translate-y-12 relative z-30 overflow-visible">
          <img
            src={imageSrc}
            alt={title}
            className="block w-full h-auto relative z-50 transition-all duration-400 group-hover:translate-x-[-20px] group-hover:translate-y-[-40px] group-hover:scale-140"
            style={{ position: 'relative', zIndex: 50 }}
          />
        </div>

        <h3 className="text-center text-white text-lg sm:text-xl audiowide font-normal font-['Lato',sans-serif] transition-all duration-400 opacity-100 group-hover:opacity-0 relative z-10">
          {title}
        </h3>

        {/* Content - Hidden by default, shown on hover */}
        <div className="absolute right-4 bottom-4 left-4 text-center text-white text-xs sm:text-sm tracking-[0.1em] opacity-0 transition-all duration-400 group-hover:opacity-100 font-bold z-20">
          {description}
        </div>
      </div>
    </div>
  );
};

export default GlassmorphismCard;
