"use client"; // Make this client component for using framer-motion

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Banner = () => {
  return (
    <MaxWidthWrapper>
      <div className="flex items-center justify-center my-44 relative">
        <div className="centerAbsolute hidden md:flex"></div>
        {/* Left Text */}
        <motion.div className="z-0 ml-10  relative">
          <div className="text-[12rem] font-extrabold letterSpace flex">
            <motion.div
              className="hidden md:flex"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0, duration: 0.5, ease: "easeOut" }}
            >
              N
            </motion.div>
            <motion.div
              className="hidden md:flex"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            >
              O
            </motion.div>
          </div>
          <motion.div
            whileInView={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20 }}
            className="absolute right-16 -bottom-[5rem]"
          >
            <div className="size-[7rem] border-white/30 bg-transparent border rotate-45 hidden md:flex" />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          animate={{ y: 0, opacity: 1 }}
          className="z-10"
        >
          {/* Nova Image */}
          <div className="flex items-center justify-center relative w-[200px] h-[300px] mr-12 md:w-[300px] md:h-[450px]">
            <Image src={"/Nova.png"} alt="Nova" fill />
          </div>
        </motion.div>
        {/* Right Text */}
        <motion.div className="-ml-10 z-20 relative">
          <motion.div
            whileInView={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 40 }}
            className="absolute right-16 -top-[5rem]"
          >
            <div className="size-[9rem] border-white/30 bg-transparent border rotate-45 hidden md:flex" />
          </motion.div>
          <div className="text-[12rem] font-extrabold letterSpace flex">
            <motion.div
              className="hidden md:flex"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5, ease: "easeOut" }}
            >
              V
            </motion.div>
            <motion.div
              className="hidden md:flex"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
            >
              A
            </motion.div>
          </div>
        </motion.div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Banner;
