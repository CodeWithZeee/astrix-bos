import React from "react";

const Landingpage = () => {
  return (
    <section className=" flex flex-col items-start justify-left min-h-screen bg-[#000000] text-white ml-16 mt-65 max-w-1/2">
      <p className="mokoto text-5xl min-h-2 ">
        Meet <span className="mokoto text-[#39FF14] text-5xl"> NOHA </span>-The
        World’s First
        <span className="mokoto text-[#39FF14] text-5xl"> AI-NATIVE </span>
        Business Co-Pilot
      </p>
      <br />
      <div className="flex text-[#39FF14]">
        _______________________________________________________________
      </div>
      <div className="urbanist text-3xl ">Noha runs the entire backend of your business so you can focus on growth, not grind.</div>
      <button className="Major-mono">
        <br />
        See <span className="mokoto text-[#39FF14]">NOHA</span> in action
      </button>
    </section>
  );
};

export default Landingpage;
