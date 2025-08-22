import React from "react";

const Landingpage = () => {
  return (
    <section className=" flex flex-col items-start justify-left min-h-screen bg-[#000000] text-white ml-16 mt-65 max-w-1/2">
      <p className="mokoto text-5xl min-h-2 ">
        Meet <span className="mokoto text-green-400 text-5xl"> NOHA </span>-The
        World’s First
        <span className="mokoto text-green-400 text-5xl"> AI-NATIVE </span>
        Business Co-Pilot
      </p>
      <br />
      <div className="flex text-green-400">
        _______________________________________________________________
      </div>
      <div className="audiowide text-xl ">Noha runs the entire backend of your business so you can focus on growth, not grind.</div>
      <br />
      <button className=" Major-mono border-dotted border-2 border-green-400 rounded-3xl p-4  cursor-pointer">
        Watch <span className="mokoto text-green-400 gap-10">NOHA</span> <span> in action |  <img src="voice.png" alt="" className="inline-block w-6 h-6 ml-2"/> </span>
      </button>
    </section>
  );
};

export default Landingpage;
