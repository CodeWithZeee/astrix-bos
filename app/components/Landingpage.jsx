"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { AudioLines } from "lucide-react";

const Landingpage = () => {
  const openCalendly = (e) => {
    e.preventDefault();
    const calendlyUrl = "https://calendly.com/cursoraccnt001/new-meeting";

    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });

      // Fix popup positioning and add close on overlay click
      setTimeout(() => {
        const overlay = document.querySelector(".calendly-overlay");
        const popupContent = document.querySelector(
          ".calendly-popup-content, .calendly-popup-content-wrapper"
        );

        if (overlay) {
          overlay.style.display = "flex";
          overlay.style.alignItems = "center";
          overlay.style.justifyContent = "center";

          overlay.addEventListener("click", (e) => {
            if (e.target === overlay && window.Calendly?.closePopupWidget) {
              window.Calendly.closePopupWidget();
            }
          });
        }

        if (popupContent) {
          popupContent.style.position = "relative";
          popupContent.style.margin = "auto";
          popupContent.style.width = "100%";
          popupContent.style.minWidth = "320px";
          popupContent.style.maxWidth = "1200px";
          popupContent.style.maxHeight = "90vh";
          popupContent.addEventListener("click", (e) => e.stopPropagation());

          // Fix iframe sizing
          const iframe = popupContent.querySelector("iframe");
          if (iframe) {
            iframe.style.width = "100%";
            iframe.style.minWidth = "320px";
            iframe.style.height = "630px";
            iframe.style.minHeight = "630px";
            iframe.style.maxHeight = "90vh";
          }
        }
      }, 500);
    } else {
      window.open(calendlyUrl, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <section className="flex flex-col relative lg:flex-row items-center justify-between  bg-[#000000] text-white px-4 lg:ml-16 lg:mt-65 md:mt-65 sm:mt-30 mt-7.5  max-w-full">
      {/* Left Side: Text and Button */}
      <div className="flex flex-col items-center lg:items-start max-w-full sm:mt-4 mt-20 z-10 backdrop-blur-[2px] lg:max-w-1/2 text-center lg:text-left mb-8 lg:mb-0">
        <p className="mokoto text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
          <span className="mokoto text-green-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Enterprise Grade AI
          </span>{" "}
          <br />
          {/* Enterprise Grade{" "} */}
          {/* <span className="mokoto text-green-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Enterprise Grade AI 
          </span>{" "} */}
          for every Business
        </p>
        <br /> {/* Border */}
        <div className=" hidden lg:flex overflow-hidden border w-full border-green-400 border-dashed" />
        <div className="audiowide text-base sm:text-lg md:text-xl leading-relaxed mt-4">
          <span className="text-green-400">AstrixBOS</span> is the world's first
          AI-Native Business Operating System built for SMBs
        </div>
        <div className="audiowide text-base sm:text-lg md:text-xl leading-relaxed mt-10">
          Automate operations, engage customers instantly and understand your
          business like a Fortune 500 — powered by your AI Copilot Noha.
        </div>
        <br />
        {/* Calendly Popup Button */}
        <div className="w-full lg:w-auto">
          <button
            type="button"
            onClick={openCalendly}
            className="mokoto hover:scale-105 transition-all duration-150 border-dotted border-2 border-green-400 rounded-3xl p-3 sm:p-4 cursor-pointer flex items-center gap-2 text-sm sm:text-base mx-auto lg:mx-0 justify-center text-white bg-transparent whitespace-nowrap"
          >
            <span className="pt-1"> Book a </span>
            <span className="mokoto text-green-400 pt-1"> Live </span>
            <span className="pt-1">Demo</span>
            <AudioLines className="h-5 flex-shrink-0" />
          </button>
        </div>
      </div>
      {/* Right Side: Lottie Animation */}
      <div className="flex justify-center items-center w-full lg:w-auto absolute absoluteCenter -z-0">
        <DotLottieReact
          src="https://lottie.host/0fe466c8-fb8c-44f8-a097-4416b6074507/1vpdz9rTZY.lottie"
          loop
          autoplay
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "auto",
            minHeight: "300px",
          }}
          className="w-full"
        />
      </div>
    </section>
  );
};
export default Landingpage;
