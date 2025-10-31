"use client";

import { motion } from "motion/react";

export default function HeroTitle() {
  return (
    <motion.h1 initial={{opacity: 0, x: -60}} animate={{opacity: 1, x: 0}} transition={{duratoin: 0.6, ease: "easeOut"}} className="text-[32.5px] md:text-[40px] lg:text-5xl font-semibold text-white leading-10 md:leading-16 my-3 md:my-6">
      <span className="text-[#31F900] block">
        <span className="hidden md:inline">I'm</span> Muhammad Zohaib,
      </span>
      <span className="block">Front-End Developer</span>
    </motion.h1>
  );
}
