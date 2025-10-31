"use client"

import {motion} from "motion/react"

export default function DownloadCv() {
  return (
    <motion.a initial={{opacity: 0, scale: 0.8}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.3, ease: "easeOut"}} href="/Muhammad-Zohaib-CV.pdf" download className="bg-black text-white btn border border-[#31F900] inline-block">Download CV</motion.a>
  )
}
