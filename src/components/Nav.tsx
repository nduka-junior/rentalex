"use client";
import React from "react";
import { motion } from "framer-motion";
function Nav() {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.7 }}
    >
      <div className="bg-black  py-2  flex  items-center justify-center text-white text-sm gap-2 font-light tracking-wide">
        <h1>Figma design from</h1>
        <span>
          <a
            href="https://d4461905418910.gumroad.com/?recommended_by=library"
            className="text-blue-500"
            target="_blank"
          >
            dorinelrushi
          </a>
        </span>
      </div>
      <div className="px-[5vw]  py-2 flex justify-between  items-center">
        <div className="flex items-center gap-16">
          <h1 className="text-[34px] font-semibold">RentalEx</h1>

          <ul className="flex gap-[4vw]   justify-between text-lg font-light">
            <li className="cursor-pointer">Rent</li>
            <li className="cursor-pointer">Share</li>
            <li className="cursor-pointer">Ride</li>
            <li className="cursor-pointer">Service</li>
          </ul>
        </div>

        <div className="text-lg flex gap-7">
          <button>Sign Up</button>
          <button className=" py-2 px-5 bg-black rounded-xl text-white">
            Sign In
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Nav;
