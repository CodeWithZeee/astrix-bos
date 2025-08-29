import React from "react";

const MaxWidthWrapper = ({ children }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
