import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="text-white mb-3 md:mb-0">
      <div className="max-width flex items-center justify-between h-16 md:h-20 mb-0 md:-mb-20 relative z-50">
        <a href="#home" className="text-[28px] md:text-3xl font-bold">
          Zohaib<span className="text-[#31F900]">.</span>
        </a>
        <nav className="space-x-6 lg:space-x-10 text-lg hidden md:block">
          <a href="#home">Home</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#certificates">Certificate</a>
          <a href="#contact">Contact</a>
        </nav>
        <a
          href="#contact"
          className="btn bg-[#31F900] text-black hidden md:block"
        >
          Let's Talk
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}
