"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
function Hero() {
  return (
    <div className="pl-[5vw] flex justify-between   relative pb-0  ">
      <motion.div
        className="w-[60%] space-y-7 pt-[100px]"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
      >
        <h1 className="text-[74px] leading-none ">
          Looking to save more <br /> on your{" "}
          <span className="font-bold">rental car</span>
        </h1>
        <h1 className=" font-light w-[50%]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </h1>

        <div className="text-lg flex gap-7 pt-8 font-medium">
          <button className=" py-3 px-8 bg-black rounded-xl text-white">
            Learn More
          </button>
          <button>Download Now</button>
        </div>

        <div className="flex justify-between bg-[#FFFFFF] px-2 py-1 rounded-xl top-8 relative shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
          <div className="flex gap-2 items-center font-extralight text-xl hover:bg-[#e4e4e443] rounded-xl px-3 py-1 cursor-pointer">
            <Image
              src="/location.png"
              width={100}
              height={100}
              alt="location"
              className="w-6 h-6"
            />
            <h1>Choose a location</h1>
          </div>
          <div className="flex gap-2 items-center font-extralight text-xl hover:bg-[#e4e4e443] rounded-xl px-3 py-1 cursor-pointer">
            <Image
              src="/calendar.png"
              width={100}
              height={100}
              alt="calendar"
              className="w-6 h-6"
            />
            <h1>Pick-up date</h1>
          </div>
          <div className="flex gap-2 items-center font-extralight text-xl hover:bg-[#e4e4e443] rounded-xl px-3 py-1 cursor-pointer">
            <Image
              src="/calendar.png"
              width={100}
              height={100}
              alt="calendar"
              className="w-6 h-6"
            />
            <h1>Return date</h1>
          </div>

          <button className=" py-6 px-14 bg-black rounded-xl text-white">
            Search
          </button>
        </div>
      </motion.div>
      <motion.div
        className="  w-[40%]  "
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
      >
        <div className="absolute bg-[#1A1919] h-[600px] rounded-tl-[70px]  rounded-br-[70px]  ">
          <Image
            src="/car1.png"
            height={10000}
            width={10000}
            alt="gwagon"
            className="w-[900px] scale-[1.2] top-1/2 left-1/2 transform -translate-x-[40%] translate-y-[30%] "
          />
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;

//  scale-[1.2]   top-1/2 left-1/2 transform -translate-x-[80%] -translate-y-1/2
