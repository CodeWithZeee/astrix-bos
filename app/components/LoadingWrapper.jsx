"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import { useLoading } from "./LoadingContext";

const LoadingWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const { handleLoadingComplete } = useLoading();

  const onLoadingComplete = () => {
    setIsLoading(false);
    handleLoadingComplete(); // Notify the context
  };

  // Also hide loading screen when window loads (for additional safety)
  useEffect(() => {
    const handleLoad = () => {
      // Add a minimum loading time even if page loads quickly
      setTimeout(() => {
        onLoadingComplete();
      }, 2000); // Minimum 2 seconds
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={onLoadingComplete} />}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default LoadingWrapper;
