"use client"

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function () {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="block md:hidden">
      <button onClick={() => setIsMenuOpen(true)} className="cursor-pointer">
        <Menu className="w-8 h-8" />
      </button>
      <div className={`fixed top-0 left-0 h-screen w-full bg-black ${!isMenuOpen ? "-translate-x-full" : "-translate-x-0"} transition`}>
        <div className="fixed inset-0 z-40" style={{backgroundImage: `linear-gradient(to right, #262626 1px, transparent 1px),linear-gradient(to bottom, #262626 1px, transparent 1px)`,backgroundSize: "20px 20px",}}></div>
        <div className="relative z-50">
          <div className="flex justify-end px-4 pt-[10px]">
            <button onClick={() => setIsMenuOpen(false)}>
              <X className="w-9 h-9" />
            </button>
          </div>
          <nav className="px-4 pt-3 flex flex-col text-3xl">
            <a onClick={() => setIsMenuOpen(false)} href="#home" className="py-2 underline decoration-[#31F900]">Home</a>
            <a onClick={() => setIsMenuOpen(false)} href="#experience" className="py-2 underline decoration-[#31F900]">Experience</a>
            <a onClick={() => setIsMenuOpen(false)} href="#projects" className="py-2 underline decoration-[#31F900]">Projects</a>
            <a onClick={() => setIsMenuOpen(false)} href="#certificates" className="py-2 underline decoration-[#31F900]">Certificate</a>
            <a onClick={() => setIsMenuOpen(false)} href="#contact" className="py-2 underline decoration-[#31F900]">Contact</a>
          </nav>
        </div>
      </div>
    </div>
  );
}
