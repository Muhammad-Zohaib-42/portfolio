import { Mail, Github, Linkedin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 relative z-10 text-white">
      <div className="max-width">
          <div className="text-center md:text-left">
            {/* top section */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
              {/* brand */}
              <a href="#home" className="text-[28px] md:text-2xl font-bold">
          Zohaib<span className="text-[#31F900]">.</span>
        </a>
              {/* nav links */}
              {/* <nav className="space-x-6 lg:space-x-10 text-md hidden md:block">
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificate</a>
          <a href="#contact">Contact</a>
        </nav> */}
        <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
              {/* social links */}
              <div className="flex items-center gap-4">
                <a href="mailto:muhammadzohaibranjha42@gmail.com" aria-label="email" className="p-2 rounded-md hover:bg-[#31F900] hover:text-black">
                  <Mail size={18} />
                </a>
                <a href="https://github.com/Muhammad-Zohaib-42" target="_blank" rel="noreferrer" aria-label="github" className="p-2 rounded-md hover:bg-[#31F900] hover:text-black">
                  <Github size={18} />
                </a>
                <a href="https://www.linkedin.com/in/muhammad-zohaib-180471334/" target="_blank" rel="noreferrer" aria-label="linkedin" className="p-2 rounded-md hover:bg-[#31F900] hover:text-black">
                  <Linkedin size={18} />
                </a>
                <a href="tel:+923705308459" aria-label="phone" className="p-2 rounded-md hover:bg-[#31F900] hover:text-black">
                  <Phone size={18} />
                </a>
              </div>
            </div>
          </div>
      </div>
    </footer>
  );
}
