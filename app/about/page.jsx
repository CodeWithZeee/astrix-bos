"use client";
import React from "react";
import ActivitiesWidget from "../components/coreTeam";
import { AudioLines } from "lucide-react";

const page = () => {
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
            iframe.style.height = "550px";
            iframe.style.minHeight = "550px";
            iframe.style.maxHeight = "80vh";
          }
        }
      }, 500);
    } else {
      window.open(calendlyUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-33">
      <h1 className="text-5xl text-center ">
        Meet Our <span className="text-green-400">Team</span>
      </h1>
      <ActivitiesWidget />
      <br />
      <h1 className="text-5xl text-green-400 text-center mt-12">Mission</h1>
      <p className="text-xl text-center max-w-4xl mt-6">
        To put enterprise-level AI Automation into the hands of every
        entrepreneur and SMB.
      </p>
      <br />
      <h1 className="text-5xl text-green-400 text-center mt-12">Vision</h1>
      <p className="text-xl text-center max-w-4xl mt-6">
        To become the AI-native operating system that powers how millions of
        businesses think, operate and grow.
      </p>

      {/* Book a Live Demo Button */}
      <div className="flex justify-center mt-12 mb-8">
        <button
          type="button"
          onClick={openCalendly}
          className="mokoto hover:scale-105 transition-all duration-150 border-dashed border-2 border-green-400 rounded-3xl p-3 sm:p-4 cursor-pointer flex items-center gap-2 text-sm sm:text-base justify-center text-white bg-transparent whitespace-nowrap"
        >
          <span className="pt-1"> Book a </span>
          <span className="mokoto text-green-400 pt-1"> Live </span>
          <span className="pt-1">Demo</span>
          <AudioLines className="h-5 shrink-0" />
        </button>
      </div>
    </div>
  );
};

export default page;
