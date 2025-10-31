"use client"

import {motion} from "motion/react"

export default function HeaderBtn() {
  return (
    <motion.a
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
          href="#contact"
          className="btn bg-[#31F900] text-black hidden md:block"
        >
          Let's Talk
        </motion.a>
  )
}
