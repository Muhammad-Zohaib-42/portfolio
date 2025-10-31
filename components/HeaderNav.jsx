"use client"

import {motion} from "motion/react"

export default function HeaderNav() {
  return (
    <nav className="space-x-6 lg:space-x-10 text-lg hidden md:block">
        {["Home", "Experience", "Projects", "Certificate", "Contact"].map((link, i) => (
          <motion.a
            key={i}
            href={`#${link.toLowerCase()}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.2 + i * 0.1,
              ease: "easeOut",
            }}
            className="hover:text-green-400 transition-colors duration-200"
          >
            {link}
          </motion.a>
        ))}
      </nav>
  )
}
