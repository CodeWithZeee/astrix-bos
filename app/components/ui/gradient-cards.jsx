"use client";
import React, { useState, useEffect } from "react";

const AnimatedCardGrid = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isToggling, setIsToggling] = useState(false);

  //   const handleThemeToggle = () => {
  //     setIsToggling(true);
  //     setTimeout(() => {
  //       setIsDarkMode(!isDarkMode);
  //       setTimeout(() => setIsToggling(false), 10);
  //     }, 5);
  //   };

  const cardData = [
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z" />
        </svg>
      ),
      title: "AI Voice Agents for inbound & outbound calls",
      // description:
      //   "Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path d="M4.5 9.5V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H9.5C10.0523 4.5 10.5 4.94772 10.5 5.5V9.5C10.5 10.0523 10.0523 10.5 9.5 10.5H5.5C4.94772 10.5 4.5 10.0523 4.5 9.5Z" />
          <path d="M13.5 18.5V14.5C13.5 13.9477 13.9477 13.5 14.5 13.5H18.5C19.0523 13.5 19.5 13.9477 19.5 14.5V18.5C19.5 19.0523 19.0523 19.5 18.5 19.5H14.5C13.9477 19.5 13.5 19.0523 13.5 18.5Z" />
          <path d="M4.5 19.5L7.5 13.5L10.5 19.5H4.5Z" />
          <path d="M16.5 4.5C18.1569 4.5 19.5 5.84315 19.5 7.5C19.5 9.15685 18.1569 10.5 16.5 10.5C14.8431 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 14.8431 4.5 16.5 4.5Z" />
        </svg>
      ),
      title: "One central hub for your daily operations",
      // description:
      //   "Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z" />
        </svg>
      ),
      title: "Automated follow-ups, bookings, and pipeline updates",
      // description:
      //   "Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested.",
    },
    {
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
        >
          <path d="M14.5 3.5C14.5 3.5 14.5 5.5 12 5.5C9.5 5.5 9.5 3.5 9.5 3.5H7.5L4.20711 6.79289C3.81658 7.18342 3.81658 7.81658 4.20711 8.20711L6.5 10.5V20.5H17.5V10.5L19.7929 8.20711C20.1834 7.81658 20.1834 7.18342 19.7929 6.79289L16.5 3.5H14.5Z" />
        </svg>
      ),
      title: "Proactive suggestions, reminders, and instant summaries",
      // description:
      //   "Standard chunk of Lorem Ipsum used since the 1500s is showed below for those interested.",
    },
  ];

  return (
    <div
      className={` flex items-center justify-center pb-8 relative overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-black" : "bg-gray-50"
      }`}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-x-[-60%] top-0 bottom-[65%] transition-opacity duration-300 ${
          isDarkMode ? "opacity-[0.01]" : "opacity-10"
        }`}
        style={{
          backgroundImage:
            "radial-gradient(ellipse at top, #10B981 0%, transparent 50%)",
        }}
      />

      {/* Card Grid */}
      <div
        className={`grid grid-cols-2 gap-8 relative z-10 ${
          isToggling ? "[&_*]:!duration-0" : ""
        }`}
      >
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`group relative cursor-pointer rounded-2xl p-4 pt-14 w-60 transition-all duration-300 ${
              isDarkMode
                ? "bg-zinc-900 shadow-[0_3px_6px_rgba(0,0,0,0.05),0_8px_15px_rgba(0,0,0,0.1)] border border-white/10 hover:shadow-[0_5px_10px_rgba(0,0,0,0.04),0_15px_25px_rgba(0,0,0,0.3)] hover:border-white/20"
                : "bg-transparent shadow-[0_3px_6px_rgba(24,24,27,0.02),0_2px_7px_rgba(24,24,27,0.04)] border border-zinc-900/8 hover:shadow-[0_3px_6px_rgba(24,24,27,0.05),0_8px_15px_rgba(24,24,27,0.1)] hover:border-zinc-900/15"
            }`}
          >
            {/* Card background overlay */}
            <div
              className={`absolute inset-0 rounded-2xl ${
                isDarkMode ? "bg-black" : "bg-transparent"
              }`}
            />

            {/* Icon */}
            <div className="relative z-20 inline-block p-2">
              <div
                className={`absolute inset-[4.5px] rounded-full transition-all duration-300 backdrop-blur-sm ${
                  isDarkMode
                    ? "bg-white/8 border border-white/12 group-hover:bg-emerald-400/10 group-hover:border-emerald-400/20"
                    : "bg-zinc-900/4 border border-zinc-900/10 group-hover:bg-zinc-900/4 group-hover:border-zinc-900/34"
                }`}
              />
              <div
                className={`relative z-10 transition-colors duration-300 ${
                  isDarkMode
                    ? "text-zinc-300 group-hover:text-emerald-400"
                    : "text-zinc-900 group-hover:text-zinc-900"
                }`}
              >
                {card.icon}
              </div>
            </div>

            {/* Content */}
            <h4
              className={`relative z-20 mt-3 mb-1 font-semibold text-sm leading-8 ${
                isDarkMode ? "text-white" : "text-zinc-900"
              }`}
            >
              {card.title}
            </h4>
            <p
              className={`relative z-20 text-sm leading-relaxed ${
                isDarkMode ? "text-zinc-400" : "text-zinc-600"
              }`}
            >
              {card.description}
            </p>

            {/* Shine effect */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              <div
                className="absolute w-[150%] pb-[150%] rounded-full left-1/2 bottom-[55%] -translate-x-1/2 blur-[35px]"
                style={{
                  opacity: isDarkMode ? 0.1 : 0.3,
                  backgroundImage: isDarkMode
                    ? "conic-gradient(from 205deg at 50% 50%, rgba(16, 185, 129, 0) 0deg, #10B981 25deg, rgba(52, 211, 153, 0.18) 295deg, rgba(16, 185, 129, 0) 360deg)"
                    : "conic-gradient(from 225deg at 50% 50%, rgba(16, 185, 129, 0) 0deg, #10B981 25deg, #EDFAF6 285deg, #FFFFFF 345deg, rgba(16, 185, 129, 0) 360deg)",
                }}
              />
            </div>

            {/* Background tiles and lines */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden"
              style={{
                maskImage:
                  "radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%)",
                WebkitMaskImage:
                  "radial-gradient(circle at 60% 5%, black 0%, black 15%, transparent 60%)",
              }}
            >
              {/* Animated tiles */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                {[...Array(10)].map((_, i) => {
                  const tilePositions = [
                    { top: "0%", left: "0%", height: "10%", width: "22.5%" },
                    { top: "0%", left: "22.5%", height: "10%", width: "27.5%" },
                    { top: "0%", left: "50%", height: "10%", width: "27.5%" },
                    { top: "0%", left: "77.5%", height: "10%", width: "22.5%" },
                    { top: "10%", left: "0%", height: "22.5%", width: "22.5%" },
                    {
                      top: "10%",
                      left: "22.5%",
                      height: "22.5%",
                      width: "27.5%",
                    },
                    {
                      top: "10%",
                      left: "50%",
                      height: "22.5%",
                      width: "27.5%",
                    },
                    {
                      top: "10%",
                      left: "77.5%",
                      height: "22.5%",
                      width: "22.5%",
                    },
                    {
                      top: "32.5%",
                      left: "50%",
                      height: "22.5%",
                      width: "27.5%",
                    },
                    {
                      top: "32.5%",
                      left: "77.5%",
                      height: "22.5%",
                      width: "22.5%",
                    },
                  ];
                  const delays = [0, -6, -4, -2, -4, -2, 0, -4, -6, -2];

                  return (
                    <div
                      key={i}
                      className={`absolute opacity-0 group-hover:animate-[tile_8s_infinite] ${
                        isDarkMode ? "bg-emerald-500/5" : "bg-emerald-500/8"
                      }`}
                      style={{
                        ...tilePositions[i],
                        animationDelay: `${delays[i]}s`,
                      }}
                    />
                  );
                })}
              </div>

              {/* Grid lines */}
              {[
                { top: "10%", left: "22.5%", delay: "delay-[300ms]" },
                { top: "32.5%", left: "50%", delay: "delay-150" },
                { top: "55%", right: "22.5%", delay: "delay-0" },
              ].map((line, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 ${line.delay}`}
                >
                  <div
                    className={`absolute left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-350 ${
                      line.delay
                    } ${isDarkMode ? "bg-zinc-700" : "bg-gray-200"}`}
                    style={{ top: line.top }}
                  />
                  <div
                    className={`absolute top-0 bottom-0 w-px origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-350 ${
                      line.delay
                    } ${isDarkMode ? "bg-zinc-700" : "bg-gray-200"}`}
                    style={{
                      left: line.left,
                      right: line.right,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Theme toggle */}
      {/* <label className="absolute top-5 right-5 cursor-pointer opacity-30 hover:opacity-100 transition-opacity">
        <input
          type="checkbox"
          checked={isDarkMode}
          onChange={handleThemeToggle}
          className="sr-only"
        />
        <div 
          className={`relative w-5 h-5 rounded-full transition-all duration-500 ${
            isDarkMode 
              ? 'shadow-[inset_8px_-8px_0_0] scale-100 -rotate-[2deg]' 
              : 'shadow-[inset_20px_-20px_0_0] scale-50 rotate-0'
          } ${isDarkMode ? 'shadow-zinc-400' : 'shadow-zinc-600'}`}
          style={{
            transitionDelay: isDarkMode ? '0.1s' : '0.1s'
          }}
        >
          <div 
            className={`absolute inset-0 rounded-full transition-colors duration-300 ${
              isDarkMode ? 'bg-transparent' : 'bg-zinc-600'
            }`}
            style={{
              transitionDelay: isDarkMode ? '0s' : '0.1s'
            }}
          />
          <div 
            className={`absolute top-1/2 left-1/2 w-1.5 h-1.5 -mt-1.5 -ml-1.5 rounded-full transition-transform duration-500 ${
              isDarkMode ? 'scale-0' : 'scale-100'
            } ${isDarkMode ? 'shadow-zinc-400' : 'shadow-zinc-600'}`}
            style={{
              transitionDelay: isDarkMode ? '0s' : '0.15s',
              boxShadow: `0 -23px 0 ${isDarkMode ? 'rgb(161 161 170)' : 'rgb(82 82 91)'}, 0 23px 0 ${isDarkMode ? 'rgb(161 161 170)' : 'rgb(82 82 91)'}, 23px 0 0 ${isDarkMode ? 'rgb(161 161 170)' : 'rgb(82 82 91)'}, -23px 0 0 ${isDarkMode ? 'rgb(161 161 170)' : 'rgb(82 82 91)'}, 15px 15px 0 ${isDarkMode ? 'rgb(161 161 170)' : 'rgb(82 82 91)'}, -15px 15px 0 ${isDarkMode ? 'rgb(161 161 170)' : 'rgb(82 82 91)'}, 15px -15px 0 ${isDarkMode ? 'rgb(161 161 170)' : 'rgb(82 82 91)'}, -15px -15px 0 ${isDarkMode ? 'rgb(161 161 170)' : 'rgb(82 82 91)'}`
            }}
          />
        </div>
      </label> */}

      {/* Twitter link */}
      {/* <a 
        href="https://twitter.com/aaroniker_me" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-3 right-3 block opacity-50 hover:opacity-100 transition-opacity"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 72 72"
          className="fill-white"
        >
          <path d="M67.812 16.141a26.246 26.246 0 0 1-7.519 2.06 13.134 13.134 0 0 0 5.756-7.244 26.127 26.127 0 0 1-8.313 3.176A13.075 13.075 0 0 0 48.182 10c-7.229 0-13.092 5.861-13.092 13.093 0 1.026.118 2.021.338 2.981-10.885-.548-20.528-5.757-26.987-13.679a13.048 13.048 0 0 0-1.771 6.581c0 4.542 2.312 8.551 5.824 10.898a13.048 13.048 0 0 1-5.93-1.638c-.002.055-.002.11-.002.162 0 6.345 4.513 11.638 10.504 12.84a13.177 13.177 0 0 1-3.449.457c-.846 0-1.667-.078-2.465-.231 1.667 5.2 6.499 8.986 12.23 9.09a26.276 26.276 0 0 1-16.26 5.606A26.21 26.21 0 0 1 4 55.976a37.036 37.036 0 0 0 20.067 5.882c24.083 0 37.251-19.949 37.251-37.249 0-.566-.014-1.134-.039-1.694a26.597 26.597 0 0 0 6.533-6.774z"></path>
        </svg>
      </a> */}

      <style jsx>{`
        @keyframes tile {
          0%,
          12.5%,
          100% {
            opacity: 1;
          }
          25%,
          82.5% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedCardGrid;
