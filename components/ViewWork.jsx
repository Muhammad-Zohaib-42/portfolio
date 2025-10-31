"use client"

import {motion} from "motion/react"

export default function ViewWork() {
  return (
    <motion.a initial={{opacity: 0, scale: 0.8}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.3, ease: "easeOut"}} href="#projects" className="btn bg-[#31F900] text-black mr-3 inline-block">View My Work</motion.a>
  )
}
