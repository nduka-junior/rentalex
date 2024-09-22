"use client";

import Choose from "@/components/Choose";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Works from "@/components/Works";
import React from "react";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{  opacity: 1 }}
        transition={{ ease: "easeOut", duration: 0.7 }}
        className="bg-gradient-to-br from-[#D4D4D4]  to-[#F4F4F4]
      "
      >
        <Nav />

        <Hero />
      </motion.div>
      <Works />
      <Featured />
      <Choose />
      <Footer />
    </div>
  );
}
