"use client"

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function GoToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            console.log(window.scrollY)
            if (window.scrollY > 280 && window.scrollY < 2900) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
  return (
    <a href="#top" className={`${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"} p-3 bg-[#31F900] rounded-full fixed bottom-5 right-5 hover:scale-95 transition border border-black`}>
        <ArrowUp size={20} className="text-black" />
    </a>
  )
}
