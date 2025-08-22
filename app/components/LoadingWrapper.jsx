"use client";
import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";
import { useLoading } from "./LoadingContext";

const LoadingWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(
    document.readyState !== "complete"
  );
  const { handleLoadingComplete } = useLoading();

  const onLoadingComplete = () => {
    setIsLoading(false);
    handleLoadingComplete(); // Notify the context
  };

  useEffect(() => {
    if (document.readyState === "complete") {
      // Page already loaded, show loader for 1 more second
      const timer = setTimeout(() => {
        setIsLoading(false);
        handleLoadingComplete();
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      const handleLoad = () => {
        // Page just finished loading, show loader for 1 more second
        setTimeout(() => {
          setIsLoading(false);
          handleLoadingComplete();
        }, 1000);
      };
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
