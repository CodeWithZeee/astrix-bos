"use client";
import { createContext, useContext, useState } from "react";

const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoadingComplete(true);
  };

  return (
    <LoadingContext.Provider
      value={{ isLoadingComplete, handleLoadingComplete }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};
