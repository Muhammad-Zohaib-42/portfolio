"use client"

import {motion} from "motion/react"

export default function HeroDescription() {
  return (
    <motion.p initial={{opacity: 0, y: -20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.5, ease: "easeOut"}} className="mb-6 md:mb-10 text-sm md:text-base">I build responsive, performance driven websites and enjoy turning ideas into code.</motion.p>
  )
}
