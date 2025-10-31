"use client"

import Image from "next/image";
import SocialIcons from "./SocialIcons";
import zohaib from "../public/zohaib.webp"
import {motion} from "motion/react"

export default function HeroRight() {
  return (
    <motion.div initial={{opacity: 0, x: 60}} animate={{opacity: 1, x: 0}} transition={{duration: 0.6, ease: "easeOut"}} className="relative w-full md:w-[40%] h-80 md:h-full mt-3 md:mt-0">
        <Image src={zohaib} alt="Zohaib Ranjha" className="absolute bottom-0 drop-shadow-[0_4px_8px_#31F900] transition md:saturate-150" width={600} height={600} />
        <SocialIcons />
    </motion.div>
  )
}
