import React from "react";
import ActivitiesWidget from "../components/coreTeam";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mt-33">
      <h1 className="text-5xl text-center ">Meet Our Team</h1>
      <ActivitiesWidget />
    </div>
  );
};

export default page;
