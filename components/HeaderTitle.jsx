"use client"

import {motion} from "motion/react"

export default function HeaderTitle() {
  return (
    <motion.a initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }} href="#home" className="text-[28px] md:text-3xl font-bold">
          Zohaib<span className="text-[#31F900]">.</span>
        </motion.a>
  )
}
