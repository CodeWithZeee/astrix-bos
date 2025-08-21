"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Simulate loading time (you can adjust this)
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Add a small delay before calling onLoadingComplete for smooth transition
      setTimeout(() => {
        onLoadingComplete();
      }, 300);
    }, 1500); // 1.5 seconds loading time

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0b0f17]">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20  to-cyan-900/20"></div>

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/30 rounded-full animate-ping"></div>
        <div
          className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-400/30 rounded-full animate-ping"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-400/30 rounded-full animate-ping"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Logo container */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Blinking logo */}
        <div className="animate-blink mb-8">
          <Image
            src="/logo.png"
            alt="Astrix Logo"
            width={120}
            height={120}
            className="drop-shadow-2xl"
            priority
          />
        </div>

        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4 animate-fade-in bitcount ">
            Loading, please wait...
          </h2>
          <div className="flex space-x-1 justify-center">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
            <div
              className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
